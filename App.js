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
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> 
        <Stack.Screen name="ShortStory" component={ShortStory} options={{ headerShown: false }} /> 
        <Stack.Screen name="AnimalStory" component={AnimalStory} options={{ headerShown: false }} /> 
        <Stack.Screen name="MoralStory" component={MoralStory} options={{ headerShown: false }} /> 
        <Stack.Screen name="LifeStory" component={LifeStory} options={{ headerShown: false }} /> 
        <Stack.Screen name="FunnyStory" component={FunnyStory} options={{ headerShown: false }} /> 
        <Stack.Screen name="LoveStory" component={LoveStory} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

