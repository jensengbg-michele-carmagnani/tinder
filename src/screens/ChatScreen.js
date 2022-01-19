import React from 'react'
import { View, Text, Button } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import tw from 'tailwind-rn'
const ChatScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tw('justify-center items-center h-full')}>
      <Text>Chatscreen</Text>
      <Button title="Go to Home" onPress={()=>{navigation.navigate('Home')}}/>
    </View>
  )
}

export default ChatScreen
