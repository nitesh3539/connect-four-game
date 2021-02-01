import styled from "styled-components";

const PlayerTileContainer = styled.div`
  width: 300px;
  height: 100px;
  background: ${(props) => `${props.color} 0% 0% no-repeat padding-box`};
  border: 1px solid #70707026;
  border-radius: 15px;
  display: flex;
  padding: 15px;
  margin: 5px;
  align-items: center;
  opacity: 1;
`;

const PlayerRingContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    `${props.isPlayerTurn ? "12px solid #FFA200" : "2px solid null"}`};
  border-radius: 50%;
  position: absolute;
  margin-left: ${(props) => `${props.isPlayerTurn ? "-12px" : "0px"}`};
  opacity: 1;
  background: ${(props) => `radial-gradient(ellipse at     center, 
    rgba(155,113,12,0) 50%,
    ${props.color} 51.5%)`};
`;

const PlayerDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 65%;
  margin-left: 35%;
  padding: 10px;
  justify-content: space-between;
`;
const PlayerDetailSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlayerDetailTitle = styled.div`
  height: 25px;
  text-align: left;
  font: normal normal normal 18px/27px sans-serif;
  letter-spacing: 0px;
  color: #424242;
  opacity: 0.56;
`;

const PlayerDetailTitleValue = styled.div`
  height: 39px;
  text-align: left;
  font: normal normal normal 28px/42px sans-serif;
  letter-spacing: 0px;
  color: #424242;
  opacity: 1;
`;

export {
  PlayerRingContainer,
  PlayerTileContainer,
  PlayerDetailContainer,
  PlayerDetailSubContainer,
  PlayerDetailTitle,
  PlayerDetailTitleValue,
};
