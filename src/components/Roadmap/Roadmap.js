import React from "react";
import { Heading, Para, Heading2 } from "../../screens/rabp-mint/Mint";
import {
  SpacerSmall,
  SpacerMedium,
} from "../../screens/rabp-mint/styles/globalStyles";

function Roadmap() {
  return (
    <div className="roadmap-container">
      <div className="">
        <div className="roadmap">
          <div className="roadmap__data">
            <Heading>R.A.B.P NFTS ROADMAP </Heading>
            <SpacerMedium />
            <Para>
              Our Mint road-map is designed to usher every one of our 8888
              R.AB.P NFT Apes into a new level of NFT commerce by admitting each
              Ape as a citizen of our just revealed Meta4.ai Metaverse. The
              Refined Ape Block Party Society will also be looking organise our
              1st event: ‘APE London’ where we will present a conference with
              top NFT curators and blockchain experts on the origins, impact and
              future of NFTs. The event will feature, a digital gallery, a live
              NFT auction, a conference and of course a late night REFINED APE
              BLOCK PARTY! Our events will also feature R.A.B.P merchandise and
              other NFT merchandise in our EXPO area. We will also be launching
              our full R.A.B.P MetaVerse in Q1 of 2022.
            </Para>
          </div>
          <div className="roadmap__timeline">
            <img
              src="r-timeline-01.png"
              alt=""
              className="roadmap__timeline-img"
            />
            <div className="roadmap__timeline-data roadmap__timeline-data-1 ">
              <Heading2> 25% Mint </Heading2>
              <SpacerSmall />
              <ul>
                <li>Design and Publish Mech Items</li>
                <li>Create a Community Wallet</li>
                <li>
                  05 Random R.A.B.P NFT Airdrops to white-listed addresses
                </li>
              </ul>
              <div className="roadmap__timeline-circle roadmap__timeline-circle-bottom">
                <div className="roadmap__timeline-outer-circle"></div>
                <div className="roadmap__timeline-inner-circle"></div>
              </div>
            </div>
            <div className="roadmap__timeline-data roadmap__timeline-data-2 ">
              <Heading2> 100% Mint </Heading2>
              <SpacerSmall />
              <ul>
                <li> Begin groundwork plans for our 1st Event </li>
                <li> 20, Random 0.1 ETH Air Drops </li>
                <li> Giveaway 1st 100 R.A.B.P Merchandise T-Shirts </li>
                <li>
                  Giveaway the $50 000 Bonus to our KING APE and 1 Gold Samurai
                  R.A.B.P NFT Holders
                </li>
                <li>Giveaway 100 Official R.A.B.P framed Prints of your Ape</li>
                <li> Announce our official Metaverse Development Site</li>
              </ul>
              <div className="roadmap__timeline-circle roadmap__timeline-circle-bottom">
                <div className="roadmap__timeline-outer-circle"></div>
                <div className="roadmap__timeline-inner-circle"></div>
              </div>
            </div>
            <div className="roadmap__timeline-data roadmap__timeline-data-3 ">
              <Heading2>Q1 2022</Heading2>
              <SpacerSmall />
              <ul>
                <li>Host our 1st NFT Meet Event codename APE- London</li>
                <li>Launch Metaverse Economy</li>

                <li>
                  Launch R.A.B.P NFTs Digital Merchandise shop in Metaverse,
                  land, income streams, careers,
                </li>
              </ul>
              <div className="roadmap__timeline-circle roadmap__timeline-circle-bottom bottom-1">
                <div className="roadmap__timeline-outer-circle"></div>
                <div className="roadmap__timeline-inner-circle"></div>
              </div>
            </div>
            <div className="roadmap__timeline-data roadmap__timeline-data-4 ">
              <Heading2>50% Mint</Heading2>
              <SpacerSmall />
              <ul>
                <li> 0.5 Random R.A.B.P NFT Airdrops </li>
                <li> Print the 1st 100 R.A.B.P Mech T-Shirts </li>
                <li> 10 Random Airdrops of 0.1ETH </li>
                <li> Confirm 1st 1000 Free passes for our 1st Event </li>
                <li>
                  Giveaway 50 Official R.A.B.P physical framed Prints of your
                  Ape
                </li>
              </ul>
              <div className="roadmap__timeline-circle roadmap__timeline-circle-top top-1">
                <div className="roadmap__timeline-outer-circle"></div>
                <div className="roadmap__timeline-inner-circle"></div>
              </div>
            </div>
            <div className="roadmap__timeline-data roadmap__timeline-data-5 ">
              <Heading2>Q4 2021</Heading2>
              <SpacerSmall />
              <ul>
                <li>Extensive Marketing of the R.A.B.P NFTs</li>
                <li>Grow R.A.B.P Community</li>
                <li>Launch Metaverse Development</li>

                <li>Publish 2022 Events Guide</li>
                <li>Launch Merchandise Online store</li>
                <li>
                  Airdrop Surprise for all RABP NFT Holders December 25th 2021
                </li>
              </ul>
              <div className="roadmap__timeline-circle roadmap__timeline-circle-top top-2">
                <div className="roadmap__timeline-outer-circle"></div>
                <div className="roadmap__timeline-inner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
