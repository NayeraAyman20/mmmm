import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './page/Homescreen';
import Signin from './page/Signin';
import Signup from './page/Signup';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home"
        component={Homescreen} />
      <Stack.Screen name="login"
        component={Signin} />
      <Stack.Screen name="signup"
        component={Signup} />
      </Stack.Navigator>
      </NavigationContainer>
      
      );
}