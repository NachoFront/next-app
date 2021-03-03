import React, { FC } from 'react';
import { WrapperItem, WrapperAvatar, WrapperProgressBar,BackgroundScore,Score } from './style';
import { ItemsProps } from '../models';


const Item: FC<ItemsProps> = (props) => {
  const { score, avatar,colorBar,theme } = props;

  console.log(theme)
  return (
    <WrapperItem>
      <WrapperAvatar>
        <img src={avatar} alt=""/>
      </WrapperAvatar>

      <WrapperProgressBar score={score}>
        <Score>{score}</Score>
        <BackgroundScore score={score} colorBar={colorBar} />
      </WrapperProgressBar>
    </WrapperItem>
  );
};

export default Item;
