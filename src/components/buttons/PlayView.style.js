import styled from "styled-components";

const PlayViewWrapper = styled.div`
  width: 132px;
  height: 132px;
  background: #ff7243 0% 0% no-repeat padding-box;
  box-shadow: 10px 10px 50px #ff724373;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid white;
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
const PlayTextStyle = styled.div`
  width: 65px;
  height: 31px;
  margin-top: 15px;
  font: normal normal 400 22px/33px sans-serif;
  letter-spacing: 2.4px;
  color: #424242;
  opacity: 1;
`;

export { PlayViewWrapper, PlayIcon, RingStyle, PlayTextStyle };
