import React from "react";
import styles from "./Spinner.module.sass";

function Spinner() {
  return (
    <div className={styles.tripleSpinnerContainer}>
      <div className={styles.tripleSpinner}></div>
    </div>
  );
}

export default Spinner;
