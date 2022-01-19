import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import tw from 'tailwind-rn';
import useAuth from '../../hooks/use-Auth';

const LoginScreen = () => {
  // @ts-ignore
  const { signInWithGoogle, isLoading } = useAuth();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={tw('flex-1 ')}>
      <ImageBackground
        resizeMode="cover"
        style={tw('flex-1 ')}
        source={{ uri: 'https://tinder.com/static/tinder.png' }}
      >
        <TouchableOpacity
          style={[
            tw('absolute bottom-40 w-52 bg-white p-2 rounded-2xl'),
            { marginHorizontal: '25%' },
          ]}
        >
          <Button
            style={tw('color-primary')}
            title="Sign in with Google"
            onPress={signInWithGoogle}
          ></Button>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
