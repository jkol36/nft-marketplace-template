import styles from './CancelBidAlert.module.sass';

const CancelBidAlert = ({ isForPurchase }) => {

  return (
    <div className={styles.root}>
      {isForPurchase ? 'You must cancel your bid to purchase the NFT.' : 'You have placed a bid already.'}
    </div>
  )
};

export default CancelBidAlert;
