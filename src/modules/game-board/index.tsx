import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import styles from "./styles";
import Square from "../../components/square";
import { useGameBoard } from "./useGameBoard";
import ButtonReset from "../../components/button-reset";
import HeaderTitle from "../../components/header-title";
import type { IBoard } from "../../types/board";

export default function GameBoard() {
  const {
    keyExtractor,
    winner,
    player,
    board,
    handleOnPress,
    handleResetOnPress,
  } = useGameBoard();

  const SquareItem = ({ item }: { item: IBoard }) => (
    <Square
      position={item.position}
      player={item.player}
      used={item.used}
      winner={Boolean(winner?.positions.includes(item.position))}
      onPress={handleOnPress}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={board}
        renderItem={SquareItem}
        numColumns={3}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.board}
        ListHeaderComponent={
          <HeaderTitle player={player} winner={winner?.winner} />
        }
        ListFooterComponent={<ButtonReset onPress={handleResetOnPress} />}
      />
    </SafeAreaView>
  );
}
