import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import Screen4 from './src/screens/Screen4';
import Screen5 from './src/screens/Screen5';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} 
          options={{
            title: 'HackWithNativeBase',
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
          headerTitleAlign:'center'
          }}
        
        />
        <Stack.Screen name="Screen1" component={Screen1} 
          options={{
            title: 'Settings',
            headerStyle: {
              backgroundColor: '#4C1D95',
            },
            headerTintColor: '#F9FAFB',
            headerTitleStyle:{
              fontWeight:'400',
              fontSize:18
            },            
          }}
        
        
        />
        <Stack.Screen name="Screen2" component={Screen2} 
        options={{
          title: 'Body Suit',
          headerStyle: {
            backgroundColor: '#4C1D95',
          },
          headerTintColor: '#F9FAFB',
          headerTitleStyle:{
            fontWeight:'400',
            fontSize:18
          },            
        }}
        
        />
        <Stack.Screen name="Screen3" component={Screen3} 
          options={{
            title: 'Track Order',
            headerStyle: {
              backgroundColor: '#4C1D95',
            },
            headerTintColor: '#F9FAFB',
            headerTitleStyle:{
              fontWeight:'400',
              fontSize:18
            },            
          }}
        
        />
        <Stack.Screen name="Screen4" component={Screen4} 
          options={{
            title: 'Mutual Fund Portfolio',
            headerStyle: {
              backgroundColor: '#4C1D95',
            },
            headerTintColor: '#F9FAFB',
            headerTitleStyle:{
              fontWeight:'400',
              fontSize:18
            },
                      
          }}
        />
        <Stack.Screen name="Screen5" component={Screen5} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})