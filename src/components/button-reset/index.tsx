import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface IButtonResetProps {
  onPress: () => void;
}

export default function ButtonReset({ onPress }:IButtonResetProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Reset</Text>
    </TouchableOpacity>
  );
}