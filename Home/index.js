import React from "react";
import { StatusBar } from 'react-native';

import { Container, Logo, Button, ButtonText } from './styles';


export default Home = ({ navigation }) => {

  return (
    <Container>
      <StatusBar hidden />
        <Logo source={require('../assets/home.png')} resizeMode="contain" />
        
        <Button onPress={() => navigation.push('HomeDetails')}>
          <ButtonText>Detalhes Sem Parametro</ButtonText>
        </Button>
        <Button onPress={() =>
        navigation.push('HomeDetails', { name: 'Isso é um teste' })}>
          <ButtonText>Detalhes Com Parametro</ButtonText>
        </Button>
    </Container>
  )
}


