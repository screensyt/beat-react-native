import React, {useState} from 'react';
import styled from 'styled-components/native';

import TextInput from '../components/TextInput';
import AuthContext from '../AuthContext';

const Container = styled.View`
  flex: 1;
  background: #fdfffc;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 36px;
  color: #011627;
  padding: 4px 16px;
`;
const Content = styled.View`
  flex: 1;
  padding: 20% 16px 0 16px;
`;

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

const Label = styled.Text`
  font-size: 16px;
  margin: 8px 0 4px 0;
`;

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = React.useContext(AuthContext);

  return (
    <Container>
      <Title>Login</Title>
      <Content>
        <Label>Email</Label>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Label>Password</Label>
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TochableOpacity onPress={() => signIn(email, password)}>
          <ButtonText>LOGIN</ButtonText>
        </TochableOpacity>
      </Content>
    </Container>
  );
}

export default Login;
