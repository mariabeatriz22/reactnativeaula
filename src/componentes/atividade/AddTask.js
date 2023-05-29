import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTitleChange = (value) => {
    setTitle(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleAddTask = () => {
    if (title) {
      const newTask = { id: Date.now(), title: title, description: description, completed: false };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
    }
  };

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Título da Tarefa:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o título"
            value={title}
            onChangeText={handleTitleChange}
          />
        </View>
        <View style={styles.inputRow}>
          
          <TextInput
           
          />
        </View>
        <Button title="Adicionar" onPress={handleAddTask} />
      </View>

      {/* Lista de Tarefas */}
      <View style={styles.taskList}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskItem}>
            <TouchableOpacity onPress={() => handleToggleTask(task.id)}>
              <Icon
                name={task.completed ? 'check-box' : 'check-box-outline-blank'}
                size={24}
                color={task.completed ? 'green' : 'gray'}
              />
            </TouchableOpacity>
            <Text style={[styles.taskTitle, task.completed && styles.completedTaskTitle]}>{task.title}</Text>
            <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
              <Icon name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputLabel: {
    marginRight: 8,
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
  },
  taskList: {
    marginTop: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  completedTaskTitle: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default AddTask;
