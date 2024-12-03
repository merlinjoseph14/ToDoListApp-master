import React from 'react';
import { SafeAreaView, Text, Button, ScrollView, View} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import globalStyles from '../styles';
import MainLayout from '../layouts/MainLayout';



function HomeScreen({ navigation }) {
    const [tasks, setTasks] = React.useState([
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

    return (
        <MainLayout>
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 16 }}>To Do List App</Text>
            <ScrollView contentContainerStyle={{ flex: 1, padding: 16 }}>
                <ToDoList tasks={tasks} deleteTask={deleteTask} />
                <ToDoForm addTask={addTask} />
                <Button
                    title="Go to About screen"
                    onPress={() => navigation.navigate('About')}
                />
            </ScrollView>
        </View>
        </MainLayout>
    );
} export default HomeScreen;