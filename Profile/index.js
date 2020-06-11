import React from "react";
import { StatusBar } from 'react-native';

import { AuthContext } from '../context';

import { Container, Logo, Button, ButtonText } from './styles';

import firebase from 'firebase';



export default Profile = () => {

  const { signOut } = React.useContext(AuthContext)

  const handleSignOut = () => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      signOut();
    }).catch(function (error) {
      alert(error)
    });
  }

  return (
    <Container>
      <StatusBar hidden />
        <Logo source={require('../assets/profile.png')} resizeMode="contain" />
        <Button onPress={() => handleSignOut()}>
          <ButtonText>Sair</ButtonText>
        </Button>
    </Container>
  )
}


