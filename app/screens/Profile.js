import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import AuthContext from '../AuthContext';

const Container = styled.View``;
const Text = styled.Text``;

function Profile() {
  const [user, setUser] = useState(null);
  const {userToken} = useContext(AuthContext);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch('http://10.0.2.2:3000/me', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token: userToken,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadProfile();
  }, [userToken]);

  if (!user) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Text>{user?.email}</Text>
    </Container>
  );
}

export default Profile;
