import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import tw from 'tailwind-rn';
import useAuth from '../../hooks/use-Auth';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons/';
import Swiper from 'react-native-deck-swiper'

const HomeScreen = () => {
  const navigation = useNavigation();
  // @ts-ignore
  const { logOut, user } = useAuth();

  useLayoutEffect(() => {
    // navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView>
      <View style={tw('flex-row items-center justify-between px-5')}>
        <TouchableOpacity onPress={logOut} style={tw('')}>
          <Image
            style={tw('h-10 w-10 rounded-full')}
            source={{ uri: user.photoURL }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={tw('h-14 w-14')}
            // @ts-ignore
            source={require('../../assets/logo.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>


     <Swiper cards={DATA}
     >

       

     </Swiper>
    </SafeAreaView>
  );
};

export default HomeScreen;
