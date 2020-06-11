// expo install styled-components
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #FFF;
`;

const Logo = styled.Image`
    width: 100%;
    height: 40%;
    marginBottom: 40px;
`;

const Button = styled.TouchableHighlight`
    padding: 20px;
    borderRadius: 5px;
    backgroundColor: #388aff;
    alignSelf: stretch;
    margin: 15px;
    marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #FFF;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

  
  export { Container, Logo, Button, ButtonText };

