import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { NativeBaseProvider, VStack, HStack, Box,   } from 'native-base';
import { StatusBar } from 'expo-status-bar'
import MFcard from '../components/MFcard';

const Screen4 = () => {
  return (
    <NativeBaseProvider>
      <StatusBar style='Auto' />
      <View style={{alignItems:'center',paddingTop:20,backgroundColor:'#ffffff',flex:1,paddingHorizontal:16}}>
        <HStack style={{width:358, height:76, justifyContent:'space-between'}}>
          <Box borderColor={'#5B21B6'} width={171} height={76} borderWidth={1}
            borderRadius={4} justifyContent={'center'} alignItems={'center'}
          >
            <Text style={[styles.upperBoxText,{color:'#5B21B6'}]}>$15303.00</Text>
            <Text style={[styles.upperBoxTextSmall,{color:'#5B21B6'}]}>Total Invested</Text>
          </Box>
          <Box borderColor={'#065F46'}
            width={171} height={76} borderWidth={1}
            borderRadius={4} alignItems={'center'} justifyContent={'center'}
          >
            <Text style={[styles.upperBoxText,{color:'#065F46'}]}>$45303.00</Text>
            <Text style={[styles.upperBoxTextSmall,{color:'#065F46'}]}>Total Invested</Text>
          </Box>
        </HStack>
        <Text style={{fontSize:16,fontWeight:'500',color:'#1F2937',
         alignSelf:'flex-start',
         paddingVertical:20}}>Portfolio Details</Text>
       
        <ScrollView showsVerticalScrollIndicator={false} >
        
        <MFcard 
          Name='Aditya Birla Sun Life Flexi Cap- Fund'
          Investment='$50,000'
          CurrentValue='$4,351.50'
          Returns='14%'
        />
        <MFcard Name='Axis Sun Life Flexi Cap- Fund'
          Investment='$782.01'
          CurrentValue='$473.85'
          Returns='12%'
        />
        <MFcard Name='Aditya Birla Blue Chip- Fund'
          Investment='$779.58'
          CurrentValue='$293.01'
          Returns='10%'
        />
        <MFcard Name='Kotak Flexi Cap Mutual Fund'
          Investment='$406.27'
          CurrentValue='$106.58'
          Returns='15%'
        />
        </ScrollView> 
      </View>
      
    </NativeBaseProvider>
  )
}

export default Screen4

const styles = StyleSheet.create({
  upperBoxText:{
    fontSize:20,
    fontWeight:'700',
    paddingBottom:4

  },
  upperBoxTextSmall:{
    fontSize:12,
    fontWeight:'500'
  },
})