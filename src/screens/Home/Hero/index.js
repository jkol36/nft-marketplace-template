import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Hero.module.sass";
import Icon from "../../../components/Icon";
import Player from "../../../components/Player";
import Modal from "../../../components/Modal";
import Connect from "../../../components/Connect";
import useDarkMode from "use-dark-mode";
// import Bid from "../../../components/Bid";

const items = [
  {
    title: "An abdundant Lack of Motivation",
    creator: "yonvisuals",
    currency: "1.00 BNB",
    price: "$3,618.36",
    avatar: "./images/content/avatar-creator.jpg",
    image: "./pic15.png",
    image2x: "./pic15.png",
    highestBid: "000.1 BNB",
    bid: "New bid",
    counter: "3 in stock",
    users: [
      {
        avatar: "./images/icons/icon42.png",
      },
      {
        avatar: "./images/icons/icon41.png",
      },
      {
        avatar: "./images/icons/icon40.png",
      },
    ],
  },
  // {
  //   title: "Marco carrillo®",
  //   creator: "Enrico Cole",
  //   currency: "2.00 BNB",
  //   price: "$2,477.92",
  //   avatar: "./images/content/avatar-creator.jpg",
  //   image: "./images/content/pic3.png",
  //   image2x: "./images/content/pic3.png",
  // },
  // {
  //   title: "the creator network®",
  //   creator: "Enrico Cole",
  //   currency: "1.00 BNB",
  //   price: "$3,618.36",
  //   avatar: "./images/content/avatar-creator.jpg",
  //   image: "./images/content/pic4.png",
  //   image2x: "./images/content/pic4.png",
  // },
  // {
  //   title: "Marco carrillo®",
  //   creator: "Enrico Cole",
  //   currency: "2.00 BNB",
  //   price: "$2,477.92",
  //   avatar: "./images/content/avatar-creator.jpg",
  //   image: "./images/content/pic9.png",
  //   image2x: "./images/content/pic9.png",
  // },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Hero = () => {
  const darkMode = useDarkMode(false);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
  };

  const [visibleModalBid, setVisibleModalBid] = useState(false);
  const bg = darkMode.value
    ? {
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,.7), rgba(0,0,0,1)),url(./pic15.png)",
      }
    : {
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,.7), rgba(255,255,255,1)),url(./pic15.png)",
      };

  const color = darkMode.value ? "#fff" : "#000";

  return (
    <>
      {/* backgroundImage:
            "linear-gradient(to  bottom,rgba(255, 255, 255, .5), rgba(255, 255, 255, .5), url(./jsb.webp))", */}
      {/* <div className="jsb-bg-img" style={{backgroundImage:"url(./jsb.webp)"}}></div> */}
      <div className={cn("section jsb-bg-img", styles.section)} style={bg}>
        <div className={cn("container center-1200", styles.container)}>
          <div className={styles.wrapper}>
            <Slider
              className="creative-slider js-slider-popular slick-initialized slick-slider"
              {...settings}
            >
              {items.map((x, index) => (
                <div className={styles.slide} key={index}>
                  <div className={styles.row}>
                    {/* <Player className={styles.player} item={x} /> */}
                    <div className={styles.details}>
                      {/* <div className="jsb-wrapper">
                        <button className="jsb-btn" tabindex="0">
                          BEGIN YOUR JOURNEY HERE
                        </button>
                      </div> */}
                      <div className="main__subtitle h1 hero">
                        Discover, collect, and sell extraordinary
                        <span className="main__subtitle span"> NFT </span>
                      </div>
                      <div
                        className="main__subtitle h3"
                        style={{ color: `${color}` }}
                      >
                        Create, Explore, &amp; Collect Football Digital Art NFTs
                      </div>
                      <div className={styles.btns}>
                        <button
                          className={cn("button btn-square", styles.button)}
                          onClick={() => setVisibleModalBid(true)}
                        >
                          Place a bid
                        </button>
                        <Link
                          className={cn(
                            "button-stroke btn-square",
                            styles.button
                          )}
                          to="/item"
                        >
                          View item
                        </Link>
                      </div>
                      <div className="pb-5 mb-5"></div>
                      <div className="pb-3 mb-3"></div>
                    </div>
                    <Player className={styles.player} item={x} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Modal
        visible={visibleModalBid}
        onClose={() => setVisibleModalBid(false)}
      >
        <Connect />
      </Modal>
    </>
  );
};

export default Hero;
