import { StyleSheet } from "react-native";

export default StyleSheet.create({
  taskContainer: {
    flex: 1
  },
  task: {
    backgroundColor: "#676FA3",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 11,
  },
  taskText: {
    color: "#D1E0D7",
    fontSize: 18,
  },
  taskCompleted: {
    backgroundColor: '#424874',
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#D1E0D7',
    fontSize: 18,
  },
  todo_container: {
    backgroundColor: "#676FA3",
    borderRadius: 10,
    margin: 10
  },
  text_input: {
    height: 50,
    padding: 10,
    borderBottomWidth: 1,
    color: "#D1E0D7"
  },
  button: {
    padding: 15,
    margin: 15,
    backgroundColor: "#D23369",
    borderRadius: 7
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  }
})
