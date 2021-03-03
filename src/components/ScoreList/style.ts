import styled from 'styled-components';
const purple = '#aca7d5';

const Container = styled.div`
  min-width: 10rem;
  max-width: 10rem;
`;

const Header = styled.div`
  background:${purple};
  height:30px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  color:white;

`;

const List = styled.div`
  border-left: 1px solid ${purple};
  border-right: 1px solid ${purple};
  border-bottom: 1px solid ${purple};

`;


export { Container,Header,List };
