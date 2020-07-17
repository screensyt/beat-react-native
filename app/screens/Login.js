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
  font-size: 54px;
  color: #011627;
  padding: 54px 16px 0 16px;
  text-align: center;
  font-family: 'SourceCodePro-BoldItalic';
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: #011627;
  padding: 0px 16px 54px 16px;
  text-align: center;
  font-family: 'SourceCodePro-Regular';
`;

const Content = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const TochableOpacity = styled.TouchableOpacity`
  background: #e71d36;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  height: 48px;
  border-radius: 24px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: #fdfffc;
  font-family: 'SourceCodePro-Regular';
`;

const Label = styled.Text`
  font-size: 16px;
  margin: 8px 0 4px 0;
  font-family: 'SourceCodePro-Regular';
`;

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = React.useContext(AuthContext);

  return (
    <Container>
      <Title>foodgram</Title>
      <SubTitle>a perfect place to share recipes</SubTitle>
      <Content>
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
