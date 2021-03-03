import styled from 'styled-components';




const WrapperItem = styled.div`
  display: flex;
  align-items: stretch;
`;
const WrapperAvatar = styled.div`
  width: 50px;
  img {
    width: 50px;
  }
`;

interface WrapperProgressBarProps {
  score: number;
}


const WrapperProgressBar = styled.div<WrapperProgressBarProps>`
  width: 100%;
  background: white;
  border-bottom: 1px solid #929292;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;


const Score = styled.div`
    z-index:10;
    background: white;
    border-radius: 100%;
    border: 1px solid;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
interface BackgroundScoreProps{
    score: number;
    colorBar:string;
}
const BackgroundScore = styled.div<BackgroundScoreProps>`
    z-index:9;  
    background: ${({ colorBar }) => `${colorBar}`};
    width: ${({ score }) => `${score}%`};
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export { WrapperItem, WrapperAvatar, WrapperProgressBar,BackgroundScore,Score };
