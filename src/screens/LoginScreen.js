import React from 'react';
import { View, Text, Button } from 'react-native';
import tw from 'tailwind-rn';
import useAuth from '../../hooks/use-Auth';
const LoginScreen = () => {
  // @ts-ignore
  const { signInWithGoogle, isLoading } = useAuth();
  console.log(signInWithGoogle)
  return (
    <View style={tw('flex-1 items-center justify-center')}>
      <Text>{isLoading ? 'Loading...' : 'Login to the app'}</Text>
      <Button title="google Login" onPress={signInWithGoogle}></Button>
    </View>
  );
};

export default LoginScreen;
