import React from 'react';
import styled from 'styled-components/native';

const StyledTextInput = styled.TextInput`
  border: 1px #011627;
  border-radius: 3px;
  font-size: 16px;
  height: 40px;
`;

function TextInput(props) {
  return <StyledTextInput {...props} />;
}

export default TextInput;
