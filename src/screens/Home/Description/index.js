import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";
import CardHero from "components/CardHero/CardHero";

const images = ["./images/content/pic11.png"];
const avatar = [
  {
    id: 1,
    image: "./icon1.png",
    check: true,
  },
  {
    id: 2,
    image: "./icon2.png",
    check: false,
  },
  {
    id: 3,
    image: "./icon3.png",
    check: true,
  },
];
const Description = () => {
  return (
    <div className={cn("container-fluid", styles.section)}>
      <div className={cn(styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.stage}>Join</div>
          <h1 className={cn("font-50", styles.title)}>
            FOOTIE+ - The World's Biggest Collection Of Football Exclusive NFTs
          </h1>
          {/* <div className={styles.text}>
            A creative agency that lead and inspire
          </div> */}
          <div className={styles.btns}>
            <Link
              className={cn("button btn-square", styles.button)}
              to="/upload-variants"
            >
              Create item
            </Link>
            <Link
              className={cn("button-stroke btn-square", styles.button)}
              to="/marketplace"
            >
              Discover more
            </Link>
          </div>
        </div>
        {/* <div className={styles.gallery}> */}
        {/* <div className={styles.preview}> */}
        <div className={styles.image__container}>
          <CardHero images={images} avatar={avatar} />
          {/* <Image
              srcSet="./images/content/pic16.png 2x"
              srcSetDark="./images/content/pic16.png 2x"
              src="./images/content/pic16.png"
              srcDark="./images/content/pic16.png"
              alt="Cubes"
            /> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Description;
