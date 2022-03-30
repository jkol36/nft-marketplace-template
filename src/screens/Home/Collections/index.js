import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "FOOTIE+ collection",
    author: "Matthew Acosta",
    counter: "28",
    avatar: "./images/icons/icon46.png",
    gallery: [
      "./images/content/pic10.png",
      "./images/content/pic11.png",
      "./images/content/pic5.png",
      "./images/content/pic12.png",
    ],
  },
  {
    title: "Art collection",
    author: "Brent Weaver",
    counter: "28",
    avatar: "./images/icons/icon47.png",
    gallery: [
      "./images/content/Art1.jpg",
      "./images/content/Art2.jpg",
      "./images/content/Art3.jpg",
      "./images/content/Art4.jpg",
    ],
  },
  {
    title: "Music collection",
    author: "Nicole Wilson",
    counter: "28",
    avatar: "./images/icons/icon48.png",
    gallery: [
      "./images/content/MUSIC1.jpg",
      "./images/content/MUSIC2.jpg",
      "./images/content/MUSIC3.jpg",
      "./images/content/MUSIC4.jpg",
    ],
  },
  {
    title: "All NFTs collection",
    author: "Angela David",
    counter: "28",
    avatar: "./images/icons/icon43.png",
    gallery: [
      "./images/content/ALLNFTs1.jpg",
      "./images/content/ALLNFTs2.jpg",
      "./images/content/ALLNFTs3.jpg",
      "./images/content/ALLNFTs4.jpg",
    ],
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Collections = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
        breakpoint: 1340,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      {/* <div className={cn("container center-1200", styles.container)}> */}
      <div className={cn("container-fluid", styles.container)}>
        <div className={styles.wrapper}>
          <h3 className={cn("h3", styles.title)}>Blazing Collection</h3>
          <div className={styles.inner}>
            <Slider className="collection-slider" {...settings}>
              {items.map((x, index) => (
                <Link className={styles.item} to="/profile" key={index}>
                  <div className={styles.gallery}>
                    {x.gallery.map((x, index) => (
                      <div className={styles.preview} key={index}>
                        <img src={x} alt="Collection" />
                      </div>
                    ))}
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.line}>
                    <div className={styles.user}>
                      <div className={styles.avatar}>
                        <img src={x.avatar} alt="Avatar" />
                      </div>
                      <div className={styles.author}>
                        By <span>{x.author}</span>
                      </div>
                    </div>
                    <div className={cn("status-stroke-black", styles.counter)}>
                      <span>{x.counter}</span> items
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
