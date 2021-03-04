import React, { FC, useEffect, useState } from 'react';
import { SelectContainer, List, DefaultText } from './style';

interface CustomSelectProps {
  optionList: { id: string; name: string }[];
  defaultText?: string;
  colorArrow?:string;
  colorBackgroundList?:string;

}

const CustomSelect: FC<CustomSelectProps> = (props) => {
  const { optionList, defaultText,colorArrow,colorBackgroundList } = props;
  const [showOptionList, setShowOptionsList] = useState(false);
  const [defaultSelectText, setDefaultSelectText] = useState(defaultText ? defaultText : 'Select');

  useEffect(() => {
    if (optionList) {
      setDefaultSelectText(optionList[0].name);
    }
  }, [optionList]);

  const handleListDisplay = () => {
    setShowOptionsList(!showOptionList);
  };

  const handleOptionClick = (e) => {
    setShowOptionsList(false);
    setDefaultSelectText(e.target.getAttribute('data-name'));
  };

  return (
    <SelectContainer onMouseLeave={() => setShowOptionsList(false)}>
      <DefaultText colorArrow={colorArrow}  onClick={handleListDisplay}>{defaultSelectText}</DefaultText>

      {showOptionList && (
        <List bgColor={colorBackgroundList}>
          {optionList &&
            optionList.map((option) => {
              return (
                <li onClick={handleOptionClick} data-name={option['name']} key={option['id']}>
                  {option['name']}
                </li>
              );
            })}
        </List>
      )}
    </SelectContainer>
  );
};

export default CustomSelect;
