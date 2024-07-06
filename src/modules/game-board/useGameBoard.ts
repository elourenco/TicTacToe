import { useCallback, useEffect, useMemo, useState } from "react";
import type { IBoard, IWinner, PlayerType } from "../../types/board";
import { INITIAL_BOARD, WINNER_POSITIONS } from "../../constants/game-board";
import { isWinner } from "../../utils/board";

export const useGameBoard = () => {
  const [player, setPlayer] = useState<PlayerType>("X");
  const [board, setBoard] = useState<IBoard[]>(INITIAL_BOARD);

  const winner = useMemo((): IWinner | null => {
    const playsMadePlayerX = board
      .filter((square) => square.player === "X")
      .map((square) => square.position);

    const playsMadePlayerO = board
      .filter((square) => square.player === "O")
      .map((square) => square.position);

    const winningPositionsX = isWinner(playsMadePlayerX, WINNER_POSITIONS);
    const winningPositionsO = isWinner(playsMadePlayerO, WINNER_POSITIONS);

    if (winningPositionsX) {
      return {
        winner: "X",
        positions: winningPositionsX,
      };
    }

    if (winningPositionsO) {
      return {
        winner: "O",
        positions: winningPositionsO,
      };
    }

    return null;
  }, [board]);

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
  }, []);

  const keyExtractor = (item: IBoard) => item.position.toString();

  return {
    player,
    winner,
    board,
    handleOnPress,
    handleResetOnPress,
    keyExtractor,
  };
};
