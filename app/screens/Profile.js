import React from 'react';
import styled from 'styled-components/native';

import AuthContext from '../AuthContext';

const Container = styled.View``;
const Text = styled.Text``;

function Profile() {
  const {userToken} = React.useContext(AuthContext);

  return (
    <Container>
      <Text>{userToken}</Text>
    </Container>
  );
}

export default Profile;
