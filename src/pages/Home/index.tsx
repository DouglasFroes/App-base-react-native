import React from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

// import {Text} from './styleds';
import Input from '../../components/Input';
import Buttonw from '../../components/Button';
import Background from '../../components/Background';

const Home: React.FC = () => {
  const {signOut, signed} = useAuth();
  console.log(signed);
  function handleSignOut() {
    signOut();
  }

  return (
    <Background>
      <View>
        <Button title="sair" onPress={handleSignOut} />
        {/* <Text>ola</Text> */}
        <Input icon="home" />
        <Buttonw loading={false} onPress={() => {}}>
          Entrar
        </Buttonw>
      </View>
    </Background>
  );
};

export default Home;
