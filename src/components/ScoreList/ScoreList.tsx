import React, { FC } from 'react';
import Item from './Item/Item';
import { Container, Header, List } from './style';
import { useUtils } from '../../hooks/useUtils';
import {  COLORS_400 } from './constant';
import { ScoreListItem,ScoreListProps } from './models';
const ThemeContext = React.createContext('dark');


const itemList:ScoreListItem[] = [
  {id:'3',avatar:'/resources/person_2.jpeg',score:100},
  {id:'2',avatar:'/resources/person_3.jpeg',score:80},
  {id:'1',avatar:'/resources/person_2.jpeg',score:59},
  {id:'3',avatar:'/resources/person_1.jpeg',score:34},
  {id:'0',avatar:'/resources/person_1.jpeg',score:10},
];


const ScoreList: FC<ScoreListProps> = (props) => {
  const {items} = props;
  const {shuffleArray} = useUtils();


  const renderItems = (list:ScoreListItem[])=>{
    const colors = shuffleArray(COLORS_400);
    return list.map((item,index)=> {
      return (
        <ThemeContext.Consumer>

          {(theme) =>(
            <Item theme={theme} key={`item-${index}`} avatar={item.avatar} score={item.score} colorBar={colors[index]}></Item>
          )}
          
        </ThemeContext.Consumer>
      )
    })
  }

  return (
    <Container>
      <Header> Puntuaciones</Header>
      <List>
        <ThemeContext.Provider value="blue">
          {renderItems(itemList)}
        </ThemeContext.Provider>
      </List>
    </Container>
  );
};

export default ScoreList;
