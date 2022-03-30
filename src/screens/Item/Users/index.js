import React from "react";
import cn from "classnames";
import styles from "./Users.module.sass";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import ReactSkeleton from "components/ReactSkeleton";

const Users = ({ className, items, isOwner }) => {
  return (
    <div className={cn(styles.users, className)}>
      <div className={styles.list}>
        {items.map((x, index) => (
          <div className={styles.item} key={index}>
            <div className={styles.avatar}>
              {x.avatar ? <img src={x.avatar} alt="Avatar" /> : <ReactSkeleton circle className={styles.noAvatar} />}
              {x.reward && (
                <div className={styles.reward}>
                  <img src={x.reward} alt="Reward" />
                </div>
              )}

              {x.check && (
                <div className="img-icon-checkmark">
                  <FaCheck />
                </div>
              )}
            </div>
            <div className={styles.details}>
              <div className={styles.position}>{x.position}</div>
              {x.userName ? (
                isOwner ? (
                  <Link to="/profile">
                    <div className={styles.name}>{x.userName}</div>
                  </Link>
                ) : (
                  <div className={styles.name}>{x.userName}</div>
                )
              ) : (
                <ReactSkeleton width='160px' className={styles.noName} />
              )}
              {/* {check ? (
                  <div className="img-icon-checkmark">
                    <FaCheck />
                  </div>
                ) : null} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
