import React, { useState, useCallback } from "react";
import {
  getGameState,
  findLowestEmptyIndex,
  togglePlayerTurn,
  GameState,
  getPlayerTurn,
  Player,
} from "../../util/gameUtil";

import { MazeContainer, BlockCell } from "./GamePanel.style";

import avatar1Image from "../../assets/icons/avatar01.png";
import avatar2Image from "../../assets/icons/avatar02.png";
import PlayerImage from "../player/PlayerImage";

const GamePanel = ({
  formState,
  state,
  setBoardState,
  onUpdatePlayerWinnerList,
  playersState,
  playerSteps,
  setPlayerSteps,
}) => {

  const makeMove = useCallback(
    (column) => {
      const { board, playerTurn } = state;

      const index = findLowestEmptyIndex(board, column);

      const newBoard = board.slice();
      const newPlayerSteps = playerSteps.slice();
      newPlayerSteps.push(index);
      newBoard[index] = playerTurn;
      setPlayerSteps(newPlayerSteps);
      const gameState = getGameState(newBoard);
      let playerTurnValue;
      if (gameState?.length) {
        onUpdatePlayerWinnerList(playerTurn);
        playerTurnValue = getPlayerTurn(formState, playersState);
      }
      setBoardState({
        board: newBoard,
        playerTurn: gameState?.length
          ? playerTurnValue
          : togglePlayerTurn(playerTurn),
        gameState,
      });
    },
    [state, playerSteps, setPlayerSteps, setBoardState, onUpdatePlayerWinnerList, formState, playersState]
  );

  const handleOnClick = useCallback(
    (index) => () => {
      const { gameState } = state;

      if (gameState !== GameState.Ongoing) return;

      const column = index % 8;

      makeMove(column);
    },
    [state, makeMove]
  );

  const renderCell = useCallback((player, index) => {
    const isWinnerTile = state.gameState?.length
      ? state.gameState.includes(index)
      : null;
    switch (player) {
      case Player.One:
        return (
          <PlayerImage
            winnerTile={isWinnerTile}
            color={"#37AC5D"}
            image={avatar1Image}
            backImg={"#DCF6E4"}
          />
        );
      case Player.Two:
        return (
          <PlayerImage
            winnerTile={isWinnerTile}
            color={"#F8D146"}
            image={avatar2Image}
            backImg={"#F6EFD5"}
          />
        );
      case Player.None:
        return <BlockCell key={index} onClick={handleOnClick(index)} />;
      default:
        return <BlockCell key={index} onClick={handleOnClick(index)} />;
    }
  }, [handleOnClick, state.gameState])

  const renderCells = useCallback(() => {
    const { board } = state;
    return board.map((player, index) => renderCell(player, index));
  }, [state, renderCell]);

  return <MazeContainer>{renderCells()}</MazeContainer>;
};

export default GamePanel;
