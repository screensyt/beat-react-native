import React from 'react';
import styled from 'styled-components/native';

import AuthContext from '../AuthContext';
import {getProfile} from '../api';
import FetchData from '../FetchData';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Name = styled.Text`
  font-family: 'SourceCodePro-Regular';
  font-size: 20px;
  margin-top: 16px;
`;

const Email = styled.Text`
  font-family: 'SourceCodePro-Regular';
  font-size: 16px;
  margin-bottom: 32px;
`;

const TochableOpacity = styled.TouchableOpacity`
  background: ${props => props.theme.colors.primaryDark};
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  height: 40px;
  border-radius: 3px;
  padding: 8px 32px;
`;

const Avatar = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 100px;
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
            <Avatar
              source={{
                uri: data.avatar,
              }}
            />
            <Name>{data.username}</Name>
            <Email>{data.email}</Email>
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
