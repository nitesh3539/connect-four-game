import styled from "styled-components";

const ConnectFourGameWrapper = styled.div`
  background-color: #ced2dc;
  display: flex;
  align-items: center;
  // justify-content: center;
  height: 100vh;
  flex-direction: column;
`;
const CardLayout = styled.div`
  width: 1080px;
  height: 700px;
  display: flex;
  margin-top: 50px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #f7f7f7;
  border-radius: 30px;
  opacity: 1;
`;
const GameContainer = styled.div`
  width: 700px;
  height: 700px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  opacity: 1;
`;

const PlayerRingContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 15px solid null;
  border-radius: 50%;
  position: absolute;
  opacity: 1;
  background: radial-gradient(
    ellipse at center,
    rgba(155, 113, 12, 0) 50%,
    #37ac5d 51.5%
  );
`;

const GameDetailContainer = styled.div`
  width: 380px;
  height: 690px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border: 1px solid #f7f7f7;
  border-radius: 30px;
  align-items: center;
  opacity: 1;
`;
const GameHeader = styled.div`
  height: 51px;
  text-align: center;
  font: normal normal 400 32px/55px sans-serif;
  letter-spacing: 0px;
  color: #424242;
  opacity: 1;
`;
const GameSubHeader = styled.span`
  height: 33px;
  text-align: center;
  letter-spacing: 0px;
  margin-top: 5px;
  color: #505351;
  opacity: 1;
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

const GameSubContainer = styled.div`
  width: 72px;
  height: 675px;
  transform: matrix(0, -1, 1, 0, 0, 0);
  border: 2px solid var(--unnamed-color-ffffff);
  background: #84a4fc 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000040;
  border: 2px solid #ffffff;
  opacity: 1;
  margin: auto;
  padding: 8px;
`;

const HeaderText = styled.div`
  text-align: left;
  font: normal normal 600 20px/28px sans-serif;
  letter-spacing: 0px;
  color: #3d4276;
  text-transform: uppercase;
  opacity: 1;
`;

const DescriptionText = styled.div`
  width: 152px;
  height: 52px;
  text-align: left;
  font: normal normal normal 14px/20px "Poppins";
  letter-spacing: 0px;
  color: #949494;
  opacity: 1;
`;

const ButtonContainer = styled.button`
  width: 334px;
  height: 90px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #70707026;
  border-radius: 20px;
  opacity: 1;
  background: ${(props) => `${props.btnColor} 0% 0% no-repeat padding-box`};
  padding: 25px;
  margin: 10px;
  display: flex;
  border-width: 0;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.text`
  height: 45px;
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal 400 32px/48px sans-serif;
  letter-spacing: 0px;
  color: ${(props) => `${props.color}`};
  opacity: 1;
`;

const Border = styled.div`
  width: 335px;
  height: 0px;
  border: 1px solid var(--unnamed-color-707070);
  border: 1px solid #707070;
  opacity: 0.8;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CongratulationText = styled.div`
  eight: 59px;
  text-align: center;
  font: normal normal 400 42px/63px sans-serif;
  letter-spacing: 0px;
  color: #ff6600;
  opacity: 1;
`;
const NameStyle = styled.span`
  text-align: center;
  font: normal normal 400 20px/24px sans-serif;
  letter-spacing: 0px;
  color: #505351;
`;

export {
  CardLayout,
  GameContainer,
  HeaderText,
  DescriptionText,
  ConnectFourGameWrapper,
  GameSubContainer,
  PlayerRingContainer,
  GameDetailContainer,
  GameHeader,
  GameSubHeader,
  PlayerDetailContainer,
  PlayerDetailSubContainer,
  PlayerDetailTitle,
  PlayerDetailTitleValue,
  ButtonContainer,
  ButtonText,
  Border,
  CongratulationText,
  NameStyle,
};
