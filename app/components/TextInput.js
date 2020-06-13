import React from 'react';
import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput`
  border: 2px #011627;
  border-radius: 8px;
  font-size: 20px;
  height: 48px;
`;

function TextInput(props) {
  return <StyledTextInput {...props} />;
}

export default TextInput;
