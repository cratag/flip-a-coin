import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./screens/home"
import heads from "./screens/heads"
import tails from "./screens/tails"

import * as Font from "expo-font";
import {AppLoading} from "expo";

const Stack = createStackNavigator();
const loadFonts = () => {
  return Font.loadAsync({
    "porky": require("./assets/fonts/porky.ttf")
  })
}

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
if (!fontLoaded){
  return (
    <AppLoading 
    startAsync={loadFonts}
    onFinish={() => setFontLoaded(true)}
    onError={(err) => console.error(err)}
    />
  )
}
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{headerShown: false}} />
        <Stack.Screen 
        name="tails" 
        component={tails}
        options={{headerShown: false}} />
        <Stack.Screen 
        name="heads" 
        component={heads}
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;