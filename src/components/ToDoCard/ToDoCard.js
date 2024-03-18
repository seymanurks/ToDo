// ToDoCard.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({ item, index, handleCompleteTask }) => {
  return (
    <TouchableOpacity
      key={index}
      onPress={() => handleCompleteTask(index)}
      style={[
        styles.task,
        item.completed ? styles.taskCompleted : null,
      ]}>
      <Text
        style={
          item.completed ? styles.taskTextCompleted : styles.taskText
        }>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ToDoCard;
