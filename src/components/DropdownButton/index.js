import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styled from 'styled-components';

import { FlexContainer } from 'styles/styled-components';
import styles from "./Dropdown.module.sass";

const Img = styled.img`
  margin: ${props => props.margin?.top || 0}px ${props => props.margin?.right || 0}px ${props => props.margin?.bottom || 0}px ${props => props.margin?.left || 0}px;
  padding-right: 0 !important;
`;

const DropdownButton = ({ className, options = [], onSelected = () => {}, children }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = (value) => {
    onSelected(value);
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <button className={cn('button button-small')} onClick={() => setVisible(true)}>{children}</button>
      <div
        className={cn(styles.dropdown, className, { [styles.active]: visible })}>
        <div className={styles.body}>
          {options.map((x, index) => (
            <div
              className={cn(styles.option)}
              onClick={() => handleClick(x, index)}
              key={x.name}>
              <FlexContainer>
                {!!x.icon && (
                  <Img src={x.icon} width={24} height={24} margin={{ right: 8 }} alt='binance' style={{ width: '24px', height: '24px' }} />
                )}
                <div>{x.title}</div>
              </FlexContainer>
            </div>
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default DropdownButton;
