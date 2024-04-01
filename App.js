// import React from "react";
// import { View } from "react-native";
// import Home from "./Home"; 
// import {ShortStory}  from "./ShortStory"; 

// const App = () => {
//     return (
//         <View>
//             <ShortStory />
//         </View>
//     );
// };

// export default App;

//     App.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ShortStory } from './ShortStory';
import Home from './Home'; // Import Home component from correct path

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> 
        <Stack.Screen name="ShortStory" component={ShortStory} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


    // Login.js
// import React from 'react';
// import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

// export const Login = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.buttonStyle}>
//         <Text style={styles.textStyle}>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonStyle: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   textStyle: {
//     color: 'white',
//     fontSize: 20,
//   },
// });


    // Register.js
// import React from 'react';
// import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

// export const Register = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonStyle}>
//         <Text style={styles.textStyle}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: "row",
//   },
//   buttonStyle: {
//     backgroundColor: 'blue',
//     padding: 10,
//     marginRight: 10,
//     borderRadius: 5,
//   },
//   textStyle: {
//     color: 'white',
//     fontSize: 20,
//   },
// });



