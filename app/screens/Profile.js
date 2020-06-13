import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import AuthContext from '../AuthContext';

const Container = styled.View``;
const Text = styled.Text``;

function Profile() {
  const {userToken} = React.useContext(AuthContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('http://10.0.2.2:3000/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token: userToken,
      },
    })
      .then(response => response.json())
      .then(jsonResponse => {
        setUser(jsonResponse);
      });
  }, [userToken]);

  return (
    <Container>
      <Text>{user?.username}</Text>
      <Text>{user?.email}</Text>
    </Container>
  );
}

export default Profile;
