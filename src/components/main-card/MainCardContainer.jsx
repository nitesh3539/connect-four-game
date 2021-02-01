import React from "react";
import { useHistory } from "react-router-dom";

import {
  MainCardWrapper,
  TopRingStyle,
  ImageWrapper,
  RightRingStyle,
} from "./MainCardContainer.style";
import PlayView from "../buttons/PlayView";
import ButtonIconWrapper from "../buttons/ButtonIconWrapper";

import fourInRowImage from "../../assets/icons/4inarow.png";

const MainCardContainer = () => {
  const history = useHistory();

  const onClick = (e) => {
    const { id: target } = e.currentTarget;
    if (target === "players") {
      localStorage.setItem("route", "/form");
      history.push("/form");
    } else {
      alert("Comming soon!");
    }
  };
  return (
    <MainCardWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          height: "50%",
          position: "absolute",
        }}
      >
        <PlayView />
        <RightRingStyle />
        <ImageWrapper src={fourInRowImage} />
      </div>
      <TopRingStyle />
      <div
        style={{
          height: 1,
          backgroundColor: "#00000029",
          width: "86%",
          position: "absolute",
          marginRight: "7%",
          marginLeft: "7%",
          marginTop: "50%",
        }}
      />
      <div style={{ height: "50%", marginTop: "55%", padding: 25 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ButtonIconWrapper
            btnId={"custom"}
            btnName={"Custom Game"}
            btnColor={"#4BABFF"}
            onClick={onClick}
          />
          <ButtonIconWrapper
            btnId={"players"}
            btnName={"Two Players"}
            btnColor={"#4B7BFF"}
            onClick={onClick}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ButtonIconWrapper
            btnId={"online"}
            btnName={"Game Online"}
            btnColor={"#4B4BFF"}
            onClick={onClick}
          />
          <ButtonIconWrapper
            btnId={"training"}
            btnName={"Training Game"}
            btnColor={"#6E4BFF"}
            onClick={onClick}
          />
        </div>
      </div>
    </MainCardWrapper>
  );
};

export default MainCardContainer;
