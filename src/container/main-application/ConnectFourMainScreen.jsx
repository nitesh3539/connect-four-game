import React from "react";
import MainCardContainer from "../../components/main-card/MainCardContainer";

import {
  CardLayout,
  ConnectText,
  HeaderText,
  DescriptionText,
  ConnectFourWrapper,
} from "./ConnectFourMainScreen.style";

const ConnectFourMainScreen = () => {
  return (
    <ConnectFourWrapper>
      <ConnectText>
        <HeaderText>CONNECT FOUR!</HeaderText>
        <DescriptionText>
          Play with other players around the world.
        </DescriptionText>
      </ConnectText>
      <CardLayout>
        <MainCardContainer />
        <div style={{ marginTop: 20, padding: 20, marginLeft: 20 }}>© 2020</div>
      </CardLayout>
    </ConnectFourWrapper>
  );
};

export default ConnectFourMainScreen;
