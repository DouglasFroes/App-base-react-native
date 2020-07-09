import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Conteiner = styled.KeyboardAvoidingView.attrs({
  enables: Platform.OS === 'ios',
  behavion: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 10px;
`;

export const FormInput = styled(Input)`
  margin-top: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SingLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SingText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
