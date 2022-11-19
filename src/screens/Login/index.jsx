import { useState } from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { login } from '../../services/auth';
import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext';

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { loginContext } = useContext(AuthContext)

  const handleLogin = async () => {
    if(userName != "" && password != "") {
      loginContext()
    }
  }
  

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput placeholder='INSIRA SEU LOGIN' onChangeText={setUserName} value={userName}/>
      <TextInput placeholder='INSIRA SUA SENHA' onChangeText={setPassword} value={password}/>
      <Button title="ENTRAR" onPress={() => handleLogin()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Login;
