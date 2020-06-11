import React from "react";
import { StatusBar } from 'react-native';
import { AuthContext } from '../context';

import { Container, Logo, Input, Button, ButtonText, SignUpLink, SignUpLinkText } from './styles';

import firebase from 'firebase';


export default SignIn = ({ navigation }) => {

  const { signIn } = React.useContext(AuthContext)

  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textEmail, textPassword)
      .then(() => signIn())
      .catch(error => alert(error))

  }

  return (
    <Container>
        <StatusBar hidden />
        <Logo source={require('../assets/background.png')} resizeMode="contain" />
        <Input
          placeholder="Endereço de e-mail"
          onChangeText={text => setTextEmail(text.toLowerCase())}
          value={textEmail} 
        />
        <Input
          placeholder="Senha"
          onChangeText={text => setTextPassword(text)}
          value={textPassword} secureTextEntry={true}
          secureTextEntry={true}
        />
        
        <Button onPress={() => handleSignIn()}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <SignUpLink onPress={() => navigation.push("CreateAccount")}>
          <SignUpLinkText>Criar conta</SignUpLinkText>
        </SignUpLink>
    </Container>
  )
}

