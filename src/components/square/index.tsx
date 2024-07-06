import React, { useCallback, memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import type { IBoard } from "../../types/board";

interface ISquareProps extends IBoard {
  onPress: (position: number) => void;
}

function Square({ position, player, used, winner, onPress }: ISquareProps) {
  const handleOnPress = useCallback(() => {
    onPress(position);
  }, [onPress, position]);

  return (
    <TouchableOpacity
      activeOpacity={winner || used ? 1 : 0.2}
      style={[styles.container, winner && { ...styles.containerWinner }]}
      onPress={winner || used ? undefined : handleOnPress}
    >
      <Text style={player === "X" ? styles.playerX : styles.playerO}>
        {player}
      </Text>
    </TouchableOpacity>
  );
}

export default Square;
