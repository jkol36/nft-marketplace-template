import React,{useState} from "react";
import cn from "classnames";
import axios from 'axios';

import styles from "./Bid.module.sass";
//import { number } from "expect/node_modules/@types/yargs";

/*{
  title: "Enter bid",
  value: "BNB",
},*/
const items = [
  {
    title: "Your balance",
    value: "8.498 BNB",
  },
  {
    title: "Service fee",
    value: "0 BNB",
  },
  {
    title: "Total bid amount",
    value: "0 BNB",
  },
];

const Bid = ({ className }) => {


  const [productId,setProductId] = useState(111);
  const [userId,setUserid] = useState(222);
  const [balance,setBalance] = useState(8.498);
  const [servicefee,setServicefee] = useState(0);
  const [totalbidamount,setTotalbidamount] = useState(0);
  const [bid,setBid]=useState();
  items[0].value = balance+" BNB";
  items[1].value = servicefee+" BNB";
  items[2].value= totalbidamount+" BNB";


  const handleBid = () => {


    setTotalbidamount(Number(bid)+Number(servicefee))
    
    if(bid) {
      setBalance(balance-totalbidamount);
      axios.post('http://localhost:4000/placebid',{
        "productID":productId,
        "userID":userId,
        "balance":balance,
        "serviceFee":servicefee,
        "bid":bid,
        "totalBidAmount":totalbidamount
      }).then(res => {
       
        console.log(balance-totalbidamount)
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }

  }

  return (
    <div className={cn(className, styles.checkout)}>
      <div className={cn("h4", styles.title)}>Place a bid</div>
      <div className={styles.info}>
        You are about to purchase <strong>C O I N Z</strong> from{" "}
        <strong>UI8</strong>
      </div>
      <div className={styles.stage}>Your bid</div>
      <div className={styles.table}>
        <div className={styles.row} key={-1}>
          <div className={styles.col}>Enter Bid </div>
            <input type="text" className={styles.col} onChange={(e) => {
              setBid(Number(e.target.value));
              setTotalbidamount(Number(Number(e.target.value)+servicefee));
            }
            }/>
          <div className={styles.col}>BNB</div>
        </div>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)} onClick={() => handleBid()}>Place a bid</button>
        <button className={cn("button-stroke", styles.button)}>Cancel</button>
      </div>
    </div>
  );
};

export default Bid;
