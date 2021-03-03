import styled from 'styled-components';

const SelectContainer = styled.div`
  display: inline-block;
  min-width: 150px;
  text-align: center;
  position: relative;
`;
interface DefaultTextProps {
  active: boolean;
}
const DefaultText = styled.div<DefaultTextProps>`
  border-bottom: 1px solid grey;
  ::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 8px;
    border: 7px solid transparent;
    border-color: grey transparent transparent transparent;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  text-align: center;
  position:absolute;
  width:100%;

  .select-options {
    position: absolute;
    width: 100%;
  }

  li {
    margin-bottom: 0;
    list-style-type: none;
    padding: 6px 20px;
    background: white;
    border-bottom: 1px solid #fbfbfb;
    cursor: pointer;
  }

  li:hover {
    background-color: white;
    color: black;
  }
`;

export { SelectContainer, List, DefaultText };
