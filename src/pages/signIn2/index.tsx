import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';
import Orientation from '@lightbase/react-native-orientation';

const SignIn: React.FC = () => {
  const {signed, signIn} = useAuth();

  console.log(signed);
  function handleSignIn() {
    signIn();
  }

  useEffect(() => {
    Orientation.lockToPortrait();
  });

  const Oii = () => {
    const initial = Orientation.getInitialOrientation();
    if (initial === Orientation.PORTRAIT) {
      // do something
      return <Button title="ola" onPress={handleSignIn} />;
    } else {
      // do something else
      return <Button title="ola1" onPress={handleSignIn} />;
    }
  };

  return (
    <View>
      <Oii />
    </View>
  );
};

export default SignIn;
