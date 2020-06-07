import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
  border: 1px #011627;
  border-radius: 3px;
  font-size: 16px;
  height: 40px;
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
