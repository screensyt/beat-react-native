import React, {useState} from 'react';
import styled from 'styled-components/native';

import TextInput from '../components/TextInput';
import AuthContext from '../AuthContext';
import Logo from '../../assets/svg/logo.svg';

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
  padding: 0 16px;
`;

const TochableOpacity = styled.TouchableOpacity`
  background: #66e0f7;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  height: 48px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: #011627;
  font-weight: 500;
`;

const Label = styled.Text`
  font-size: 20px;
  margin: 8px 0 4px 0;
`;

const LogoContainer = styled.View`
  align-items: center;
  margin: 36px 0;
`;

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = React.useContext(AuthContext);

  return (
    <Container>
      <Title>Login</Title>
      <Content>
        <LogoContainer>
          <Logo height={120} width={120} fill="#011627" />
        </LogoContainer>
        <Label>Email</Label>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <Label>Password</Label>
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => {
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
