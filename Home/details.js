import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Logo } from './styles';


export default HomeDetails = ({ route }) => {

  return (
    <View style={styles.container}>
      <Logo source={require('../assets/details.png')} resizeMode="contain" />
      <Text>DETAILS</Text>
      {route.params &&
        <Text>{route.params.name}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

