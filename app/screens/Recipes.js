import React from 'react';
import styled from 'styled-components/native';

import AuthContext from '../AuthContext';

const Container = styled.View``;
const Text = styled.Text``;

const TochableOpacity = styled.TouchableOpacity`
  background: #2ec4b6;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  height: 40px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #fdfffc;
`;

function Recipes() {
  const {signOut} = React.useContext(AuthContext);

  return (
    <Container>
      <Text>Recipes List</Text>
      <TochableOpacity onPress={() => signOut()}>
        <ButtonText>Logout</ButtonText>
      </TochableOpacity>
    </Container>
  );
}

export default Recipes;
