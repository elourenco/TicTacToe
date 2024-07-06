import React, { memo } from "react";
import { Text } from "react-native";
import styles from "./styles";
import type { PlayerType } from "../../types/board";

interface IHeaderTitleProps {
  player: PlayerType;
  winner?: PlayerType | null;
}

function HeaderTitle({ player, winner }: IHeaderTitleProps) {
  return (
    <Text style={styles.title}>
      <Text
        style={
          !winner
            ? player === "X"
              ? styles.playerX
              : styles.playerO
            : styles.winner
        }
      >
        {winner ? `Winner: ${winner}` : `Next Player: ${player}`}
      </Text>
    </Text>
  );
}

export default memo(HeaderTitle);
