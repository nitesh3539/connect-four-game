import styled from "styled-components";

const ModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ModalTitle = styled.text`
  width: 308px;
  height: 51px;
  text-align: center;
  font: normal normal 400 36px/55px sans-serif;
  letter-spacing: 0px;
  margin-bottom: 20px;
  color: #424242;
  opacity: 1;
`;
const ModalTileContainer = styled.div`
  width: 500px;
  height: 80px;
  display: flex;
  align-items: center;
  background: #eff3ff 0% 0% no-repeat padding-box;
  border: 1px solid #70707026;
  border-radius: 15px;
  margin: 10px;
  opacity: 1;
`;

const ModalTileInput = styled.input`
  width: 30px;
  height: 30px;
  margin-left: 30px;
  margin-right: 30px;
  background: #4b7bff 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const ModalTileValue = styled.text`
  width: 224px;
  height: 39px;
  text-align: left;
  font: normal normal normal 28px/42px sans-serif;
  letter-spacing: 0px;
  color: #424242;
  opacity: 1;
`;

const ModalBorder = styled.div`
  width: 530px;
  height: 0px;
  margin: 20px;
  border: 1px solid var(--unnamed-color-707070);
  border: 1px solid #707070;
  opacity: 0.8;
`;

const RingStyle = styled.div`
  height: 42px;
  width: 42px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    rgba(155, 113, 12, 0) 60%,
    #fff 51.5%
  );
`;
const ModalButtonText = styled.div`
  height: 45px;
  text-align: center;
  font: normal normal 400 32px/48px sans-serif;
  letter-spacing: 0px;
  color: ${(props) => `${props.color}`};
  opacity: 1;
`;
const ModalButton = styled.button`
  width: 250px;
  height: 80px;
  margin-left: 10px;
  margin-right: 10px;
  background: ${(props) => `${props.color} 0% 0% no-repeat padding-box`};
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #70707026;
  border-radius: 20px;
  opacity: 1;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export {
  ModalContainer,
  ModalBorder,
  RingStyle,
  ModalButtonText,
  ModalTitle,
  ModalTileContainer,
  ModalTileInput,
  ModalTileValue,
  ModalButton,
  ButtonContainer,
};
