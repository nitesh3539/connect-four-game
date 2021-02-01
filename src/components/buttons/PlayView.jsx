import React from "react";
import {
  PlayViewWrapper,
  PlayIcon,
  RingStyle,
  PlayTextStyle,
} from "./PlayView.style";

const PlayView = () => {
  return (
    <PlayViewWrapper>
      <RingStyle>
        <PlayIcon />
      </RingStyle>
      <PlayTextStyle>PLAY</PlayTextStyle>
    </PlayViewWrapper>
  );
};
export default PlayView;
