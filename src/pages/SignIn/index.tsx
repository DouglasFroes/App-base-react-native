import React, {useRef, useState} from 'react';
// import {Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

// import logo from '../../assets/logo.png';
import Background from '../../components/Background';
import {useAuth} from '../../contexts/auth';
import {RootStackParamList} from '../../routes/type.routes';

import {
  Conteiner,
  Form,
  FormInput,
  SubmitButton,
  SingLink,
  SingText,
} from './styles';

interface RouteProps {
  navigation: StackNavigationProp<RootStackParamList, 'SignIn'>;
}

const SignIn: React.FC<RouteProps> = ({navigation}: RouteProps) => {
  const {signIn} = useAuth();

  const loading = false; //useSelector((state) => state.auth.loading);

  const passwordRef: any = useRef();

  const [email, sendEmail] = useState('');
  const [password, sendPassword] = useState('');

  function handleSubmit() {
    signIn(email, password);
  }

  return (
    <Background>
      <Conteiner>
        {/* <Image source={logo} /> */}
        <Form>
          <FormInput
            icon="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={sendEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={sendPassword}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar
          </SubmitButton>
        </Form>
        <SingLink onPress={() => navigation.navigate('SignUp')}>
          <SingText>Criar Conta</SingText>
        </SingLink>
      </Conteiner>
    </Background>
  );
};

export default SignIn;
