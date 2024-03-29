import React from "react";
import { View } from "react-native";
import Home from "./Home"; 

const App = () => {
    return (
        <View>
            <Home />
        </View>
    );
};

export default App;

    //App.js
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { Login } from './Login';
// import { Register } from './Register';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Register"> 
//        <Stack.Screen name="Login" component={Login} /> 
//         <Stack.Screen name="Register" component={Register} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


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


