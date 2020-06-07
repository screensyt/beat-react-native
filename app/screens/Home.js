import React from 'react';
import styled from 'styled-components/native';

import AuthContext from '../AuthContext';

const Container = styled.View``;
const Text = styled.Text``;

const TouchableOpacity = styled.TouchableOpacity`
  background: #2ec4b6;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  height: 40px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-family: Lato-Medium;
  color: #fdfffc;
`;

function Home() {
  const {signOut} = React.useContext(AuthContext);

  return (
    <Container>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <ButtonText>LOGOUT</ButtonText>
      </TouchableOpacity>
    </Container>
  );
}

export default Home;
