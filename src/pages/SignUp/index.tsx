import React, {useRef, useState} from 'react';
// import {Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
// import logo from '../../assets/logo.png';
import Background from '../../components/Background';
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
  navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
}

const SignUp: React.FC<RouteProps> = ({navigation}: RouteProps) => {
  const loading = false; //useSelector(state => state.auth.loading);

  const [name, sendName] = useState('');
  const [email, sendEmail] = useState('');
  const [password, sendPassword] = useState('');

  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const confPasswordlRef: any = useRef();

  function henderSubmit() {
    // dispatch(singnUpRequest(name, email, password));
  }

  return (
    <Background>
      <Conteiner>
        {/* <Image source={logo} /> */}
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu Nome"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={sendName}
          />
          <FormInput
            icon="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
            ref={emailRef}
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
            returnKeyType="next"
            onSubmitEditing={() => confPasswordlRef.current.focus()}
            value={password}
            onChangeText={sendPassword}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme sua senha"
            ref={confPasswordlRef}
            returnKeyType="send"
            onSubmitEditing={henderSubmit}
          />
          <SubmitButton loading={loading} onPress={henderSubmit}>
            Criar Conta
          </SubmitButton>
        </Form>
        <SingLink onPress={() => navigation.navigate('SignIn')}>
          <SingText>Ja possui uma conta</SingText>
        </SingLink>
      </Conteiner>
    </Background>
  );
};

export default SignUp;
