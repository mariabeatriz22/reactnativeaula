import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskList = ({ tasks, removeTask, toggleTaskCompletion }) => {
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <TouchableOpacity
          key={index}
          style={styles.taskItem}
          onPress={() => toggleTaskCompletion(index)}
          onLongPress={() => removeTask(index)}
        >
          <Text style={task.completed ? styles.completedText : styles.text}>
            {task.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    
  },
  taskItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    
  },
  text: {
    fontSize: 20,
    backgroundColor:'#87CEFA'
    
  },
  completedText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    
  },
});

export default TaskList;