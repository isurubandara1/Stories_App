//     App.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ShortStory } from './ShortStory';
import Home from './Home'; 
import { AnimalStory }from './AnimalStory'; 
import { MoralStory }from './MoralStory'; 
import { LifeStory }from './LifeStory'; 
import { FunnyStory }from './FunnyStory'; 
import { LoveStory }from './LoveStory'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} /> 
        <Stack.Screen name="ShortStory" component={ShortStory} options={{ headerShown: true }} /> 
        <Stack.Screen name="AnimalStory" component={AnimalStory} options={{ headerShown: true }} /> 
        <Stack.Screen name="MoralStory" component={MoralStory} options={{ headerShown: true }} /> 
        <Stack.Screen name="LifeStory" component={LifeStory} options={{ headerShown: true }} /> 
        <Stack.Screen name="FunnyStory" component={FunnyStory} options={{ headerShown: true }} /> 
        <Stack.Screen name="LoveStory" component={LoveStory} options={{ headerShown: true }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

