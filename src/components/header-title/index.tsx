import React, { memo } from 'react';
import { Text } from 'react-native';
import styles from './styles';
import type { PlayerType } from '../../types/board';

interface IHeaderTitleProps {
  player: PlayerType;
  winner?: PlayerType | null;
}

function HeaderTitle({ player, winner }: IHeaderTitleProps) {
  return (
    <Text style={styles.title}>
      {winner ? (
        <Text style={player === 'X' ? styles.playerX : styles.playerO}>{`Winner: ${winner}`}</Text>
      ) : (
        <Text style={player === 'X' ? styles.playerX : styles.playerO}>{`Next player: ${player}`}</Text>
      )}
    </Text>
  );
}

export default memo(HeaderTitle);