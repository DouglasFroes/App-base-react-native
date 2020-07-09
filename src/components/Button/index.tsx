import React from 'react';
import {ActivityIndicator} from 'react-native';

// import PropTypes from 'prop-types';

import {Conteiner, Text} from './styles';

interface ButtonPropsType {
  children: String;
  loading: boolean;
  onPress(): void;
}

const Button: React.ElementType<ButtonPropsType> = ({
  children,
  loading,
  ...rest
}: ButtonPropsType) => {
  // console.log(rest);
  return (
    <Conteiner {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Conteiner>
  );
};

export default Button;

// Button.propType = {
//   children: PropTypes.string.isRequired,
//   loading: PropTypes.bool,
// };

// Button.defaltProp = {
//   loading: false,
// };
