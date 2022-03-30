import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import cn from "classnames";
import styles from "./UploadDetails.module.sass";
import Dropdown from "../../components/Dropdown";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import Switch from "../../components/Switch";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Preview from "./Preview";
import Cards from "./Cards";
import FolowSteps from "./FolowSteps";
import axios from "axios";
// import ProgressBar from 'reac'
// import ProgressBar from "react-bootstrap/ProgressBar";
import "./style.css";

const royaltiesOptions = ["10%", "20%", "30%"];

const items = [
  {
    title: "Create collection",
    color: "#4BC9F0",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#45B26B",
  },
  {
    title: "Crypto Legend - Professor",
    color: "#EF466F",
  },
  {
    title: "Legend Photography",
    color: "#9757D7",
  },
];

const Upload = () => {
  const [royalties, setRoyalties] = useState(royaltiesOptions[0]);
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState(false);
  const [locking, setLocking] = useState(false);
  const [selecteditem, setSelectedItem] = useState(0);
  const [itemName, setItemName] = useState();
  const [description, setDescription] = useState();
  const [size, setSize] = useState();
  const [propertie, setPropertie] = useState();

  const [selectedfile, setSelectedfile] = useState(null);
  const [loaded, setLoaded] = useState(0);

  const [visibleModal, setVisibleModal] = useState(false);

  const [visiblePreview, setVisiblePreview] = useState(false);
  const [formError, setFormError] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSelectItem = (index) => {
    setSelectedItem(index);
    console.log(items[index]);
  };

  const handleFile = (e) => {
    setSelectedfile(e.target.files[0]);
    setLoaded(0);
  };

  const handleUpload = () => {
    if (
      selectedfile &&
      itemName &&
      description &&
      royalties &&
      size &&
      propertie &&
      items[selecteditem]
    ) {
      setFormError(false);
      const formdata = new FormData();
      formdata.append("file", selectedfile, selectedfile.name);
      console.log(selectedfile);

      const productData = {
        itemName: itemName,
        description: description,
        royalties: royalties,
        size: size,
        propertie: propertie,
        sale: sale,
        price: price,
        lock: locking,
        "title&color": items[selecteditem],
      };

      const da = JSON.stringify(productData);
      formdata.append("body", da);
      //console.log(JSON.parse(da));

      const url = "http://localhost:4000/upload";
      axios
        .post(url, formdata, {
          onUploadProgress: (ProgressEvent) => {
            setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
          },
        })
        .then((res) => {
          console.log(res.status);
          setError(false);
          console.log("file uploaded to Server");
          setLoaded(0);
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        });
    } else {
      setFormError(true);
    }
  };

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container center-1200", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <div className={cn("h2", styles.title)}>
                Create Multiple collectible
              </div>
              <button
                className={cn(
                  "button-stroke btn-square button-small",
                  styles.button
                )}
                onClick={() => history.push("/mint")}
              >
                Switch to Single
              </button>
            </div>
            {formError ? (
              <div className="alert alert-primary w-50" role="alert">
                <p>
                  <strong>Fill the form </strong> some fields are missing{" "}
                </p>
              </div>
            ) : (
              <div></div>
            )}

            {error ? (
              <div className="alert alert-danger w-50" role="alert">
                <p>
                  <strong>Server error</strong> unable to connect with server{" "}
                </p>
              </div>
            ) : (
              <div></div>
            )}
            <form className={styles.form} action="">
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Upload file</div>
                  <div className={styles.note}>
                    Drag or choose your file to upload
                  </div>
                  <div className={styles.file}>
                    <input
                      className={styles.load}
                      type="file"
                      onChange={(e) => handleFile(e)}
                    />
                    <div className={styles.icon}>
                      <Icon name="upload-file" size="24" />
                    </div>
                    <div className={styles.format}>
                      PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                    </div>
                  </div>
                  {/* {loaded != 0 ? (
                    <ProgressBar
                      now={Math.round(loaded)}
                      label={`${Math.round(loaded)}%`}
                      data-toggle="tooltip"
                      data-placement="top"
                      title="File is uploading"
                    />
                  ) : (
                    ""
                  )} */}
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Item Details</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="Item name"
                      name="Item"
                      type="text"
                      onChange={(e) => setItemName(e.target.value)}
                      placeholder='e. g. Redeemable Bitcoin Card with logo"'
                      required
                    />
                    <TextInput
                      className={styles.field}
                      label="Description"
                      name="Description"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e. g. “After purchasing you will able to recived the logo...”"
                      required
                    />
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <div className={styles.field}>
                          <div className={styles.label}>Royalties</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={royalties}
                            setValue={setRoyalties}
                            options={royaltiesOptions}
                          />
                        </div>
                      </div>
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Size"
                          name="Size"
                          type="text"
                          onChange={(e) => setSize(e.target.value)}
                          placeholder="e. g. Size"
                          required
                        />
                      </div>
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Propertie"
                          name="Propertie"
                          type="text"
                          onChange={(e) => setPropertie(e.target.value)}
                          placeholder="e. g. Propertie"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.options}>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Put on sale</div>
                    <div className={styles.text}>
                      You’ll receive bids on this item
                    </div>
                  </div>
                  <Switch value={sale} setValue={setSale} />
                </div>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Instant sale price</div>
                    <div className={styles.text}>
                      Enter the price for which the item will be instantly sold
                    </div>
                  </div>
                  <Switch value={price} setValue={setPrice} />
                </div>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Unlock once purchased</div>
                    <div className={styles.text}>
                      Content will be unlocked after successful transaction
                    </div>
                  </div>
                  <Switch value={locking} setValue={setLocking} />
                </div>
                <div className={styles.category}>Choose collection</div>
                <div className={styles.text}>
                  Choose an exiting collection or create a new one
                </div>
                <Cards
                  className={styles.cards}
                  items={items}
                  handleSelectItem={handleSelectItem}
                />
              </div>
              <div className={styles.foot}>
                <button
                  className={cn("button-stroke tablet-show", styles.button)}
                  onClick={() => setVisiblePreview(true)}
                  type="button"
                >
                  Preview
                </button>
                <button
                  className={cn("button btn-square", styles.button)}
                  onClick={() => {
                    //setVisibleModal(true)
                    handleUpload();
                  }}
                  // type="button" hide after form customization
                  type="button"
                >
                  <span>Create item</span>
                  <Icon name="arrow-next" size="10" />
                </button>
                <div className={styles.saving}>
                  <span>Auto saving</span>
                  <Loader className={styles.loader} />
                </div>
              </div>
            </form>
          </div>
          <Preview
            className={cn(styles.preview, { [styles.active]: visiblePreview })}
            onClose={() => setVisiblePreview(false)}
          />
        </div>
      </div>
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <FolowSteps className={styles.steps} />
      </Modal>
    </>
  );
};

export default Upload;
