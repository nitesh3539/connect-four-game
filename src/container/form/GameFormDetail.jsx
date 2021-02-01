import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  GameFormContainer,
  FormWrapper,
  BottomSeperator,
  ButtonText,
  ButtonContainer,
} from "./GameFormDetail.style";

import avatar01 from "../../assets/icons/avatar01.png";
import avatar02 from "../../assets/icons/avatar02.png";
import run from "../../assets/icons/run.png";
import winner from "../../assets/icons/winner.png";
import FormInput from "../../components/FormInput";
import Header from "../../components/Header";
import ModalView from "../../components/modal-component/ModalView";


const radioButtons1 = [
  {
    id: 1,
    name: "2 Games",
    value: 2,
  },
  {
    id: 2,
    name: "3 Games",
    value: 3,
  },
  {
    id: 3,
    name: "5 Games",
    value: 5,
  },
  {
    id: 4,
    name: "10 Games",
    value: 10,
  },
];

const radioButtons2 = [
  {
    id: 1,
    name: "Alternative turn",
    value: 1,
  },
  {
    id: 2,
    name: "Looser first",
    value: 2,
  },
  {
    id: 3,
    name: "Winner first",
    value: 3,
  },
  {
    id: 4,
    name: "Always player 01",
    value: 4,
  },
  {
    id: 5,
    name: "Always player 02",
    value: 5,
  },
];


const GameFormDetail = ({ btnName, btnColor }) => {
  const [playerOneName, setplayerOneName] = useState("");
  const [playerTwoName, setplayerTwoName] = useState("");
  const [noOfGameValue, setNoOfGameValue] = useState(null);
  const [moveStart, setMoveStart] = useState(null);
  const [modalShowValue, setModalShowValue] = useState(null);
  const history = useHistory();

  const onSetPlayeOnerName = (e) => {
    setplayerOneName(e.target.value);
  };
  const onSetPlayeTworName = (e) => {
    setplayerTwoName(e.target.value);
  };
  const onSetModalValue = (value) => {
    setModalShowValue(value);
  };

  const onCancel = () => {
    setModalShowValue(null);
  };
  const onSetNoOfGameValue = (value) => {
    setNoOfGameValue(value);
    setModalShowValue(null);
  };

  const onSetMoveStart = (value) => {
    setMoveStart(value);
    setModalShowValue(null);
  };

  const navigateToGameScreen = () => {
    const state = {
      player1: playerOneName ? playerOneName : "Player1",
      player2: playerTwoName ? playerTwoName : "Player2",
      move: moveStart ? moveStart : radioButtons2[0],
      noGame: noOfGameValue ? noOfGameValue : radioButtons1[0],
    };
    localStorage.setItem("route", "/connectfour");
    history.push({
      pathname: "/connectfour",
      state,
    });
  };

  return (
    <FormWrapper>
      <Header />
      <GameFormContainer>
        <FormInput
          image={avatar01}
          color={"#DCF6E4"}
          onChange={onSetPlayeOnerName}
          ringColor={"#37AC5D"}
          value={playerOneName}
          labelText={"Player 01"}
        />
        <FormInput
          image={avatar02}
          color={"#F6EFD5"}
          onChange={onSetPlayeTworName}
          ringColor={"#F8D146"}
          value={playerTwoName}
          labelText={"Player 02"}
        />
        <FormInput
          image={winner}
          color={"#EFF3FF"}
          isModal={"MODAL1"}
          value={noOfGameValue?.name}
          onChange={onSetModalValue}
          ringColor={"#B1C4F9"}
          labelText={"Number of game"}
        />
        <FormInput
          image={run}
          color={"#EFF3FF"}
          isModal={"MODAL2"}
          value={moveStart?.name}
          onChange={onSetModalValue}
          ringColor={"#B1C4F9"}
          labelText={"Who starts"}
        />
        <BottomSeperator />
        {modalShowValue === "MODAL1" ? (
          <ModalView
            show={modalShowValue === "MODAL1"}
            onClick={onSetNoOfGameValue}
            value={noOfGameValue}
            modalClassname={"number-game"}
            modalTitle={"Number of game"}
            radioButtons={radioButtons1}
            onCancel={onCancel}
          />
        ) : null}
        {modalShowValue === "MODAL2" ? (
          <ModalView
            show={modalShowValue === "MODAL2"}
            onClick={onSetMoveStart}
            value={moveStart}
            modalClassname={"player-turns"}
            modalTitle={"Who starts"}
            radioButtons={radioButtons2}
            onCancel={onCancel}
          />
        ) : null}
        <ButtonContainer btnColor={"#4B7BFF"} onClick={navigateToGameScreen}>
          <ButtonText color={"#FFF"}>Start Game</ButtonText>
        </ButtonContainer>
      </GameFormContainer>
    </FormWrapper>
  );
};

export default GameFormDetail;
