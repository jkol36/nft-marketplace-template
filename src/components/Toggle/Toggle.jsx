import { useState } from "react";
import cn from "classnames";
import styles from "./Toggle.module.sass";
import * as Icons from "react-icons";
// import Icon from "../assets/images/icon-arrow.svg";
function Toggle({ children, question, Icon, isOpen, isLocked }) {
  const [toggle, setToggle] = useState(isOpen);
  const cNames = toggle ? "rotate" : "";
  // const styles = isLocked ? { color: "#000" } : null;

  return (
    <div className={cn(styles.toggle)} onClick={() => setToggle(!toggle)}>
      <div className={cn(styles.question)}>
        <Icon size={28} />
        {/* <img src={Icon} alt="" className={cn(styles.img)} /> */}
        <h4> {question} </h4>
      </div>
      {toggle && !isLocked && (
        <div onClick={(e) => e.stopPropagation()} className={cn(styles.answer)}>
          {toggle ? children : ""}
        </div>
      )}
    </div>
  );
}

export default Toggle;
