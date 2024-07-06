export const isWinner = (
  plays: number[],
  winnerPositions: number[][],
): number[] | null => {
  const winningCombination = winnerPositions.find((positions) =>
    positions.every((position) => plays.includes(position)),
  );
  return winningCombination || null;
};
