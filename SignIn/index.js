import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import { AuthContext } from "../context";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import {
  Container,
  Logo,
  Input,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
  CustonInput
} from "./styles";

import firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

export default SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [textEmail, setTextEmail] = React.useState("");
  const [textPassword, setTextPassword] = React.useState("");
  const [PasswordVisualisation, SetPasswordVisualisation] = React.useState({
    hide: true,
    iconName: "eye",
  });

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textEmail, textPassword)
      .then(() => signIn())
      .catch((error) => alert(error));
  };

  function ToggleVisibity() {
    SetPasswordVisualisation({
      hide: !PasswordVisualisation.hide,
      iconName: PasswordVisualisation.iconName == "eye" ? "eye-off" : "eye",
    });
  }
  return (
    <Container>
      <StatusBar hidden />
      <Logo source={require("../assets/background.png")} resizeMode="contain" />
      <CustonInput>
        <Input
          placeholder="Endereço de e-mail"
          onChangeText={(text) => setTextEmail(text.toLowerCase())}
          value={textEmail}
        />
        </CustonInput>

      <CustonInput>
        <Input
          placeholder="Senha"
          onChangeText={(text) => setTextPassword(text)}
          value={textPassword}
          secureTextEntry={PasswordVisualisation.hide}
        />
        <TouchableOpacity onPress={ToggleVisibity}>
          <Icon name={PasswordVisualisation.iconName} size={28} />
        </TouchableOpacity>
      </CustonInput>
      
      <Button onPress={() => handleSignIn()}>
        <ButtonText>Entrar</ButtonText>
      </Button>
      <SignUpLink onPress={() => navigation.push("CreateAccount")}>
        <SignUpLinkText>Criar conta</SignUpLinkText>
      </SignUpLink>
    </Container>
  );
};
