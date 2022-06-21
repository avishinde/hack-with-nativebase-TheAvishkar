import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Button, NativeBaseProvider } from "native-base";


const Home = ({navigation}) => {
  return (
   <NativeBaseProvider>
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Screen1')} 
         size='lg' colorScheme="secondary"
      >
         Screen1
      </Button>
      <Button onPress={() => navigation.navigate('Screen2')}
         size='lg' colorScheme="secondary"
      >
         Screen2
      </Button>
      <Button onPress={() => navigation.navigate('Screen3')}
         size='lg' colorScheme="secondary"
      >
         Screen3
      </Button>
      <Button onPress={() => navigation.navigate('Screen4')}
         size='lg' colorScheme="secondary"
      >
         Screen4
      </Button>
      <Button onPress={() => navigation.navigate('Screen5')}
         size='lg' colorScheme="secondary"
      >
         Screen5
      </Button>
    </View>
   </NativeBaseProvider>
  )
}

export default Home

const styles = StyleSheet.create({
   container:{
      flex:1,
      justifyContent:'space-between',
      backgroundColor:'#000000'
   }
})