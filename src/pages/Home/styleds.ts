import styled from 'styled-components/native';
import {TextProps} from 'react-native';

interface TextData extends TextProps {
  isDisabled: boolean;
}
export const Text = styled.Text<TextData>`
  color: #000f99;
  margin: 30px;
  font-size: 50px;
`;
