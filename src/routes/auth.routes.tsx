import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import SignIn from '../pages/signIn2';
import SignIn2 from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import {RootStackParamList} from './type.routes';

const AuthStack = createStackNavigator<RootStackParamList>();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn2} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
