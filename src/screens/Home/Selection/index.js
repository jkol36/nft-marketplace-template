import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Selection.module.sass";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "The future of BNB®",
    content: "Highest bid",
    counter: "18 in stock",
    price: "1.125 BNB",
    url: "/item",
    avatar: "./images/icons/icon22.png",
    image: "./images/content/pic17.png",
    image2x: "./images/content/pic17.png",
  },
  {
    title: "Ballon D'or 21",
    content: "1 of 12",
    price: "0.27 BNB",
    url: "/item",
    avatar: "./images/icons/icon23.png",
    image: "./images/content/pic10.png",
    image2x: "./images/content/pic10.png",
  },
  {
    title: "King Kante",
    content: "1 of 3",
    price: "0.27 BNB",
    url: "/item",
    avatar: "./images/icons/icon24.png",
    image: "./images/content/pic6.png",
    image2x: "./images/content/pic6.png",
  },
  {
    title: "Football Coin 3D Print",
    content: "1 of 4",
    price: "0.27 BNB",
    url: "/item",
    avatar: "./images/icons/icon25.png",
    image: "./images/content/pic13.png",
    image2x: "./images/content/pic13.png",
  },
];

const users = [
  {
    name: "Hunter Ray",
    price: "<span>2.456</span> BNB",
    counter: "6",
    avatar: "./images/icons/icon33.png",
  },
  {
    name: "Brittney Bradley",
    price: "<span>2.456</span> BNB",
    counter: "2",
    avatar: "./images/icons/icon34.png",
  },
  {
    name: "Brenda Jackson",
    price: "<span>2.456</span> BNB",
    counter: "3",
    avatar: "./images/icons/icon35.png",
  },
  {
    name: "Lorena Ledner",
    price: "<span>2.456</span> BNB",
    counter: "4",
    avatar: "./images/icons/icon36.png",
  },
];

const Selection = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container center-1200", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            {items.map(
              (x, index) =>
                index === 0 && (
                  <Link className={styles.card} to={x.url} key={index}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt="Selection"
                      />
                    </div>
                    <div className={styles.head}>
                      <div className={styles.line}>
                        <div className={styles.avatar}>
                          <img src={x.avatar} alt="Avatar" />
                        </div>
                        <div className={styles.description}>
                          <div className={styles.title}>{x.title}</div>
                          <div className={styles.counter}>{x.counter}</div>
                        </div>
                      </div>
                      <div className={styles.box}>
                        <div className={styles.content}>{x.content}</div>
                        <div className={styles.price}>{x.price}</div>
                      </div>
                    </div>
                  </Link>
                )
            )}
          </div>
          <div className={styles.col}>
            {items.map(
              (x, index) =>
                index > 0 && (
                  <Link className={styles.item} to={x.url} key={index}>
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt="Selection"
                      />
                    </div>
                    <div className={styles.description}>
                      <div className={styles.title}>{x.title}</div>
                      <div className={styles.line}>
                        <div className={styles.avatar}>
                          <img src={x.avatar} alt="Avatar" />
                        </div>
                        <div className={styles.price}>{x.price}</div>
                        <div className={styles.content}>{x.content}</div>
                      </div>
                      <button
                        className={cn(
                          "button-stroke button-small btn-square",
                          styles.button
                        )}
                      >
                        Place a bid
                      </button>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
        <div className={styles.sidebar}>
          <div className={styles.info}>
            Latest upload from creators{" "}
            <span className={styles.smile} role="img" aria-label="fire">
              🔥
            </span>
          </div>
          <div className={styles.list}>
            {users.map((x, index) => (
              <div className={styles.user} key={index}>
                <div className={styles.avatar}>
                  <img src={x.avatar} alt="Avatar" />
                  <div className={styles.number}>{x.counter}</div>
                </div>
                <div className={styles.description}>
                  <div className={styles.name}>{x.name}</div>
                  <div
                    className={styles.money}
                    dangerouslySetInnerHTML={{ __html: x.price }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Link
            className={cn(
              "button-stroke btn-square button-small",
              styles.button
            )}
            to="/marketplace"
          >
            <span>Discover more</span>
            <Icon name="arrow-next" size="10" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Selection;
