import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = ({ task, removeTask, toggleTaskCompletion }) => {
  return (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={toggleTaskCompletion}
      onLongPress={removeTask}
    >
      <Text style={task.completed ? styles.completedText : styles.text}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  text: {
    fontSize: 16,
  },
  completedText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
});

export default TaskItem;