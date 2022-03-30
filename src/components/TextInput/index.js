import React from "react";
import cn from "classnames";
import styles from "./TextInput.module.sass";

const TextInput = ({ className, label, error, errorMsg, required, ...props }) => {
  return (
    <div className={cn(styles.field, className)}>
      {label && <div className={styles.label}>{label} {required && (<p style={{ color: 'red', marginLeft: '4px' }}>*</p>)}</div>}
      <div className={styles.wrap}>
        <input className={styles.input} {...props} />
        {error && (
          <div className={styles.error}>{errorMsg}</div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
