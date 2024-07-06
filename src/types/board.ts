export type PlayerType = "X" | "O";
export interface IBoard {
  position: number;
  player: PlayerType | null;
  used: boolean;
  winner: boolean;
}
export interface IWinner {
  winner: PlayerType | null;
  positions: number[];
}
