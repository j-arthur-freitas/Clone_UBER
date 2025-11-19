import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Login.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.replace('Home'); 
    } else {
      console.log('Preencha email e senha.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSpacer} />
      
      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Text style={styles.subtitle}>Entre na sua conta para continuar.</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Continuar</Text>
      </TouchableOpacity>
      
      <Text style={styles.divider}>ou</Text>

      <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
        <Text style={[styles.socialIcon, styles.socialIconWhite]}></Text> 
        <Text style={[styles.socialButtonText, styles.socialTextWhite]}>Continuar com Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
        <Text style={[styles.socialIcon, styles.socialTextBlack]}>G</Text> 
        <Text style={[styles.socialButtonText, styles.socialTextBlack]}>Continuar com Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};