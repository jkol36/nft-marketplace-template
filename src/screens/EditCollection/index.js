import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { useFormik } from 'formik';
import cn from 'classnames';
import * as yup from 'yup';
import { AiOutlineUser, AiOutlineFileImage, AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';

import styles from './EditCollection.module.sass';
import Button from 'components/Button';
import Loader from "components/Loader";
import TextInput from 'components/TextInput';
import { IMAGE_TYPES } from 'utils/constants/file-types';
import uploadFileToS3 from 'utils/helpers/apis/s3-upload-file';
import UPLOAD_CATEGORIES from 'utils/constants/upload-categories';
import { useWeb3React } from '@web3-react/core';
import { postCollectionData, putCollectionData } from 'utils/helpers/apis/save-collection-data';
import WalletConnection from 'components/WalletConnection';
import { artifacts } from 'config';
import { fetchCollection } from 'utils/helpers/apis/fetch-collection-data';
import { dataURLtoFile, toDataURL } from 'utils/helpers/common';

const validationSchema = yup.object({
  name: yup
    .string('Enter name')
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  avatar: yup
    .mixed()
    .required('Avatar is required')
    .test(
      'fileFormat',
      'Unsupported Format',
      value => value && IMAGE_TYPES.includes(value.type)
    ),
  nftAddress: yup
    .mixed()
    .test(
      'addressFormat',
      'Invalid Address',
      value => value ? value.substr(0, 2) === '0x' && value.length === 42 : true
    )
});

const EditCollection = () => {
  const [loading, setLoading] = useState(false);
  const [formikInitialized, setFormikInitialized] = useState(false);
  const [avatarChanged, setAvatarChanged] = useState(false);
  const history = useHistory();
  const { account } = useWeb3React();
  const { name } = useParams();
  const isEdit = !!name;

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      externalLink: '',
      avatar: undefined,
      background: undefined,
      nftAddress: '',
      avatarUrl: undefined,
      backgroundUrl: undefined
    },
    validationSchema,
    onSubmit: async values => {
      setLoading(true);
      let data = {
        owner: account,
        name: formik.values.name,
        nftAddress: artifacts.closedSeaNft[process.env.REACT_APP_DEFAULT_CHAINID || 97],
        description: formik.values.description
      };
      try {
        let rAvatar = { isSuccess: true };
        if (isEdit) {
          if (avatarChanged) {
            rAvatar = await uploadFileToS3(formik.values.avatar, UPLOAD_CATEGORIES.COLLECTION_AVATAR);
          }
        } else {
          rAvatar = await uploadFileToS3(formik.values.avatar, UPLOAD_CATEGORIES.COLLECTION_AVATAR);
        }
        if (rAvatar.isSuccess) {
          if (formik.values.background) {
            const rBackground = await uploadFileToS3(formik.values.background, UPLOAD_CATEGORIES.COLLECTION_BACKGROUND);
            if (rBackground.isSuccess) {
              data = {
                ...data,
                background: rBackground.data.location
              }
            }
          }
          if (rAvatar.data) {
            data = {
              ...data,
              avatar: rAvatar.data.location
            }
          }
          if (isEdit) {
            data = {
              ...data,
              _id: formik.values._id
            }
            const result = await putCollectionData(data);
            if (result) {
              toast('Collection updated successfully.');
              history.push('/my-collections');
            }
          } else {
            const result = await postCollectionData(data);
            if (result) {
              toast('Collection created successfully.');
              history.push('/my-collections');
            }
          }
        } else {
          throw new Error('An Error occured during file uploading.');
        }
      } catch (error) {
        setLoading(false);
        console.log('aj : ***** error => ', error);
        toast(error.toString());
      }
    }
  });

  useEffect(() => {
    if (name && !formikInitialized) {
      fetchCollection(name).then(data => {
        formik.setValues({
          _id: data._id,
          avatar: data.avatar,
          avatarUrl: data.avatar,
          name: data.name,
          description: data.description,
          backgroundUrl: data.background,
          externalLink: data.externalLink
        })
        setFormikInitialized(true);
        if (data.avatar) {
          const extension = data.avatar.split('.')[data.avatar.split('.').length - 1];
          toDataURL(data.avatar).then(u => {
            const fileData = dataURLtoFile(u, `same.${extension}`);
            formik.setFieldValue('avatar', fileData);
          })
        }
      })
    }
  }, [name, formik, formikInitialized]);

  const onAvatarChangeHandler = event => {
    if (event.target.files[0]) {
      setAvatarChanged(true);
      formik.setFieldValue('avatar', event.target.files[0]);
      if (IMAGE_TYPES.includes(event.target.files[0].type)) {
        if (event.target.files.length !== 0) {
          const reader = new FileReader();
          reader.onload = e => {
            formik.setFieldValue('avatarUrl', e.target.result);
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      } else {
        toast('Not Supported Format.', { type: 'warning' });
      }
    }
  };

  const onBackgroundChangeHandler = event => {
    formik.setFieldValue('background', event.target.files[0]);
    if (IMAGE_TYPES.includes(event.target.files[0].type)) {
      if (event.target.files.length !== 0) {
        const reader = new FileReader();
        reader.onload = e => {
          formik.setFieldValue('backgroundUrl', e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      toast('Not Supported Format.', { type: 'warning' });
    }
  };

  const onCancelHandler = () => {
    history.push('/my-collections');
  };

  const onBackgroundRemoveHandler = () => {
    formik.setFieldValue('background', undefined);
    formik.setFieldValue('backgroundUrl', undefined);
  };

  if (!account) {
    return (
      <WalletConnection />
    );
  }

  return (
    <div className={styles.root}>
      <h2 className={cn('h2', styles.bottomMargin)}>New Collection</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <span className='flex body1 bold'>Avatar Image <p style={{ color: 'red', fontWeight: 500, marginLeft: '4px' }}>*</p></span>
        <span className={cn('caption', styles.grayColor)}>This image will be used for logo.</span>
        <div className={styles.file}>
          <div className={cn(styles.avatarLabel)}>
            <label
              htmlFor='avatar'>
              {formik.values.avatarUrl ? (
                <img src={formik.values.avatarUrl} className={styles.avatarImg} alt='avatar' />
              ) : (
                <AiOutlineUser style={{ width: '64px', height: '64px', cursor: 'pointer' }} />
              )}
            </label>
          </div>
          <input id='avatar' name='avatar' className={styles.load} type='file' onChange={onAvatarChangeHandler} />
        </div>

        <span className={cn('flex body1 bold', styles.topMargin)}>Background Image</span>
        <span className={cn('caption', styles.grayColor)}>This image will appear at the top of your collection page.</span>
        <div className={styles.file}>
          <div className={cn(styles.backgroundLabel)}>
            {!!formik.values.backgroundUrl && <Button className={styles.btnClose} variant='circle-stroke' onClick={onBackgroundRemoveHandler}>
              <AiOutlineClose />
            </Button>}
            <label
              htmlFor='background'>
              {formik.values.backgroundUrl ? (
                <img src={formik.values.backgroundUrl} alt='background' />
              ) : (
                <AiOutlineFileImage style={{ width: '64px', height: '64px', cursor: 'pointer' }} />
              )}
            </label>
          </div>
          <input id='background' name='background' className={styles.load} type='file' onChange={onBackgroundChangeHandler} />
        </div>

        <TextInput
          className={cn(styles.topMargin, styles.textInput)}
          label='Name'
          name='name'
          placeholder="e. g. “Redeemable Bitcoin Collection”"
          error={formik.touched.name && Boolean(formik.errors.name)}
          errorMsg={formik.touched.name && formik.errors.name}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required />
        <TextInput
          className={cn(styles.topMargin, styles.textInput)}
          label='Description'
          name='description'
          placeholder="e. g. “After purchasing you will able to recived the logo...”"
          value={formik.values.description}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange} />
        <TextInput
          className={cn(styles.topMargin, styles.textInput)}
          label="External Link"
          name="externalLink"
          type="text"
          value={formik.values.externalLink}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="e. g. “https://yoursite.com/123”" />
        <div className={cn('flex', styles.buttons)}>
          <button
            className={cn("button btn-square", styles.button, {
              [styles.disabled]: loading || !account,
            })}
            type="submit"
          >
            {loading && <Loader className={styles.loader} />}
            <span>Create Collection</span>
            {/* <Icon name="arrow-next" size="10" /> */}
          </button>
          <button
            className={cn("button-stroke btn-square", styles.button, styles.leftMargin, {
              [styles.disabled]: loading || !account,
            })}
            onClick={onCancelHandler}
          >
            {/* {loading && <Loader className={styles.loader} />} */}
            <span>Cancel</span>
            {/* <Icon name="arrow-next" size="10" /> */}
          </button>

        </div>
      </form>
    </div>
  );
};

export default EditCollection;
