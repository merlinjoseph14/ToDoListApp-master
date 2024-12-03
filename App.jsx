import React from 'react';
import { SafeAreaView, StyleSheet, Pressable, View, Text, ScrollView, TextInput, Button } from 'react-native';
import { useState } from 'react'; 
import globalStyles from './styles';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer style={globalStyles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}} >To Do List</Text>
      <ScrollView>
        <ToDoList tasks={tasks} deleteTask={deleteTask}/>
        <ToDoForm addTask={addTask}/>
      </ScrollView>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      {/**********************/}
    </NavigationContainer>
  );
    
}
export default App;