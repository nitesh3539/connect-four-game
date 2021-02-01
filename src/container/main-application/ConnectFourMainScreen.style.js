import styled from "styled-components";

const ConnectFourWrapper = styled.div`
  background-color: #ced2dc;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;
const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 700px;
  height: 750px;
  background: #eeeeee 0% 0% no-repeat padding-box;
  border: 1px solid #f7f7f7;
  border-radius: 30px;
  opacity: 1;
`;
const ConnectText = styled.div`
  width: 600px;
  height: 39px;
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

export {
  CardLayout,
  ConnectText,
  HeaderText,
  DescriptionText,
  ConnectFourWrapper,
};
