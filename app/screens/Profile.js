import React from 'react';
import styled from 'styled-components/native';

import AuthContext from '../AuthContext';
import {getProfile} from '../api';
import FetchData from '../FetchData';

const Container = styled.View``;
const Text = styled.Text``;

const TochableOpacity = styled.TouchableOpacity`
  background: ${props => props.theme.colors.primaryDark};
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

function Profile() {
  const {userToken, signOut} = React.useContext(AuthContext);

  return (
    <Container>
      <FetchData action={getProfile(userToken)}>
        {data => (
          <>
            <Text>{data.username}</Text>
            <Text>{data.email}</Text>
          </>
        )}
      </FetchData>
      <TochableOpacity onPress={() => signOut()}>
        <ButtonText>Logout</ButtonText>
      </TochableOpacity>
    </Container>
  );
}

export default Profile;
