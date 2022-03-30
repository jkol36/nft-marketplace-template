import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";
import Item from "./Item";

const items = [
  {
    title: "NFT",
    icon: "home",
  },
  {
    title: "Essentials",
    icon: "home",
  },
  {
    title: "Profile Fundamentals",
    icon: "home",
  },
  {
    title: "Trading on ClosedSea",
    icon: "home",
  },
  // {
  //   title: "Support",
  //   icon: "circle-and-square",
  // },
];

const Hero = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [direction, setDirection] = useState(options[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container-fluid", styles.container)}>
        <div className={styles.top}>
          <div className={styles.stage}>learn how to get started</div>
          <h1 className={cn("font-48", styles.title)}>
            Frequently asked questions
          </h1>
          {/* <div className={styles.info}>
            Join Stacks community now to get free updates and also alot of
            freebies are waiting for you
            or{" "}
            <a href="/#" rel="noopener noreferrer">
              Contact Support
            </a>
          </div> */}
          {/* <Dropdown
            className={cn("mobile-show", styles.dropdown)}
            value={direction}
            setValue={setDirection}
            options={options}
          /> */}
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.nav}>
              {items.map((x, index) => (
                <div
                  className={cn(styles.link, {
                    //[styles.active]: x.title === direction,
                    [styles.active]: index === activeIndex,
                  })}
                  //onClick={() => setDirection(x.title)}
                  onClick={() => {
                    setActiveIndex(index);
                    setDirection(x.title);
                  }}
                  key={index}
                >
                  <Icon name={x.icon} size="16" />
                  <span>{x.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            {/* {items
              .find((x) => x.title === direction)
              .items.map((x, index) => (
                <Item className={styles.item} item={x[index]} key={index}>
                  {x[index]}
                </Item>
              ))} */}

            {activeIndex === 0 && (
              <>
                <Item
                  className={styles.item}
                  item="What is a Non-Fungible Token?"
                >
                  <p>
                    Non-Fungible Tokens (NFTs) are unique, digital items with
                    blockchain-managed ownership. Examples of NFTs include
                    digital art, collectibles, virtual reality items, crypto
                    domain names, ownership records for physical assets, and
                    more. Don't get overwhelmed by the idea of fungibility, it's
                    just the ability of a good or asset to be interchanged with
                    other individual goods or assets of the same type.
                  </p>
                </Item>
                <Item className={styles.item} item="How do I search for NFT’s?">
                  <p>
                    If you're new to NFTs, it can all be enormous at first, but
                    you've come to the right place. At ClosedSea, there are many
                    ways to search through thousands of NFTs. If you know what
                    you're looking for, you can search directly in the "search
                    bar".
                  </p>
                  <img src="/images/faq/n-2-1.png" alt="" />
                  <p>Or from the Footer you can go to Discover.</p>
                  <img src="/images/faq/n-2-2.png" alt="" />
                  <p>
                    If you prefer a particular buying style, you can choose
                    between Buy Now or On Auction on the left side of the page.
                  </p>
                  <img src="/images/faq/n-2-3.png" alt="" />
                  <p>
                    You can also customize your search results through different
                    filter options.
                  </p>
                  <img src="/images/faq/n-2-4.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="From where i can access the NFT Marketlace?"
                >
                  <p>You can access the NFT Marketlace from Navigation</p>
                  <img src="/images/faq/n-3-1.png" alt="" />
                  <p> Or you can access the Marketplace from the Footer </p>
                  <img src="/images/faq/n-3-2.png" alt="" />
                </Item>
              </>
            )}

            {activeIndex === 1 && (
              <>
                <Item
                  className={styles.item}
                  item="Creating a ClosedSea Account"
                >
                  <p>
                    Follow the given steps to create your account and start
                    trading NFTs on ClosedSea:
                  </p>
                  <ol>
                    <li>
                      <h3>Acquiring Digital Currency (ETH)</h3>

                      <p>
                        ETH stand for Ethereum, a digital currency which powers
                        the transactions on the Ethereum Blockchain. ETH
                        currency mints and purchases your NFTs and pays for gas
                        fees (transaction fees) which complete the transaction.
                      </p>
                    </li>
                    <li>
                      <h3>Crypto Wallet</h3>
                      <p>
                        A crypto wallet works as both a wallet and debit card.
                        It store your digital currency, i.e. Ethereum, and
                        processes transactions on the Ethereum blockchain.
                        Closed Sea is only a means to interact with others on
                        the blockchain, where as a crypto wallet helps translate
                        your actions into transaction on the blockchain. Each
                        wallet has a unique wallet address which you will use to
                        complete the transactions. <br />
                        Your transaction record is available on etherscan.io. It
                        is recommended to check Etherscan after each
                        transaction.
                      </p>
                    </li>
                    <li>
                      <h3>ClosedSea</h3>
                      <p>
                        You now need to connect your wallet to ClosedSea to
                        carry out transactions.
                      </p>
                      <img src="/images/faq/n-4-2.JPG" alt="" />
                      <p>
                        From your profile you will directed to connect to your
                        wallet. Continue through the prompts to complete the
                        connection.
                      </p>
                      <img src="/images/faq/n-4-1.png" alt="" />
                    </li>
                  </ol>
                </Item>
                <Item
                  className={styles.item}
                  item="What are the key terms to know before I get started?"
                >
                  <p>
                    Here's a list of key terms used in the NFT space and it's a
                    helpful to review before you get started.
                  </p>
                  <ul>
                    <li>
                      <strong> Non-Fungible Tokens (NFTs) </strong> –
                      Non-Fungible Tokens (NFTs) are special, digital items with
                      blockchain-managed ownership. Examples of NFTs include
                      digital art, collectibles, virtual reality items, crypto
                      domain names, ownership records for physical assets, etc.
                    </li>

                    <li>
                      <strong> Ethereum </strong> – Ethereum is a blockchain,
                      and ETH is the currency used to make transactions on the
                      Ethereum blockchain.
                    </li>

                    <li>
                      <strong> Gas Fees </strong> – Think of gas fees as
                      Ethereum blockchain transaction costs. ClosedSea does not
                      contribute in setting gas fees – they are determined by
                      supply/demand across the network (blockchain).
                    </li>

                    <li>
                      <strong> Crypto Wallet </strong> – A crypto wallet is an
                      application or hardware device that allows individuals to
                      store and retrieve digital assets.
                    </li>

                    <li>
                      <strong> Wallet Address </strong> – Your wallet address is
                      unique. It’s the address people will use when they are
                      sending crypto or NFTs to your crypto wallet.
                    </li>

                    <li>
                      <strong> Seed Phrase </strong> – Your seed phrase is a
                      list of words that can be used to recover your crypto in
                      case you forget your password or lose access to your
                      wallet. Don’t store your seed phrase on an online cloud
                      storage service and never share it with anyone.
                    </li>

                    <li>
                      <strong> Collection </strong> – A collection is a body of
                      work, like a store or gallery. If you see someone refer to
                      an ClosedSea collection as a store or gallery, don’t get
                      confused – it’s all the same. We use the term collection
                      to keep things simple.
                    </li>
                  </ul>
                </Item>
                <Item
                  className={styles.item}
                  item="How do i edit my ClosedSea profile"
                >
                  <p>
                    You can customize your account through settings. There will
                    be an additional security prompt before you can continue.
                    You can customize your username, profile photo, bio, and
                    email address among other things.
                  </p>
                  <img src="/images/faq/q1-3.png" alt="" />
                  <img src="/images/faq/q1-4.png" alt="" />
                  <img src="/images/faq/q1-5.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="How do I log out of my ClosedSea account?"
                >
                  <p>
                    To log out of your ClosedSea account, kindly follow the
                    steps below. Go to the profile icon on the top right of the
                    screen. On the dropdown menu click on "Log Out".
                  </p>
                  <img src="/images/faq/q3-1.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="How to I subscribe the closedsea newsletter?"
                >
                  <p>You can subscribe the closedsea newsletter from footer</p>
                  <img src="/images/faq/n-8-1.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="If I am uncomfortable with the lighter mode theme will I be able to switch to dark mode?"
                >
                  <p>
                    Yes you can switch from light mode to dark mode and vice
                    versa
                  </p>
                  <img src="/images/faq/q8-1.png" alt="" />
                  <img src="/images/faq/q8-2.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="ClosedSea supported Blockchains"
                >
                  <p>
                    ClosedSea provides support across three different
                    blockchains, Binance Smartchain Ethereum and Polygon.
                  </p>
                  <div className={styles.chainContainer}>
                    <h3>Binance Smart Chain</h3>
                    <img
                      src="/images/faq/q2-1.png"
                      className={styles.imagesIcons}
                      alt=""
                    />
                    <p>Official website: binance.org/en/smartChain</p>
                    <p>Token: BSC</p>
                    <p>
                      Binance is a crypto currency which is currently the
                      largest being traded in the world in terms of daily
                      trading volume. Binance Smart Chain is a crypto currency
                      of Binance.
                    </p>
                  </div>
                  <div className={styles.chainContainer}>
                    <h3>Ethereum</h3>
                    <img
                      src="/images/faq/q2-2.png"
                      className={styles.imagesIcons}
                      alt=""
                    />
                    <p>Official website: ethereum.org</p>
                    <p>Token: ETH</p>
                    <p>
                      Ethereum is a decentralized, open-source blockchain with
                      smart contract functionality launched in2015. Ether or ETH
                      is the native cryptocurrency of the Ethereum blockchain.
                      ETH is used to pay transaction fees (known as gas fees) on
                      the Ethereum blockchain. ClosedSea has no say in setting
                      gas fees – they are determined by supply/demand and
                      fluctuate according to network usage.
                    </p>
                  </div>
                  <div className={styles.chainContainer}>
                    <h3>Polygon</h3>
                    <img
                      src="/images/faq/q2-3.png"
                      className={styles.imagesIcons}
                      alt=""
                    />
                    <p>Official website: polygon.technology</p>
                    <p>Token: MATIC</p>
                    <p>
                      Polygon is a separate blockchain that provides scalable,
                      secure and instant transactions with Ethereum currencies
                      like ETH, USDC and DAI. From July, 2021, users can use
                      Polygon to create, buy and sell NFTs without paying
                      transanction fees, creating a gas-free marketplace.
                    </p>
                  </div>
                </Item>
              </>
            )}

            {activeIndex === 2 && (
              <>
                <Item
                  className={styles.item}
                  item="How do I follow or unfollow a profile on closedsea?"
                >
                  <p>
                    You can follow or unfollow a profile / user on closedsea
                    from the profile page of that user
                  </p>
                  <img src="/images/faq/q10-1.png" alt="" />
                  <img src="/images/faq/q10-2.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="How do I share a profile from closedsea to other social sites"
                >
                  <p>
                    You can share a profile from closedsea to other social sites
                    by going to the profile that you want to share and click the
                    share icon besides follow / unfollow button and then select
                    the social site where you want to share that profile
                  </p>
                  <img src="/images/faq/q13-1.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="How do I report a profile on closedsea
              "
                >
                  <p>
                    You can report a profile on closedsea by going to the
                    profile that you want to report and click the flag icon
                    besides follow and share button.
                  </p>
                  <img src="/images/faq/q12.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="How do I check the On Sale, Collectible, Created, Likes, Following and Follow on the profile"
                >
                  <p>
                    You can check the On Sale, Collectible, Created, Likes,
                    Following and Follow on the profile. Specific tabs are
                    created for them just clock on the one you want and you will
                    get it
                  </p>
                  <img src="/images/faq/n-24.png" alt="" />
                </Item>
              </>
            )}

            {activeIndex === 3 && (
              <>
                <Item
                  className={styles.item}
                  item="How can I place a bid on closed sea"
                >
                  <p>
                    You can place a bid on closed sea from the Item card or from
                    the Item page
                  </p>
                  <img src="/images/faq/q9-1.png" alt="" />
                  <img src="/images/faq/q9-2.png" alt="" />
                  <img src="/images/faq/q9-3.png" alt="" />
                  <img src="/images/faq/q9-4.png" alt="" />
                  <p>After all the steps are done your bid will be placed.</p>
                </Item>
                <Item
                  className={styles.item}
                  item="Where can I find the price history and trading history of an item?"
                >
                  <p>
                    The price history and trading history of the item is
                    available on the same page as the item. Other related
                    information about the product, such as product info,
                    listings, offers, product details and product description,
                    are also visible on the same page.
                  </p>
                  <img src="/images/faq/n-26-1.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="How can I purchase an item on ClosedSea?"
                >
                  <p>
                    The purchase now option is given on the product page. You
                    can click on the Purchase Now button
                  </p>
                  <img src="/images/faq/n-25-1.png" alt="" />
                  <p>
                    From there you will be directed to Check Out. Click on I
                    Understand and Continue to go to the next step.
                  </p>
                  <img src="/images/faq/n-25-2.png" alt="" />
                  <p>After which your purchase will be processed</p>
                  <img src="/images/faq/n-25-3.png" alt="" />
                  <img src="/images/faq/n-25-4.png" alt="" />
                </Item>
                <Item
                  className={styles.item}
                  item="Where can I explore items from the same creator?"
                >
                  <p>
                    On the product page you can click on the creator’s profile
                    name and explore other items and details of those items from
                    that user.
                  </p>
                  <img src="/images/faq/n-27-1.png" alt="" />
                  <img src="/images/faq/n-27-3.png" alt="" />
                  <p>
                    Or you can scroll down on the item page and browse through
                    the similar products.
                  </p>
                  <img src="/images/faq/n-27-2.png" alt="" />
                </Item>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
