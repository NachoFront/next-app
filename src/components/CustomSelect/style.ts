import styled from 'styled-components';

const SelectContainer = styled.div`
  display: inline-block;
  min-width: 150px;
  text-align: center;
  position: relative;
  cursor:pointer;
`;
interface DefaultTextProps {
  active: boolean;
  colorArrow:string;
}
const DefaultText = styled.div<DefaultTextProps>`
  ::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 8px;
    border: 7px solid transparent;
    border-color: ${({ colorArrow }) => colorArrow ? colorArrow : 'black'} transparent transparent transparent;
  }
`;

interface ListProps{
  bgColor?:string;
}

const List = styled.ul<ListProps>`
  margin: 0;
  padding: 0;
  text-align: center;
  position:absolute;
  width:100%;
  box-shadow: 0px 0px 0px 1px #e8e8e8;

  .select-options {
    position: absolute;
    width: 100%;
  }

  li {
    margin-bottom: 0;
    list-style-type: none;
    padding: 6px 20px;
    background: ${({ bgColor }) => bgColor ? bgColor: 'white'};
    cursor: pointer;
    border-left: 2px solid transparent;
  }

  li:hover::before {
    content: '-';
  }
  li:hover::after {
    content: '-';
  }
`;

export { SelectContainer, List, DefaultText };
