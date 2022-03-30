import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";

import { fetchData } from "./redux/data/dataActions";
import RabpCard from "components/RabpCard/RabpCard";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import Roadmap from "components/Roadmap/Roadmap";
import { Link } from "react-router-dom";
import CONNECTOR_NAMES from "utils/constants/connectorNames";
import config from "./config/config.json";
import abi from './config/abi.json';
import { useEagerConnect } from "utils/hooks/use-connectors";
import { connectContract } from "utils/helpers/connectors";
import Web3 from "web3";

export const StyledButton = styled.button`
  font-family: inherit;
  font-weight: 700;
  width: calc(30vw + 10px);
  min-height: calc(4vw + 10px);
  font-size: 30px;
  background-color: white;

  color: #000;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.15);

  @media (max-width: 745px) {
    width: unset;
    height: unset;
    font-size: 16px;
    padding: 0.8rem;
  }

  @media (max-width: 470px) {
    width: unset;
    height: unset;
    font-size: 14px;
    padding: 0.5rem;
  }
`;

export const StyledButton2 = styled(StyledButton)`
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 745px) {
    bottom: 9%;
  }

  @media (max-width: 470px) {
    bottom: 6%;
  }
`;

export const StyledMint = styled(Link)`
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(30vw + 10px);
  min-height: calc(4vw + 10px);
  font-size: 26px;
  padding: 1rem;
  text-align: center;
  background-color: white;
  color: #000;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  position: absolute;
  top: ${({ top }) => (top ? `${top}` : "15%")};
  /* left: ${({ left }) => (left ? `${left}%` : "50%")}; */
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1032px) {
    width: unset;
    height: unset;
    font-size: 17px;
    padding: 0.8rem;
  }

  @media (max-width: 745px) {
    width: unset;
    height: unset;
    font-size: 16px;
    padding: 0.8rem;
  }

  @media (max-width: 570px) {
    width: unset;
    height: unset;
    font-size: 15px;
    padding: 0.5rem;
  }

  @media (max-width: 470px) {
    width: unset;
    height: unset;
    font-size: 12px;
    padding: 0.25rem;
  }
`;

export const StyledMint2 = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 1.4rem 5rem; */
  width: calc(30vw + 10px);
  min-height: calc(4vw + 10px);
  font-size: 30px;
  text-align: center;
  background-color: white;
  /* background-color: #ec008c; */
  color: #000;
  border: none;
  cursor: pointer;
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 745px) {
    width: unset;
    height: unset;
    font-size: 16px;
    padding: 0.8rem;
  }

  @media (max-width: 470px) {
    width: unset;
    height: unset;
    font-size: 14px;
    padding: 0.5rem;
  }
`;

export const StyledRoundButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 0px;
  cursor: pointer;
  color: #fff;
  display: inline-block;
  /* font-family: var(--fonts-primary); */

  letter-spacing: 0.045em;
  padding: 0.45rem;
  text-align: left;
  text-transform: uppercase;
`;

export const StyledLogoX = styled.img`
  width: 100%;

  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledLogo = styled.img`
  width: 100px;
  @media (min-width: 100px) {
    width: 400px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const ResponsiveWrapper = styled.div`
  background-color: transparent;
  /* border: 5px solid var(--secondary); */
  border-radius: 0px;
  cursor: pointer;
  color: var(--primary);
  display: inline-block;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 10px var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 100px;
  @media (min-width: 900px) {
    width: 10px;
  }
  @media (min-width: 1000px) {
    width: 100px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

export const Hero = styled.div`
  width: 100%;
  min-height: calc(90vw + 10px);
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/2 (5).png");
  /* @media screen and (max-width: 700px) {
    background-image: unset;
    background-color: #ec008c;
  } */
`;
export const HeroBtn = styled.button`
  font-weight: 700;
  width: calc(30vw + 10px);
  min-height: calc(4vw + 10px);
  font-size: 20px;
  background-color: white;
  border: none;
  cursor: pointer;
  position: relative;
  bottom: 250px;
  @media screen and (max-width: 1200px) {
    bottom: 120px;
  }
  @media screen and (max-width: 650px) {
    width: calc(38vw + 14px);
    min-height: calc(4vw + 10px);
    font-size: 16px;
    bottom: 50px;
  }
`;
export const Gallery = styled.div`
  margin-top: 2rem;
  display: flex;
  div:first-child {
    flex: 0 0 50%;
  }
`;
export const CardContainer = styled.div`
  /* display: flex;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
  > * : max-width: 420px; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 3rem;
  margin: 2rem 0;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const About = styled.div`
  display: grid;
  grid-template-columns: 400px 2fr;
  column-gap: 1rem;
  /* align-items: center; */

  ol,
  ul {
    list-style: disc;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
  }
`;
export const Heading = styled.h1`
  font-size: clamp(25px, 3vw, 36px);
  font-weight: 700;
  @media screen and (max-width: 900px) {
    margin-top: 1rem;
  }
`;
export const Heading2 = styled.h2`
  font-size: clamp(20px, 3vw, 25px);
  font-weight: 700;
  @media screen and (max-width: 900px) {
    margin-top: 1rem;
  }
`;
export const Para = styled.p`
  /* font-size: clamp(18px, 3vw, 32px); */
  font-size: clamp(18px, 3vw, 28px);
  line-height: 1.2;

  /* word-wrap: break-word; */
`;

export const Line = styled.div`
  width: 100%;
  height: 56px;
  background-color: #00ffff;
  margin-top: 30px;
`;
export const Footer = styled.p`
  margin-top: 1rem;
  padding: 0.8rem;
  text-align: center;
`;

const Mint = () => {
  const { chainId, account } = useWeb3React();
  const { login } = useEagerConnect(parseInt(process.env.REACT_APP_DEFAULT_CHAINID));
  const [contract, setContract] = useState(null);
  const [cost, setCost] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);

  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click Mint to Buy.`);
  const [mintAmount, setMintAmount] = useState(1);

  const scrollRef = useRef(null);

  useEffect(() => {
    connectContract('0xd17237f0B1eDb8109F7E0937165Fd58aDAd2Ca11', abi).then(c => {
      setContract(c);
    })
  }, []);

  useEffect(() => {
    if (contract) {
      contract.methods.cost().call()
        .then(result => {
          setCost(result);
        })
        .catch(error => {
          console.log('aj : [cost] error => ', error);
        })
    }
  }, [contract]);

  const claimNFTs = () => {
    if (!!account && !!contract) {
      setFeedback(`Minting your ${config.NFT_NAME}...`);
      setClaimingNft(true);
      contract.methods
        .mint(mintAmount)
        .send({
          from: account,
          value: cost * mintAmount,
          gasLimit: 310000 * mintAmount
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("PLEASE TRY AGAIN");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(`YOUR ${mintAmount} ${config.NFT_NAME}'S MINTED`);
          setClaimingNft(false);
          
        });
    }    
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = useCallback(() => {
    if (contract) {
      contract.methods.totalSupply().call()
        .then(result => setTotalSupply(result))
        .catch(error => {
          console.log('aj : [totalSupply] error => ', error);
        });
    }
  }, [contract]);

  useEffect(() => {
    getData();
  }, [getData]);

  const onConnectHandler = () => {
    login();
  };

  return (
    <s.Screen>
      <Hero>
        <div className="hero__container">
          {/* <HeroBtn className="hero__btn"> Connect Wallet </HeroBtn> */}

          <s.Container flex={1} ai={"center"}>
            <ResponsiveWrapper flex={1} style={{ padding: 10 }} test>
              <StyledMint2 onClick={() => scrollRef.current.scrollIntoView()}>
                BUY LAND BELOW
              </StyledMint2>{" "}
              <s.Container flex={1} jc={"center"} ai={"center"}></s.Container>
              <s.SpacerSmall />
              {Number(totalSupply) >= config.MAX_SUPPLY ? (
                <>
                </>
              ) : (
                <>
                  <s.SpacerXSmall />
                  <s.TextDescription
                    style={{
                      textAlign: "center",
                    }}
                  ></s.TextDescription>
                  <s.SpacerSmall ref={scrollRef} />
                  {!chainId ? (
                    <s.Container ai={"center"} jc={"center"}>
                      {/* <s.TextDescription
                          style={{
                            textAlign: "center",
                            //color: "var(--accent-text)",
                          }}
                        >
                          MAX 10
                        </s.TextDescription> */}
                      <s.SpacerSmall />

                      <StyledButton2
                        className="connect-wallet-button"
                        onClick={onConnectHandler}
                      >
                        CONNECT WALLET
                      </StyledButton2>
                    </s.Container>
                  ) : (
                    <>
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "#fff",
                        }}
                      >
                        {feedback}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <StyledRoundButton
                          style={{ lineHeight: 0.4 }}
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            decrementMintAmount();
                          }}
                        >
                          -
                        </StyledRoundButton>
                        <s.SpacerMedium />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          {mintAmount}
                        </s.TextDescription>
                        <s.SpacerMedium />
                        <StyledRoundButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            incrementMintAmount();
                          }}
                        >
                          +
                        </StyledRoundButton>
                      </s.Container>
                      <s.SpacerSmall />
                      <s.Container ai={"center"} jc={"center"} fd={"row"}>
                        <StyledButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                        >
                          {claimingNft ? "MINTING" : "MINT"}
                        </StyledButton>
                      </s.Container>
                    </>
                  )}
                </>
              )}
              <s.SpacerMedium />
              {/* </s.Container> */}
            </ResponsiveWrapper>
          </s.Container>
        </div>
      </Hero>
      <Gallery>
        <div>
          <img src="/147-151-1.png" alt="" />
        </div>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: `
        <video
          autoplay
          muted
          playsinline
          loop
          src='60001-0454.mp4'
          class="vidN"
        />,
      `,
          }}
        ></div>
      </Gallery>

      <CardContainer>
        <RabpCard
          img="147-1512-1.png"
          text="Join Our Whitelist"
          bgColor="#ed028c"
          url="asd"
        />
        <RabpCard
          img="147-1513-1.png"
          text="Follow Our Twitter"
          bgColor="#00aeef"
          url="https://twitter.com/RABPNFT"
        />

        <RabpCard
          img="147-1514-1.png"
          text="Join Our Discord"
          bgColor="#6b66c4"
          url="https://discord.gg/gaRvAXkhDc"
        />
      </CardContainer>

      {/* <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 5, backgroundColor: "var(--primary)" }}
      >
        <s.SpacerSmall />

        <s.SpacerSmall />
        <ResponsiveWrapper flex={1} style={{ padding: 10 }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}></s.Container>

          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--accent)",
              padding: 0,
              borderRadius: 1,
              border: "40px var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            <s.SpacerSmall />
            <StyledLogo alt={"logo"} src={"/config/images/apelogo.png"} />
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 40,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {data.totalSupply} / {config.MAX_SUPPLY}
            </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              <StyledLink target={"_blank"} href={config.SCAN_LINK}>
                {truncate(config.CONTRACT_ADDRESS, 15)}
              </StyledLink>
            </s.TextDescription>
            <s.SpacerSmall />
            {Number(data.totalSupply) >= config.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {config.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={config.MARKETPLACE_LINK}>
                  {config.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  1 {config.SYMBOL} = {config.DISPLAY_COST}{" "}
                  {config.NETWORK.SYMBOL}.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                ></s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      MAX 10
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "MINTING" : "MINT"}
                      </StyledButton>
                    </s.Container>
                  </>
                )}
              </>
            )}
            <s.SpacerMedium />
          </s.Container>
        </ResponsiveWrapper>
      </s.Container> */}

      {/* <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 0, backgroundColor: "var(--primary)" }}
      >
        <s.SpacerSmall />
         <ResponsiveWrapper flex={1} style={{ padding: 0 }} test>
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--glow)",
              padding: 0,
              borderRadius: 1,
              border: "50px var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            {" "}
            <s.SpacerSmall />
            R.A.B.P: Mint Roadmap
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                color: "var(--accent)",
              }}
            >
              <s.SpacerSmall />
              Our Mint roadmap is designed as a fundraiser leading up to our
              first NFT event code name ‘NFT London’ we will present a
              conference with top NFT Curators and Blockchain Experts on the
              origins, impact and future of NFTs. The event will feature, a
              Digital Gallery, a Live NFT Auction, a Conference and of course a
              late night REFINED APE BLOCK PARTY! Our events will also feature
              R.A.B.P merchandise and other NFT mechandise in our EXPO area. We
              are also looking to build a R.A.B.P PartyVerse in the future.
              <s.SpacerSmall />
              <StyledLogoX alt={"logo"} src={"/config/images/roadmap.png"} />
            </s.TextTitle>
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                color: "var(--primary)",
              }}
            ></s.TextTitle>
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              <s.SpacerSmall />
            </s.TextTitle>
          </s.Container>

          <s.Container flex={1} jc={"center"} ai={"center"}></s.Container>
        </ResponsiveWrapper> */}
      {/* <s.SpacerMedium /> */}
      {/* <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          ></s.TextDescription>
          <s.SpacerSmall />

          <s.TextTitle
            style={{
              textAlign: "center",
              fontSize: 25,
              fontWeight: "bold",
              color: "var(--accent-text)",
            }}
          >
            <StyledLink target={"_blank"} href={config.CLOSEDSEA}>
              {config.CLOSEDSEA1}
            </StyledLink>
          </s.TextTitle>

          <s.TextDescription
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
            }}
          >
            <StyledLogoX alt={"logo"} src={"/config/images/CS.png"} />
          </s.TextDescription>
        </s.Container> 
      </s.Container>
      */}
      {/* <s.SpacerSmall />
      <s.SpacerSmall />
      <s.SpacerSmall /> */}

      <About className="about">
        <img className="about__img" src="/112.png" alt="" />
        <div className="about__info">
          <Heading>Refined METAVERSE LAND SALE</Heading>
          <s.SpacerMedium />
          <Para>
            Get your first Metaverse Land. The RABP NFT Metaverse is offering their 1st phase of Metaverse land plots in our Central Business District located along Fashion Street. This area of Prime Land is in as area named RABP Market Square is earmarked for small to medium, high street fashion boutique, shops, sneakers, restaurants, jewellery, accessories and more.
          </Para>
        </div>
      </About>

      <CardContainer className="card__container">
        <RabpCard
          img="153,155 - Copy-1.png"
          icon="rabp-01.svg"
          text="Prime Residential"
          bgColor="#ed028c"
          url="#"
        />
        <RabpCard
          img="147-1512-1.png"
          icon="rabp-01.svg"
          text="Prime Business"
          bgColor="#00aeef"
          url="#"
        />

        <RabpCard
          img="147-1513-1.png"
          icon="rabp-01.svg"
          text="Prime Industrial"
          bgColor="#6b66c4"
          url="#"
        />
      </CardContainer>
      <s.SpacerLarge />
      <s.Container2>
        <Heading>Refined Land NFTs Metaverse</Heading>
        <s.SpacerMedium />
        <Para>
          Earmarked as a high-rise district the land in this area should quickly accumulate value as more and more businesses seek out real-estate to market, sell and promote their real world and virtual products and services Total Land Allocation: 500 Plots Pricing 0.1ETH per Plot
        </Para>
      </s.Container2>
      <s.SpacerLarge />
      <s.Container2>
        <Heading>Metaverse Use-cases & Benefits</Heading>
        <s.SpacerMedium />
        <Para>
          Our Metaverse is designed to unlock a new world of digital commerce and income opportunities for both our RABP NFT citizens and visitors. Our project is dedicated to tradeable Multi-chain NFTs, Metaverse, Retail, Gaming, Virtual Marketing, Virtual Learning, Galleries, Real Estate, Auctions, Expos, Conferences, Networking, E-commerce and much more. Our RABP NFT holder citizens will be 1st in line in the allocation and purchase of the vast assets available in our Metaverse, from land, to retail space, digital merchandise, real estate, transport services, advertising billboards, gaming opportunities, e-learning and much, much more. Only our citizens will have access to 1st hand asset ownership. Our mission is to provide the best multi-chain NFT powered metaverse across the globe to improve awareness and encourage innovation and exchange of ideas around the metaverse economy and its vast future.
        </Para>
      </s.Container2>
      <s.SpacerLarge />
      <div>
        <Heading>Refined Land Miniting Date: 14.12.2021</Heading>
        <s.SpacerMedium />
        <div
          style={{
            backgroundColor: "#EC008C",
            height: "100%",
            borderRadius: "10px",
            padding: "3rem 2rem",
            color: "#fff",
            width: '100%'
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <Heading>Refined Land MINTING TIME:</Heading>
            <ul>
              {/* <li>
                <s.Container jc={"space-between"} ai={"center"} fd={"row"}>
                  <Para>WHITELISTED PRESALE (25%)</Para>{" "}
                  <Para> 09:00EST </Para>{" "}

                </s.Container>
              </li> */}
              <li>
                <s.Container jc={"space-between"} ai={"center"} fd={"row"}>
                  <Para>PUBLIC SALE 21:00EST </Para>{" "}
                  {/* <Para>  </Para> */}
                </s.Container>
              </li>
            </ul>
          </div>
          <div>
            <Heading>R.A.B.P NFTS MINTING FEES:</Heading>
            <ul>
              <li>
                <Para>
                  BSC Starts at 0.7BNB + GAS - <br /> TIME 9PM EST
                </Para>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Roadmap /> */}
      <div style={{ width: '100%', height: '56px', backgroundColor: '#00ffff', marginTop: '30px', marginBottom: '16px' }} />
      <p style={{ width: '100%', textAlign: 'center' }}>Copyright ©️ 2021 Refined Apes Block Party (R.A.B.P). All rights reserved</p>
      <s.SpacerLarge />
    </s.Screen>
  );
}

export default Mint;
