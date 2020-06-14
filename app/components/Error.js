import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View``;
const Text = styled.Text``;

function Error({name, message, statusCode}) {
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
}

export default Error;
