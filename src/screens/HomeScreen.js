import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import tw from 'tailwind-rn';
import useAuth from '../../hooks/use-Auth';

const HomeScreen = () => {
  const navigation = useNavigation();
  // @ts-ignore
  const { logOut } = useAuth();
  return (
    <View style={tw('justify-center items-center h-full')}>
      <Text>Homescreen</Text>
      <Button
        title="Go to Chat"
        onPress={() =>
          navigation.navigate(
            // @ts-ignore
            'Chat'
          )
        }
      />
      <Button title="Logout" onPress={logOut} />
    </View>
  );
};

export default HomeScreen;
