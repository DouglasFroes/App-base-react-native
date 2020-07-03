import React from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

const Home: React.FC = () => {
  const {signOut, signed} = useAuth();
  console.log(signed);
  function handleSignOut() {
    signOut();
  }
  return (
    <View>
      <Button title="sair" onPress={handleSignOut} />
    </View>
  );
};

export default Home;
