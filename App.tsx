import React, {useState} from 'react';
import { SafeAreaView, ScrollView, Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count+1)
  }

  function decreaseCount() {
    if (count > 0) {
    setCount(count-1) }
  }

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, { text: task, completed: false }]);
    setTask('');
    increaseCount();
  }

  const handleCompleteTask = index => {
    const newTaskItems = [...taskItems];
    newTaskItems[index].completed = !newTaskItems[index].completed;

    if (newTaskItems[index].completed) {
      decreaseCount();
    } else {
      increaseCount();
    }

    setTaskItems(newTaskItems);
  }


  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.top_container}>
        <Text style= {styles.title}>To Do</Text>
        <Text style= {styles.title}>{count}</Text>
      </View>
      
      <ScrollView style={styles.taskContainer}>
      {taskItems.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleCompleteTask(index)}
            style={[
              styles.task,
              item.completed ? styles.taskCompleted : null
            ]}>
            <Text
              style={
                item.completed ? styles.taskTextCompleted : styles.taskText
              }>
              {item.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>

      <View style = {styles.bottom_container}>
        <View style = {styles.todo_container}>
          <TextInput 
          style = {styles.text_input}
          placeholder='Add the task to be done...'
          placeholderTextColor={"#C0C0C0"}
          value={task}
          onChangeText={text => setTask(text)}>
          </TextInput>

              <TouchableOpacity onPress={() => handleAddTask()} style = {styles.button}>
              <Text style = {styles.buttonText}>Save</Text>
              </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3458"
  },
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
    backgroundColor: '#424874'
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#D1E0D7',
    fontSize: 18,
  },
  top_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  title: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#D23369"
  },
  bottom_container: {
    justifyContent: "flex-end",
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
  },
})