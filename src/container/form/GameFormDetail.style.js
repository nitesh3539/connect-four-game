import styled from "styled-components";

const GameFormContainer = styled.button`
  width: 760px;
  height: 830px;
  margin-top: 30px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #f7f7f7;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 30px;
  opacity: 1;
`;

const ImageStyle = styled.img`
  width: 46px;
  height: 48px;
  padding-right: 25px;
  background: transparent url("img/one.png") 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const GameFormTileContainer = styled.div`
  width: 600px;
  height: 110px;
  background: ${(props) => `${props.color} 0% 0% no-repeat padding-box`};
  border: 1px solid #70707026;
  border-radius: 15px;
  display: flex;
  padding: 15px;
  position: relative;
  margin: 10px;
  align-items: center;
  opacity: 1;
`;

const GameFormRingContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  opacity: 1;
  background: ${(props) => `radial-gradient(ellipse at     center, 
    rgba(155,113,12,0) 50%,
    ${props.color} 51.5%)`};
`;
const GameInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 65%;
  margin-left: 18%;
  margin-top: 40px;
  padding: 10px;
  justify-content: space-between;
`;

const FormWrapper = styled.div`
  background-color: #ced2dc;
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const TextStyle = styled.span`
  width: 176px;
  height: 33px;
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal bold 20px/35px sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
`;

const CustomInput = styled.input`
  outline: 0;
  border: 1px solid #707070;
  border-width: 0 0 0px;
  text-align: left;
  font: normal normal normal 24px/36px sans-serif;
  letter-spacing: 0px;
  color: #424242;
  opacity: 1;
  background: ${(props) => `${props.color}`};
`;

const BottomLine = styled.div`
  width: 507px;
  height: 0px;
  position: absolute;
  bottom: 28px;
  left: 100px;
  border: 0.5px solid #707070;
  opacity: 0.3;
`;

const TileLabel = styled.div`
  position: absolute;
  width: 507px;
  top: 35px;
  left: 21%;
  height: 25px;
  text-align: left;
  font: normal normal normal 18px/27px sans-serif;
  letter-spacing: 0px;
  color: #424242;
  opacity: 0.56;
`;
const BottomSeperator = styled.div`
  width: 650px;
  height: 0px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid var(--unnamed-color-707070);
  border: 1px solid #707070;
  opacity: 0.8;
`;
const ButtonContainer = styled.button`
  width: 633px;
  height: 100px;
  background: #4b7bff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #70707026;
  border-radius: 20px;
  opacity: 1;
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

const RadioValueText = styled.text`
  width: 245px;
  height: 39px;
  text-align: left;
  font: normal normal normal 28px/42px sans-serif;
  letter-spacing: 0px;
  color: #424242;
  opacity: 1;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
`;
const HeaderText = styled.text`
  height: 39px;
  text-align: left;
  font: normal normal 600 28px/42px sans-serif;
  letter-spacing: 0px;
  color: #424242;
  opacity: 1;
  width: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BackButton = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  GameFormContainer,
  ImageStyle,
  TextStyle,
  FormWrapper,
  GameFormRingContainer,
  GameFormTileContainer,
  GameInputContainer,
  CustomInput,
  BottomLine,
  TileLabel,
  BottomSeperator,
  ButtonContainer,
  ButtonText,
  RadioValueText,
  HeaderContainer,
  HeaderText,
  BackButton,
};
