import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, VStack, HStack, Progress, Button  } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Screen1 = ({navigation}) => {
  return (
   <NativeBaseProvider>
   <View style={{flex:1,backgroundColor:'#F5F3FF'}}>
      <StatusBar style='Auto'/>
      <View style={{backgroundColor:'white'}}>
      <VStack marginTop={5} marginBottom={5}>
         <TouchableOpacity >
         <HStack style={styles.container} >
            <Entypo name='dots-three-horizontal' size={17} color='#6B7280' style={styles.fonts} />
            <Text style={styles.text}>Change password</Text>
         </HStack>
         </TouchableOpacity>
         <TouchableOpacity>
         <HStack style={styles.container} >
            <Foundation name='shield' size={25} color='#6B7280' style={styles.fonts} />
            <Text style={styles.text}>General</Text>
         </HStack>
         </TouchableOpacity>
         <TouchableOpacity>
         <HStack style={styles.container} >
            <FontAwesome5 name='user-cog' size={17} color='#6B7280' style={styles.fonts} />
            <Text style={styles.text}>Manage Accounts</Text>
         </HStack>
         </TouchableOpacity>
         <TouchableOpacity>
         <HStack style={styles.container} >
            <MaterialCommunityIcons name='google-translate' size={25} color='#6B7280' style={styles.fonts} />
            <Text style={styles.text}>Language</Text>
            <Text style={[styles.text,{color:'#6B7280',left:319}]}>English</Text>
         </HStack>
         </TouchableOpacity>
         <TouchableOpacity>
         <HStack style={styles.container} >
            <Feather name='link-2' size={17} color='#6B7280' style={styles.fonts} />
            <Text style={styles.text}>Linked Accounts</Text>
         </HStack>
         </TouchableOpacity>
         <TouchableOpacity>
         <HStack style={styles.container} >
            <FontAwesome5 name='user-slash' size={17} color='#6B7280' style={styles.fonts} />
            <Text style={styles.text}>Disable Accounts</Text>
         </HStack>
         </TouchableOpacity>
      </VStack>
      </View>
      <HStack style={styles.storageContainer}>
         <VStack>
            <HStack style={{height:24,width:97,justifyContent:'space-between',marginHorizontal:16,marginVertical:12}}>
               <Ionicons name='cloud-outline' size={24} color='#6B7280'/>
               <Text style={{fontSize:16,lineHeight:24,color:'#1F2937' ,fontWeight:'500'}}>Storage</Text>
            </HStack>
            <View style={{height:8,width:198,marginHorizontal:16}}>
               <Progress value={45} bgColor={'#F3F4F6'} _filledTrack={{bg: "#4C1D95"}}/>
            </View>
            <Text style={{marginHorizontal:16,fontSize:12,lineHeight:18,color:'#1F2937',fontWeight:'400',paddingBottom:12,paddingTop:8}}>4 GB of 15 GB used</Text>
         </VStack>
         <View >
         <Button style={styles.button} _text={{color:'#5B21B6',fontSize:12,fontWeight:'700'}}>
            Buy Storage
         </Button>
         </View>
      </HStack>
   </View>
   </NativeBaseProvider>
  
  )
}

export default Screen1

const styles = StyleSheet.create({
   text:{
      fontSize:16,
      fontWeight:'400',
      left:52,
      position:'absolute',
      color:'#1F2937'

   },
   container:{
      width:"100%",
      backgroundColor:'white',
      height:48,
      justifyContent:'flex-start',
      alignItems:'center'
   },
   fonts:{
      left:16
   },
   storageContainer:{
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'space-between',
      width:358,
      backgroundColor:'#FFFFFF',
      marginTop:20,
      borderRadius:5,
   },
   button:{
      height:48,
      width:105,
      borderRadius:5,
      borderWidth:1,
      borderColor:'#5B21B6',
      marginRight:16,
      flexGrow:0,
      backgroundColor:'transparent'   
   }
})