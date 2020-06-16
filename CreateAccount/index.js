import React from "react";
import { StatusBar } from 'react-native';

import { AuthContext } from '../context';

import { Container, Logo, Input, Button, ButtonText, CustonInput } from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import firebase from 'firebase';

export default CreateAccount = () => {

  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [PasswordVisualisation, SetPasswordVisualisation] = React.useState({
    hide: true,
    iconName: "eye",
  });

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(textEmail, textPassword)
      .then(() => signUp())
      .catch(error => alert(error))
  }

  const { signUp } = React.useContext(AuthContext)

  function ToggleVisibity() {
    SetPasswordVisualisation({
      hide: !PasswordVisualisation.hide,
      iconName: PasswordVisualisation.iconName == "eye" ? "eye-off" : "eye",
    });
  }

  return (
    <Container>
    <StatusBar hidden />
    <Logo source={require('../assets/create-account.png')} resizeMode="contain" />
    <CustonInput>
      <Input
        placeholder="Digite seu e-mail"
        onChangeText={text => setTextEmail(text.toLowerCase())}
        value={textEmail}
      />
      </CustonInput>

      <CustonInput>
      <Input
        placeholder="Digite sua senha"        
        onChangeText={(text) => setTextPassword(text)}
        value={textPassword}
        secureTextEntry={PasswordVisualisation.hide}
      />
      <TouchableOpacity onPress={ToggleVisibity}>
          <Icon name={PasswordVisualisation.iconName} size={28} />
      </TouchableOpacity>
      </CustonInput>
    
    <Button onPress={() => handleSignUp()}>
      <ButtonText>Criar Conta</ButtonText>
    </Button>
  </Container>
  )
}


