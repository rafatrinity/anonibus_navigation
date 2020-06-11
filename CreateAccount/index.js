import React from "react";
import { StatusBar } from 'react-native';

import { AuthContext } from '../context';

import { Container, Logo, Input, Button, ButtonText } from './styles';

import firebase from 'firebase';

export default CreateAccount = () => {

  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(textEmail, textPassword)
      .then(() => signUp())
      .catch(error => alert(error))
  }

  const { signUp } = React.useContext(AuthContext)

  return (
    <Container>
    <StatusBar hidden />
    <Logo source={require('../assets/create-account.png')} resizeMode="contain" />
      <Input
        placeholder="Digite seu e-mail"
        onChangeText={text => setTextEmail(text.toLowerCase())}
        value={textEmail}
      />
      <Input
        placeholder="Digite sua senha"        
        onChangeText={text => setTextPassword(text)}
        value={textPassword} secureTextEntry={true} 
      />
    
    <Button onPress={() => handleSignUp()}>
      <ButtonText>Criar Conta</ButtonText>
    </Button>
  </Container>
  )
}


