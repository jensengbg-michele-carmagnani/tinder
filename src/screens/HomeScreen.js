import React from 'react'
import { View, Text, Button } from 'react-native'
import {useNavigation} from '@react-navigation/core'
import tw from 'tailwind-rn'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={tw('justify-center items-center h-full')}>
      <Text>Homescreen</Text>
      <Button title='Chat' onPress={()=>navigation.navigate('Chat')}/>
    </View>
  )
}

export default HomeScreen
