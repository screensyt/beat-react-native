import React, {useState} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

import AuthContext from '../AuthContext';
import Input from '../components/Input';

const Container = styled.View`
  flex: 1;
  background: #fdfffc;
  justify-content: center;
`;

const Title = styled.Text`
  font-family: Lato-Bold;
  font-size: 36px;
  padding: 4px 16px;
  color: #011627;
`;

const Content = styled.View`
  flex: 1;
  padding: 20% 16px 0 16px;
`;

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

const LinkText = styled.Text`
  font-size: 16px;
  font-family: Lato-Medium;
  color: #2ec4b6;
  text-align: center;
  padding: 8px 0;
`;

const Label = styled.Text`
  font-size: 16px;
  font-family: Lato-Medium;
  margin: 8px 0 4px 0px;
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
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          autoCompleteType="email"
        />
        <Label>Password</Label>
        <Input
          secureTextEntry={true}
          placeholder="password"
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <TouchableOpacity onPress={() => signIn(email, password)}>
          <ButtonText>LOGIN</ButtonText>
        </TouchableOpacity>
        <LinkText onPress={() => navigation.navigate('Register')}>
          Register
        </LinkText>
      </Content>
    </Container>
  );
}

export default Login;
