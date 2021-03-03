import styled from 'styled-components';

const WrapperCalendar = styled.div`
  min-width: 700px;
`;

const Cells = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

interface DayProps {
  selected: boolean;
  disabled: boolean;
}
const Day = styled.div<DayProps>`
  min-height: 7rem;
  background: ${({ selected, weekend }) => `${selected ? ' #a4b0e682' : `${weekend ? '#ececec' : 'transparent'}`}`};
  position: relative;
  cursor: pointer;
  min-height: 8em;
  border: 1px solid #e8e8e8;
  border-top: 5px solid transparent;
  border-image: ${({ selected }) => `${selected ? 'linear-gradient(0deg,#e8e8e8  99%,#a5b0e6 0%)' : ''}`};
  border-image-slice: 1;
  :hover {
    border-color: #e4e4e4;
  }
`;

const WeekDay = styled.div`
border:1px solid grey;
text-align:center;
border: 1px solid #e8e8e8;
text-align: center;
color: white;
letter-spacing: 2px;
background: #696f8d;
`

export { WrapperCalendar, Cells, Day,WeekDay };
