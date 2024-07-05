import { useCallback, useEffect, useState } from "react";
import type { IBoard, IWinner } from "../../types/board";

const INITIAL_BOARD: IBoard[] = [
  { position: 0, player: null, used: false, winner: false },
  { position: 1, player: null, used: false, winner: false },
  { position: 2, player: null, used: false, winner: false },
  { position: 3, player: null, used: false, winner: false },
  { position: 4, player: null, used: false, winner: false },
  { position: 5, player: null, used: false, winner: false },
  { position: 6, player: null, used: false, winner: false },
  { position: 7, player: null, used: false, winner: false },
  { position: 8, player: null, used: false, winner: false },
];

const WINNER_POSITIONS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const isWinner = (plays: number[]): number[] | null => {
  const winningCombination = WINNER_POSITIONS.find((positions) =>
    positions.every((position) => plays.includes(position)),
  );
  return winningCombination || null;
};

export const useGameBoard = () => {
  const [player, setPlayer] = useState<PlayerType>("X");
  const [board, setBoard] = useState<IBoard[]>(INITIAL_BOARD);
  const [winner, setWinner] = useState<IWinner | null>(null);

  const winnerCheck = useCallback(() => {
    if (winner) return;
    const playsMadePlayerX = board
      .filter((square) => square.player === "X")
      .map((square) => square.position);

    const playsMadePlayerO = board
      .filter((square) => square.player === "O")
      .map((square) => square.position);

    const winningPositionsX = isWinner(playsMadePlayerX);
    const winningPositionsO = isWinner(playsMadePlayerO);

    if (winningPositionsX) {
      setWinner({ winner: "X", positions: winningPositionsX, board });
    } else if (winningPositionsO) {
      setWinner({ winner: "O", positions: winningPositionsO, board });
    }
  }, [winner, board]);

  const winnerBoard = useCallback(() => {
    if (!winner) return;
    const newBoard = winner.board.map((square) => ({
      ...square,
      winner: winner.positions.includes(square.position),
    }));
    setBoard(newBoard);
  }, [winner]);

  useEffect(() => {
    winnerCheck();
  }, [winnerCheck]);

  useEffect(() => {
    winnerBoard();
  }, [winnerBoard]);

  const handleOnPress = useCallback(
    (position: number) => {
      const playPosition = board.find((square) => square.position === position);

      if (playPosition?.used || winner) return;

      const newBoard = board.map((square) => {
        return playPosition?.position === square.position
          ? { ...square, player, used: true }
          : square;
      });

      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
    },
    [board, winner, player],
  );

  const handleResetOnPress = useCallback(() => {
    setBoard(INITIAL_BOARD);
    setPlayer("X");
    setWinner(null);
  }, []);

  return {
    player,
    winner,
    board,
    handleOnPress,
    handleResetOnPress,
  };
};
