import React from 'react';
import { CustomListItem, FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent, Icon, List, Text } from '@ui5/webcomponents-react';
import styles from './PopoverListItems.module.css';
import PopoverInfo from '../Info/PopoverInfo';

const style = {
  flexbox: {
    width: '100%',
  },
  popover: {
    width: '35%',
  },
};

const PopoverListItems = ({ popoverRef, title, items }) => {
  return (
    <div data-testid="popoverListItems-wrapper">
      <PopoverInfo popoverRef={popoverRef} title={title} style={style.popover}>
        <List data-testid="popoverListItems-listOfElements-wrapper">
          {items.map((item, index) => {
            return (
              <CustomListItem key={index} onClick={item.onClick}>
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} alignItems={FlexBoxAlignItems.Start} style={style.flexbox}>
                  <Icon className={styles.iconStyle} name={item.icon} />
                  <Text className={styles.iconStyle}>{item.description}</Text>
                  <div>{item.children}</div>
                </FlexBox>
              </CustomListItem>
            );
          })}
        </List>
      </PopoverInfo>
    </div>
  );
};

export default PopoverListItems;
