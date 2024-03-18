import React, {useState} from 'react';
import { SafeAreaView, ScrollView, Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoCard/ToDoList';
import ToDoInput from './components/ToDoCard/ToDoInput';

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
      
      <ToDoList taskItems={taskItems} handleCompleteTask={handleCompleteTask}/>

      <View style = {styles.bottom_container}>
        <ToDoInput task={task} setTask={setTask} handleAddTask={handleAddTask} />
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
  }
})