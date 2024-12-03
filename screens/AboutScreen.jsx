import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';


function AboutScreen({ navigation }) {
  const currentDate =  new Date().toLocaleDateString();
    
    return (
        <MainLayout>
        <View style={styles.container}>
            <Text style={styles.title}>About page for my app</Text>
            <Text style={styles.content}>Name: Incredible To Do List App</Text>
            <TouchableOpacity onPress={handleNamePress}>
              <Text style={[styles.content, easterEggActivated && styles.easterEgg]}>Developer: Matthew Slepko</Text>
            </TouchableOpacity>
            <Text style={styles.content}>Date: {currentDate}</Text>
            <Button 
                title= "Go to home screen" 
                onPress={() => navigation.navigate('Home')} />
        </View>
        </MainLayout>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    content: {
      fontSize: 20,
      marginBottom: 8,
    },
  });

export default AboutScreen;