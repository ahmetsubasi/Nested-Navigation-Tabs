import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Member from './src/member/Member';
import MemberDetail from './src/member/MemberDetail';
import MemberUpdate from './src/member/MemberUpdate';


import Profile from './src/profile/Profile';
import ProfileEdit from './src/profile/ProfileEdit';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MemberStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="MemberScreen" component={Member} />
      <Stack.Screen options={{headerShown:false}} name="MemberDetailScreen" component={MemberDetail} />
      <Stack.Screen options={{headerShown:false}} name="MemberUpdateScreen" component={MemberUpdate} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return(
    <Stack.Navigator>
    <Stack.Screen options={{headerShown:false}} name="ProfileScreen" component={Profile} />
    <Stack.Screen options={{headerShown:false}} name="ProfileEditScreen" component={ProfileEdit} />
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Member">
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Member" component={MemberStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


