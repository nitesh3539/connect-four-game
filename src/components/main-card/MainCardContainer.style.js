import styled from "styled-components";

const MainCardWrapper = styled.button`
  width: 700px;
  position: relative;
  display: flex;
  height: 650px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  border: 1px solid #f7f7f7;
  border-radius: 30px;
  opacity: 1;
`;

const RightRingStyle = styled.div`
  width: 225px;
  height: 221px;
  margin-top: 100px;
  border-radius: 50%;
  position: absolute;
  top: 73px;
  left: 583px;
  opacity: 0.7;
  background: radial-gradient(
    ellipse at center,
    rgba(155, 113, 12, 0) 50%,
    #e6ffe9 51.5%
  );
`;

const TopRingStyle = styled.div`
  width: 140px;
  height: 138px;
  border: 25px solid #fff7db;
  border-radius: 50%;
  margin-left: 40%;
  margin-top: -90px;
  position: absolute;
  opacity: 0.7;
  background: radial-gradient(
    ellipse at center,
    rgba(155, 113, 12, 0) 50%,
    51.5%
  );
`;

const ImageWrapper = styled.img`
  top: -150px;
  left: 280px;
  width: 509px;
  height: 552px;
  position: absolute;
  z-index: 10;
  background: transparent url("img/4inarow.png") 0% 0% no-repeat padding-box;
  // box-shadow: 20px 0px 25px #00000029;
  opacity: 1;
`;

export { MainCardWrapper, TopRingStyle, ImageWrapper, RightRingStyle };
