import type { IBoard } from "../../types/board";

export const INITIAL_BOARD: IBoard[] = [
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

export const WINNER_POSITIONS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
