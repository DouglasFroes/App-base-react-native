import React from 'react';
import styled from 'styled-components/native';
import {TextInputProps} from 'react-native';

export const Conteiner = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TInput: React.ElementType<TextInputProps> = styled.TextInput.attrs(
  {
    placeholderTextColor: 'rgba(255,255,255, 0.8)',
  },
)`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;
