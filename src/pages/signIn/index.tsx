import React from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const {signed, signIn} = useAuth();

  console.log(signed);
  function handleSignIn() {
    signIn();
  }
  return (
    <View>
      <Button title="ola" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
