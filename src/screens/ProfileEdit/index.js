import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { AiOutlineUser } from 'react-icons/ai';
import cn from "classnames";
import { useFormik } from 'formik';
import { useWeb3React } from "@web3-react/core";

import styles from "./ProfileEdit.module.sass";
import TextInput from "components/TextInput";
import TextArea from "components/TextArea";
import Loader from "components/Loader";
import useGetUser from "utils/hooks/use-get-user";
import { IMAGE_TYPES } from 'utils/constants/file-types';
import uploadFileToS3 from "utils/helpers/apis/s3-upload-file";
import { postUserData, putUserData } from "utils/helpers/apis/save-user-data";
import { useHistory } from "react-router";
import WalletConnection from 'components/WalletConnection';
import UPLOAD_CATEGORIES from "utils/constants/upload-categories";

const ProfileEdit = () => {
  const { account } = useWeb3React();
  const { user, reload } = useGetUser({ account });
  const userAvatarFile = useRef();
  const [avatar, setAvatar] = useState();
  const [loading, setLoading] = useState(false);
  const [initializedFormik, setInitializedFormik] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (account) {
      setInitializedFormik(false);
    }
  }, [account]);

  const formik = useFormik({
    initialValues: {
      userName: user.userName || '',
      description: user.description || '',
      twitter: user.twitter || '',
      facebook: user.facebook || '',
      instagram: user.instagram || ''
    },
    onSubmit: async values => {
      if (!!account) {
        setLoading(true);
        let userAvatarUrl = '';
        if (userAvatarFile.current.files[0]) {
          const result = await uploadFileToS3(userAvatarFile.current.files[0], UPLOAD_CATEGORIES.PROFILE_AVATAR);
          if (result.isSuccess) {
            userAvatarUrl = result.data.location;
          }
        }
        let isSuccess = false;
        let data = {
          address: account,
          ...values
        };
        if (userAvatarUrl) {
          data = { ...data, avatar: userAvatarUrl };
        };
        if (!!user.address) {
          isSuccess = await putUserData(data);
        } else {
          isSuccess = await postUserData(data);
        }
        if (isSuccess) {
          await reload();
        }
        setLoading(false);
        history.push('/profile');
      } else {
        toast('Please Connect Your Wallet', { type: 'warning' });
      }
    }
  });

  useEffect(() => {
    if (user.address && !initializedFormik) {
      setInitializedFormik(true);
      formik.setValues({
        userName: user.userName || '',
        description: user.description || '',
        twitter: user.twitter || '',
        facebook: user.facebook || '',
        instagram: user.instagram || ''
      })
    }
  }, [formik, user, initializedFormik]);

  const onAvatarChangeHandler = event => {
    if (IMAGE_TYPES.includes(event.target.files[0].type)) {
      if (event.target.files.length !== 0) {
        const reader = new FileReader();
        reader.onload = e => {
          setAvatar(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      toast('Not Supported Format.', { type: 'warning' });
    }
  };

  if (!account) {
    return (
      <WalletConnection />
    );
  }

  return (
    <div className={styles.page}>
      {/* <Control className={styles.control} item={breadcrumbs} /> */}
      <div className={cn("section", styles.section)}>
        {/* <div className={cn("container-fluid", styles.container)}> */}
        <div className={cn("container-fluid")}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Edit profile</h1>
            <div className={styles.info}>
              You can set preferred display name, create{" "}
              <strong>your profile URL</strong> and manage other personal
              settings.
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  {!!avatar ? (
                    <img src={avatar} alt="Avatar" />
                  ) : (
                    user.avatar ? <img src={user.avatar} alt="Avatar" /> :
                    <AiOutlineUser />
                  )}
                </div>
                <div className={styles.details}>
                  <div className={styles.stage}>Profile photo</div>
                  <div className={styles.text}>
                    We recommend an image of at least 400x400.
                    <span role="img" aria-label="hooray">
                      🙌
                    </span>
                  </div>
                  <div className={styles.file}>
                    <label
                      htmlFor='user-avatar'
                      className={cn(
                        "button button-small btn-square",
                        styles.button
                      )}>
                      Upload
                    </label>
                    <input id='user-avatar' className={styles.load} type="file" ref={userAvatarFile} onChange={onAvatarChangeHandler} />
                  </div>
                </div>
              </div>
            </div>
            <form className={styles.col} onSubmit={formik.handleSubmit}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Account info</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="User Name"
                      name="userName"
                      type="text"
                      placeholder="Enter your name"
                      onChange={formik.handleChange}
                      value={formik.values.userName}
                    />
                    <TextArea
                      className={styles.field}
                      label="Description"
                      name="description"
                      placeholder="About yourself in a few words"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Social</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="Twitter"
                      name="twitter"
                      type="text"
                      placeholder="Enter Your Twitter URL"
                      onChange={formik.handleChange}
                      value={formik.values.twitter} />
                    <div className={styles.box}>
                      <TextInput
                        className={styles.field}
                        label="Facebook"
                        name="facebook"
                        type="text"
                        placeholder="Enter Your Facebook URL"
                        onChange={formik.handleChange}
                        value={formik.values.facebook} />
                    </div>
                    <div className={styles.box}>
                      <TextInput
                        className={styles.field}
                        label="Instagram"
                        name="instagram"
                        type="text"
                        placeholder="Enter Your Instagram URL"
                        onChange={formik.handleChange}
                        value={formik.values.instagram} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.note}>
                To update your settings you should sign message through your
                wallet. Click 'Update profile' then sign the message
              </div>
              <div className={styles.btns}>
                <button className={cn("button btn-square", styles.button, { [styles.disabled]: loading })} type='submit'>
                  {loading && (
                    <Loader className={styles.loader} />
                  )}
                  Update Profile
                </button>
                <button className={cn("button-stroke btn-square", styles.button, { [styles.disabled]: loading })} onClick={() => history.push('/profile')}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
