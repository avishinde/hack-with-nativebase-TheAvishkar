import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeBaseProvider, VStack, HStack, Box  } from 'native-base';


const MFcard = (props) => {
  return (
    <NativeBaseProvider>
      <TouchableOpacity>
      <Box backgroundColor={'#F3F4F6'}
            width={358}
            height={130}
            marginBottom={4}
            borderRadius={4}
         
      >
         <VStack>
            <VStack style={styles.titleContainer}>
               <Text style={styles.mainTitleText}>{props.Name}</Text>
               <View style={styles.greenComponent}>
                  <Text style={styles.greenComponentText}>SIP × 6</Text>
               </View>
            </VStack>
            <HStack style={styles.bottomContainer}>
               <VStack>
                  <Text style={styles.smallText}>Investment</Text>
                  <Text style={styles.NumberText}>{props.Investment}</Text>
               </VStack>
               <VStack>
                  <Text style={styles.smallText}>Current Value</Text>
                  <Text style={styles.NumberText}>{props.CurrentValue}</Text>
               </VStack>
               <VStack>
                  <Text style={styles.smallText}>Returns</Text>
                  <Text style={[styles.NumberText,{color:'#059669'}]}>{props.Returns}</Text>
               </VStack>
            </HStack>
         </VStack>
      </Box>
      </TouchableOpacity>
    </NativeBaseProvider>
  )
}

export default MFcard

const styles = StyleSheet.create({
   titleContainer:{
      padding:12,
   },
   mainTitleText:{
      fontSize:14,
      fontWeight:'700',
      color:'#1F2937'

   },
   greenComponent:{
      backgroundColor:'#059669',
      height:22,
      width:57,
      borderRadius:3,
      justifyContent:'center',
      alignItems:'center',
      marginTop:8
   },
   greenComponentText:{
      fontSize:12,
      fontWeight:'400',
      color:'#F3F4F6'
   },
   bottomContainer:{
      paddingTop:2,
      paddingHorizontal:12,
      justifyContent:'space-between'
   },
   smallText:{
      fontSize:12,
      color:'#6B7280',
      fontWeight:'500',
      paddingBottom:4
   },
   NumberText:{
      fontSize:16,
      color:'#1F2937',
      fontWeight:'500'
   }
})