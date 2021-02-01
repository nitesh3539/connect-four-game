import styled from "styled-components";

const MazeContainer = styled.div`
  background: #84a4fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000040;
  position: relative;
  opacity: 1;
  border: 2px solid #ffffff;
  width: 600px;
  margin: auto;
  padding: 8px;
`;

const PlayerCell = styled.div`
  width: calc(600px / 8 - 8px);
  height: calc(600px / 8 - 8px);
  display: inline-block;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px #00000040;
  position: relative;

  border: ${(props) =>
    `${props.winnerTile ? "8px solid #FFFF00" : "2px solid #FFFFFF"}`};
  border-radius: 50%;
  margin: 4px;
  background: ${(props) => `radial-gradient(ellipse at     center, 
    rgba(155,113,12,0) 50%,
    ${props.color} 51.5%)`};
`;
const PlayerInnerCell = styled.div`
  position: absolute;
  width: 72%;
  height: 72%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => `${props.backImg}`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-out;
`;
const PlayerTwoCell = styled.div`
  width: calc(600px / 8 - 8px);
  height: calc(600px / 8 - 8px);
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0px 3px 6px #00000040;
  border: 2px solid #ffffff;
  border-radius: 50%;
  margin: 4px;
  background: radial-gradient(
    ellipse at center,
    rgba(155, 113, 12, 0) 50%,
    #f8d146 51.5%
  );
`;
const BlockCell = styled.div`
  width: calc(600px / 8 - 8px);
  height: calc(600px / 8 - 8px);
  background: white;
  display: inline-block;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px #00000040;

  border: 2px solid #ffffff;
  border-radius: 50%;
  margin: 4px;
`;
const ImageStyle = styled.img`
  width: 30px;
  height: 30px;
  margin-top: ${(props) => (props.winnerTile ? "4px" : "12px")};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

export {
  MazeContainer,
  BlockCell,
  PlayerTwoCell,
  PlayerCell,
  PlayerInnerCell,
  ImageStyle,
};
