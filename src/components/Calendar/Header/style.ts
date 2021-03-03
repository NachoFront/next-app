import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2rem;
  align-items: center;
  text-align: center;
`;

const ContainerMonth = styled.div`
  text-transform: uppercase;
  color: grey;
  color: #505050;
  font-size: 1rem;
`;

const ContainerActions = styled.div`
  text-align: left;
  button {
    margin-right: 0.2rem;
  }
  .today {
    margin-left: 1rem;
    color: #505050;
  }
`;

const ContainerSwitch = styled.div`
  text-align: right;
  .ant-switch-checked {
    background-color: #696f8d;
  }
`;

export { Container, ContainerMonth, ContainerActions, ContainerSwitch };