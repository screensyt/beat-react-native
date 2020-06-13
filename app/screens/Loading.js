import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 20px;
`;

function Loading() {
  return (
    <Container>
      <Text>Loading...</Text>
    </Container>
  );
}

export default Loading;
