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

