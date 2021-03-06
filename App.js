import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LocalData from './components/LocalData';
import HomeScreen from './components/HomeScreen';
import FindDoctorsScreen from './components/FindDoctorsScreen';
import DoctorInfoScreen from './components/DoctorInfoScreen';
import HealthScreen from './components/HealthScreen';
import MyInformationScreen from './components/MyInformationScreen';
import ResourcesScreen from './components/ResourcesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: '#011B18',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#C89720',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FindDoctors" component={FindDoctorsScreen} options={{title: 'Find Trusted Doctors'}} />
        <Stack.Screen name="DoctorInfo" component={DoctorInfoScreen} />
        <Stack.Screen name="Health" component={HealthScreen} options={{title: 'What to expect from your visit'}} />
        <Stack.Screen name="MyInformation" component={MyInformationScreen} options={{title: 'My Information'}} />
        <Stack.Screen name="Resources" component={ResourcesScreen} options={{title: 'Resources'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
