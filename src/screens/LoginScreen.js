import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'tailwind-rn';
import useAuth from '../../hooks/use-Auth';
const LoginScreen = () => {
   // @ts-ignore
   const { signInWithGoogle } = useAuth();
  return (
    <View style={tw('flex-1 items-center justify-center')}>
      <Text>Login </Text>
      <Button title="google Login" onPress={signInWithGoogle} ></Button>
    </View>
  );
};

export default LoginScreen;
