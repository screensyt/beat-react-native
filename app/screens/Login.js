import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View``;
const Text = styled.Text``;
const Button = styled.Button``;

function Login({navigation}) {
  return (
    <Container>
      <Text>Login</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </Container>
  );
}

export default Login;
