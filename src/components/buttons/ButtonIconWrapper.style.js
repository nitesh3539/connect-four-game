import styled from "styled-components";

const ButtonComponentWrapper = styled.button`
  top: 653px;
  left: 605px;
  width: 300px;
  height: 80px;
  background: ${(props) => `${props.btnColor} 0% 0% no-repeat padding-box`};
  padding: 25px;
  margin: 10px;
  border-radius: 20px;
  display: flex;
  border-width: 0;
  align-items: center;
  flex-direction: row;
  opacity: 1;
`;

const ImageStyle = styled.img`
  width: 46px;
  height: 48px;
  padding-right: 25px;
  background: transparent url("img/one.png") 0% 0% no-repeat padding-box;
  opacity: 1;
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

export { ButtonComponentWrapper, ImageStyle, TextStyle };
