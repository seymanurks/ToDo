import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './ToDoCard.styles'

const ToDoInput = ({ task, setTask, handleAddTask }) => {
  return (
    <View style={styles.todo_container}>
      <TextInput
        style={styles.text_input}
        placeholder='Add the task to be done...'
        placeholderTextColor={"#C0C0C0"}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity onPress={handleAddTask} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoInput;
