import { StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  containerWinner: {
    backgroundColor: "yellow",
  },
  playerX: {
    fontSize: 40,
    color: 'blue',
    fontWeight: 'bold',
  },
  playerO: {
    fontSize: 40,
    color: 'green',
    fontWeight: 'bold',
  },
});