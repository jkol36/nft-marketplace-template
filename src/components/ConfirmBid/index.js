import React, { useRef } from "react";
import { AiOutlineFile, AiOutlineCheck } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

function ConfirmBid() {
  // const parent = useRef();

  // const handleClick = (e) => {
  //   const sParent = e.target.parentNode;

  //   console.log(e, e.target.parentNode);
  // };

  // console.log(parent.current.children);

  return (
    <div class="popup popup_wallet mfp-hide" id="popup-wallet">
      <div class="popup__title h4">Folow steps</div>
      <div class="steps">
        <div class="steps__item">
          <div class="steps__head">
            <div class="steps__icon">
              <AiOutlineFile size={20} />
              {/* <svg class="icon icon-upload-file">
                <use xlink:href="#icon-upload-file"></use>
              </svg> */}
            </div>
            <div class="steps__details">
              <div class="steps__info">Deposit BNB</div>
              <div class="steps__text">Send transaction with your wallet</div>
            </div>
          </div>
          <button class="button steps__button">Start now</button>
        </div>
        <div class="steps__item">
          <div class="steps__head">
            <div class="steps__icon">
              <AiOutlineCheck size={20} />
              {/* <svg class="icon icon-check">
                <use xlink:href="#icon-check"></use>
              </svg> */}
            </div>
            <div class="steps__details">
              <div class="steps__info">Approve</div>
              <div class="steps__text">Checking balance and approving</div>
            </div>
          </div>
          <button class="button steps__button disabled">Start now</button>
        </div>
        <div class="steps__item">
          <div class="steps__head">
            <div class="steps__icon">
              <BsPencil size={20} />
              {/* <svg class="icon icon-pencil">
                <use xlink:href="#icon-pencil"></use>
              </svg> */}
            </div>
            <div class="steps__details">
              <div class="steps__info">Signature</div>
              <div class="steps__text">Create a signature to place a bit</div>
            </div>
          </div>
          <button class="button steps__button disabled js-popup-close">
            Start now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBid;
