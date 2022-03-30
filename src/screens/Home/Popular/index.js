import React, { useState } from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Popular.module.sass";
import Add from "./Add";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import DropdownEmpty from "../../../components/DropdownEmpty";
import { FaCheck } from "react-icons/fa";

const items = [
  {
    name: "Matthew Jackson",
    sign: "./images/content/cup.svg",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "./images/icons/icon37.png",
    reward: "./images/content/reward-1.svg",
    price: "2.456",
    icon: "bsc.png",
    isVerified: true,
    isOnline: false,
    bscPP: [0.12, "+5%"],
    ethPP: [0.11, "+10%"],
    polygonPP: [0.32, "+15%"],
  },
  {
    name: "Jhonson",
    sign: "./images/content/donut.svg",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "./images/icons/icon38.png",
    reward: "./images/content/reward-1.svg",
    price: "2.456",
    icon: "bsc.png",
    isVerified: false,
    isOnline: false,
    bscPerc: "+3%",
    ethPerc: "+4%",
    polygonPerc: "+10%",
    bscPP: [0.12, "+3%"],
    ethPP: [0.22, "+4%"],
    polygonPP: [0.37, "+10%"],
  },
  {
    name: "Katrina Martinez",
    sign: "./images/content/lightning.svg",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "./images/icons/icon44.png",
    reward: "./images/content/reward-1.svg",
    price: "2.456",
    icon: "bsc.png",
    isVerified: false,
    isOnline: true,
    bscPerc: "+6%",
    ethPerc: "+4%",
    polygonPerc: "+9%",
    bscPP: [0.12, "+6%"],
    ethPP: [0.14, "+4%"],
    polygonPP: [0.27, "+9%"],
  },
  {
    name: "Hunter Ray",
    sign: "./images/content/donut.svg",
    number: "4",
    url: "/profile",
    color: "#23262F",
    avatar: "./images/icons/icon45.png",
    reward: "./images/content/reward-1.svg",
    price: "2.456",
    icon: "ethereum.png",
    isVerified: true,
    isOnline: true,
    bscPerc: "+2%",
    ethPerc: "+1%",
    polygonPerc: "+15%",
    bscPP: [0.19, "+2%"],
    ethPP: [0.09, "+1%"],
    polygonPP: [0.21, "+15%"],
  },
  {
    name: "Elizabeth Rivas",
    sign: "./images/content/donut.svg",
    number: "5",
    url: "/profile",
    color: "#777E90",
    avatar: "./images/icons/icon41.png",
    reward: "./images/content/reward-1.svg",
    price: "2.456",
    icon: "ethereum.png",
    isVerified: true,
    isOnline: false,
    bscPerc: "+4%",
    ethPerc: "+7%",
    polygonPerc: "+13%",
    bscPP: [0.12, "+4%"],
    ethPP: [0.17, "+7%"],
    polygonPP: [0.22, "+13%"],
  },
  {
    name: "Edd Harris",
    sign: "./images/content/cup.svg",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "./images/icons/icon42.png",
    reward: "./images/content/reward-1.svg",
    price: "2.456",
    icon: "salona.svg",
    isVerified: false,
    isOnline: false,
    bscPerc: "+7%",
    ethPerc: "+9%",
    polygonPerc: "+20%",
    bscPP: [0.12, "+7%"],
    ethPP: [0.1, "+9%"],
    polygonPP: [0.32, "+20%"],
  },
  {
    name: "Jhonson",
    sign: "./images/content/donut.svg",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "./images/icons/icon43.png",
    reward: "./images/content/reward-1.svg",
    price: "2.456",
    icon: "ethereum.png",
    isVerified: true,
    isOnline: true,
    bscPerc: "+1%",
    ethPerc: "+7%",
    polygonPerc: "+17%",
    bscPP: [0.12, "+1%"],
    ethPP: [0.13, "+7%"],
    polygonPP: [0.12, "+17%"],
  },
  {
    name: "Katrina Martinez",
    sign: "./images/content/lightning.svg",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "./images/icons/icon44.png",
    reward: "./images/content/reward-1.svg",
    price: "2.456",
    icon: "salona.svg",
    isVerified: true,
    isOnline: true,
    bscPerc: "+9%",
    ethPerc: "+13%",
    polygonPerc: "+20%",
    bscPP: [0.12, "+9%"],
    ethPP: [0.15, "+13%"],
    polygonPP: [0.52, "+20%"],
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const dateOptions = ["Today", "Morning", "Dinner", "Evening"];
const directionOptions = ["Creators", "Buyers"];

const Popular = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
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
    responsive: [
      {
        breakpoint: 1376,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  const [date, setDate] = useState(dateOptions[0]);
  const [direction, setDirection] = useState(directionOptions[0]);

  return (
    // <div className={cn("section-bg", styles.section)}>
    <div className={cn("section-bg", styles.section)}>
      {/* </div><div className={cn("container center-1200", styles.container)}> */}
      <div className={cn("container-fluid", styles.container)}>
        <div className={styles.top}>
          <div className={styles.box}>
            <div className={styles.stage}>Top Trending</div>
            <DropdownEmpty
              className={styles.dropdown}
              value={direction}
              setValue={setDirection}
              options={directionOptions}
            />
          </div>
          <div className={styles.field}>
            <div className={styles.label}>timeframe</div>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <Slider
            className="popular-slider js-slider-popular slick-initialized slick-slider"
            {...settings}
          >
            {items.map((x, index) => (
              <Link to="/profile" key={x.avatar}>
                <div className={styles.slide} key={index}>
                  <div className={styles.item}>
                    <div className={styles.body}>
                      <div className={styles.avatar}>
                        <img src={x.avatar} alt="Avatar" />
                        {x.isOnline ? (
                          <div className={styles.online}></div>
                        ) : null}

                        {x.isVerified ? (
                          <div className={styles.verified}>
                            <div className="img-icon-checkmark img-icon-checkmark-big ">
                              <FaCheck />
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div className={styles.info}>
                        <div className={styles.name}>{x.name}</div>

                        <div className={styles.icons}>
                          <div className={styles.iconsItem}>
                            <div>
                              <img src="bsc.png" alt="" />
                              <span className={styles.iconPrice}>
                                {x.bscPP[0]} BNB
                              </span>
                            </div>
                            <span className={styles.positive}>
                              {x.bscPP[1]}
                            </span>
                          </div>
                          <div className={styles.iconsItem}>
                            <div>
                              <img src="ethereum.png" alt="" />
                              <span className={styles.iconPrice}>
                                {x.ethPP[0]} ETH
                              </span>
                            </div>
                            <span className={styles.positive}>
                              {x.ethPP[1]}
                            </span>
                          </div>
                          <div className={styles.iconsItem}>
                            <div>
                              <img src="polygon.png" alt="" />
                              <span className={styles.iconPrice}>
                                {x.polygonPP[0]} MATIC
                              </span>
                            </div>
                            <span className={styles.positive}>
                              {x.polygonPP[1]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Popular;
