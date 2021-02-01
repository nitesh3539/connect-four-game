import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import {
  ConnectFourGameWrapper,
  CardLayout,
  GameContainer,
} from "./ConnectFourGame.style";

import GamePanel from "../../components/game-panel/GamePanel";
import GameContentContainer from "../../components/game-content/GameContentContainer";
import Header from "../../components/Header";

import {
  intitializeBoard,
  GameState,
  Player,
  togglePlayerTurn,
} from "../../util/gameUtil";

const ConnectFourGame = () => {
  const location = useLocation();
  const history = useHistory();
  const [playersState, setPlayersState] = useState({
    currentGame: 1,
    winnersList: [],
  });

  const [playerSteps, setPlayerSteps] = useState([]);

  const [state, setState] = useState({
    board: intitializeBoard(),
    playerTurn: location.state.move.value == 5 ? Player.Two : Player.One,
    gameState: GameState.Ongoing,
    winnerTiles: [],
  });

  const onNextGame = () => {
    const clonePlayersState = { ...playersState };
    clonePlayersState.currentGame += 1;
    setPlayersState(clonePlayersState);
    setState({
      board: intitializeBoard(),
      playerTurn: state.playerTurn,
      gameState: GameState.Ongoing,
      winnerTiles: [],
    });
    setPlayerSteps([])
  };

  const onButtonClick = (btnType) => {
    switch (btnType) {
      case "game":
        onNextGame();
        return;
      case "tournament":
        onPlayAgain();
        return;
      default:
        onUndoSteps();
        return;
    }
  };

  const onEndTournament = () => {
    history.push("/");
    localStorage.setItem("route", "/");
  };

  const onUpdatePlayerWinnerList = (value) => {
    const clonePlayersState = { ...playersState };
    clonePlayersState.winnersList.push(value);
    setPlayersState(clonePlayersState);
  };

  const setBoardState = (data) => {
    setState(data);
  };

  const onUndoSteps = () => {
    if (!playerSteps?.length) {
      return;
    }
    const index = playerSteps.pop();
    const { board, playerTurn } = state;
    const newBoard = board.slice();
    newBoard[index] = Player.None;
    setBoardState({
      ...state,
      board: newBoard,
      playerTurn: togglePlayerTurn(playerTurn),
    });
  };

  const onPlayAgain = () => {
    setPlayersState({ currentGame: 1, winnersList: [] });
    setState({
      board: intitializeBoard(),
      playerTurn: location.state.move.value == 5 ? Player.Two : Player.One,
      gameState: GameState.Ongoing,
      winnerTiles: [],
    });
    setPlayerSteps([])
  };

  const onSetPlayerSteps = (value) => {
    setPlayerSteps(value);
  };

  return (
    <ConnectFourGameWrapper>
      <Header />
      <CardLayout>
        <GameContainer>
          <GamePanel
            playerSteps={playerSteps}
            setPlayerSteps={onSetPlayerSteps}
            formState={location.state}
            state={state}
            playersState={playersState}
            setBoardState={setBoardState}
            onUpdatePlayerWinnerList={onUpdatePlayerWinnerList}
          />
        </GameContainer>
        <GameContentContainer
          onNextGame={onNextGame}
          onPlayAgain={onPlayAgain}
          onEndTournament={onEndTournament}
          onClick={onButtonClick}
          playersState={playersState}
          playerTurn={state.playerTurn}
          formState={location.state}
        />
      </CardLayout>
    </ConnectFourGameWrapper>
  );
};

export default ConnectFourGame;
