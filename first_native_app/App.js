import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListAll from './components/ListAll'
import AnimatedStuff from './components/AnimatedStuff'
import { TouchableOpacity } from 'react-native-gesture-handler';
function HomeScreen({navigation}) {
  return (
    <View style={{  width: '100%', justifyContent: 'center', alignItems:'center' }}>

      <TouchableOpacity 
      style = {{backgroundColor: 'royalblue', width: 200, borderRadius: 9999, marginTop: 10 }}
      onPress={() => navigation.navigate('List')}>
        <Text style = {{fontSize: 20, padding: 5, textAlign: 'center'}}>
          ToDoList
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style = {{backgroundColor: 'royalblue', width: 200, borderRadius: 9999, marginTop: 10}}
      onPress={() => navigation.navigate('Animation')}>
        <Text style = {{fontSize: 20, padding: 5, textAlign: 'center'}}>
          Animated things
        </Text>
      </TouchableOpacity>
  </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="List" component={ListAll}  />
        <Stack.Screen name="Animation" component={AnimatedStuff}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
