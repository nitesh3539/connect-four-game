var Player = {
  None: null,
  One: 1,
  Two: 2,
};

var GameState = {
  Ongoing: -1,
  Draw: 0,
  PlayerOneWin: Player.One,
  PlayerTwoWin: Player.Two,
};

const intitializeBoard = () => {
  const board = [];
  for (let i = 0; i < 64; i++) {
    board.push(Player.None);
  }
  return board;
};

const findLowestEmptyIndex = (board, column) => {
  for (let i = 56 + column; i >= 0; i -= 8) {
    if (board[i] === Player.None) return i;
  }

  return -1;
};

const togglePlayerTurn = (player) => {
  return player === Player.One ? Player.Two : Player.One;
};

const checkForHorizontal = (board) => {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c <= 4; c++) {
      const index = r * 8 + c;
      const boardSlice = board.slice(index, index + 4);

      const winningResult = checkWinningSlice(boardSlice);
      if (winningResult !== false)
        return [index, index + 1, index + 2, index + 3];
    }
  }
  return false;
};

const checkForVertical = (board) => {
  for (let r = 0; r <= 4; r++) {
    for (let c = 0; c < 8; c++) {
      const index = r * 8 + c;
      const boardSlice = [
        board[index],
        board[index + 8],
        board[index + 16],
        board[index + 24],
      ];

      const winningResult = checkWinningSlice(boardSlice);
      if (winningResult !== false)
        return [index, index + 8, index + 16, index + 24];
    }
  }
  return false;
};

const checkForDiagonal = (board) => {
  for (let r = 0; r <= 4; r++) {
    for (let c = 0; c < 8; c++) {
      const index = r * 8 + c;

      const checkForBoth = [27, 28, 35, 36].includes(index);

      // Checks diagonal down-left
      if (c >= 4 || checkForBoth) {
        const boardSlice = [
          board[index],
          board[index + 7],
          board[index + 14],
          board[index + 21],
        ];

        const winningResult = checkWinningSlice(boardSlice);
        if (winningResult !== false)
          return [index, index + 7, index + 14, index + 21];
      }

      // Checks diagonal down-right
      if (c <= 4 || checkForBoth) {
        const boardSlice = [
          board[index],
          board[index + 9],
          board[index + 18],
          board[index + 27],
        ];

        const winningResult = checkWinningSlice(boardSlice);
        if (winningResult !== false)
          return [index, index + 9, index + 18, index + 27];
      }
    }
  }
  return false;
};

const getGameState = (board) => {
  let checkForWin = checkForHorizontal(board);
  if (!checkForWin) {
    checkForWin = checkForVertical(board);
  }
  if (!checkForWin) {
    checkForWin = checkForDiagonal(board);
  }
  if (checkForWin) {
    return checkForWin;
  }

  if (board.some((cell) => cell === Player.None)) {
    return GameState.Ongoing;
  } else {
    return GameState.Draw;
  }
};

const checkWinningSlice = (miniBoard) => {
  if (miniBoard.some((cell) => cell === Player.None)) return false;

  if (
    miniBoard[0] === miniBoard[1] &&
    miniBoard[1] === miniBoard[2] &&
    miniBoard[2] === miniBoard[3]
  ) {
    return miniBoard[1];
  }

  return false;
};

const checkForWinnerPlayerAndTournament = (playersState, formState) => {
  const { currentGame, winnersList } = playersState;
  const noOfGame = formState.noGame;
  if (currentGame > winnersList.length) {
    return { subHeaderText: `Playing Game ${playersState.currentGame}` };
  }
  const currentGameWinner = winnersList?.[currentGame - 1];
  const currentWinnerCount = winnersList.filter((i) => i === currentGameWinner)
    ?.length;
  const currentWinnerName = formState[`player${currentGameWinner}`];
  if (Math.floor(noOfGame.value / 2) < currentWinnerCount) {
    return {
      currentWinnerName,
      type: "tournament",
      subHeaderText: `, you won tournament`,
    };
  } else {
    return {
      currentWinnerName,
      type: noOfGame.value == currentGame ? "tournament" : "game",
      subHeaderText: `, you won Game ${currentGame}`,
    };
  }
};

const getPlayerTurn = (formState, playersState) => {
  const { move } = formState;
  const { currentGame, winnersList } = playersState;

  switch (move.value) {
    case 1:
      return currentGame % 2 + 1;
    case 2:
      const currentGameWinner = winnersList?.[currentGame - 1];
      return currentGameWinner == Player.One ? Player.Two : Player.One;
    case 3:
      return winnersList.length ? winnersList[currentGame - 1] : Player.One;
    case 4:
      return Player.One;
    case 5:
      return Player.Two;
    default:
      return Player.One;
  }
};

const getScore = (winnersList, player) => {
  const currentWinnerCount = winnersList.filter((i) => i == player)?.length;
  return `0${currentWinnerCount}`;
};

export {
  checkWinningSlice,
  intitializeBoard,
  getGameState,
  findLowestEmptyIndex,
  togglePlayerTurn,
  checkForWinnerPlayerAndTournament,
  getScore,
  getPlayerTurn,
  GameState,
  Player,
};
