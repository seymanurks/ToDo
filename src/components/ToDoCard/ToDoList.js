import React from 'react';
import { ScrollView } from 'react-native';
import ToDoCard from './ToDoCard';

const ToDoList = ({ taskItems, handleCompleteTask }) => {
  return (
    <ScrollView>
      {taskItems.map((item, index) => (
        <ToDoCard
          key={index}
          item={item}
          index={index}
          handleCompleteTask={handleCompleteTask}
        />
      ))}
    </ScrollView>
  );
};

export default ToDoList;
