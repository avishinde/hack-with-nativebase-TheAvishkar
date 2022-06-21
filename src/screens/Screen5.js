import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Button, NativeBaseProvider,Actionsheet,Box,Center,useDisclose, HStack, VStack   } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Screen5 = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
  return (
    <NativeBaseProvider>
     <Center>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
        <Actionsheet.Content>
          <View style={{backgroundColor:'#FFFFFF',width:390,height:406,justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'#FFFFFF',width:342,height:358,justifyContent:'space-between'}}>
              <View style={{backgroundColor:'#FFFFFF',width:342,height:74,}}> 
                <HStack>
                  <Image  source={require('../Images/girl.png')} style={{marginRight:12}}/>
                  <VStack >
                    <Text style={{fontSize:16,fontWeight:'700',lineHeight:24,color:'#1F2937'}}>Body Suit</Text>
                    <Text style={{fontSize:14,fontWeight:'400',lineHeight:21,color:'#9CA3AF',marginBottom:8}}>Mother care</Text>
                    <Text style={{fontSize:14,fontWeight:'400',lineHeight:21,color:'#1F2937'}}>₹500</Text>
                  </VStack>
                </HStack>
              </View>
              <View style={{backgroundColor:'#FFFFFF',width:342,height:260,justifyContent:'space-between'}}>
                <View>
                  <Text style={{fontSize:18,fontWeight:'700',lineHeight:27,color:'#1F2937'}}>Choose a delivery option:</Text>
                </View>
                <View style={{marginVertical:24}}>
                  <HStack style={{width:342,height:40}}>
                    <MaterialCommunityIcons name='circle-slice-8' size={20} color={'#4C1D95'}/>
                    <Text style={{fontSize:16,color:'#4C1D95',lineHeight:24}}> Monday- </Text>
                    <Text style={{fontSize:14,color:'#1F2937',lineHeight:24}}>Free Delivery</Text>
                  </HStack>
                  <HStack style={{width:342,height:40}}>
                    <MaterialCommunityIcons name='circle-outline' size={20} color={'#D1D5DB'}/>
                    <Text style={{fontSize:16,color:'#4C1D95',lineHeight:24}}> Tuesday- </Text>
                    <Text style={{fontSize:14,color:'#1F2937',lineHeight:24}}>Delivery Fee ₹50</Text>
                  </HStack>
                  <HStack style={{width:342,height:40}}>
                    <MaterialCommunityIcons name='circle-outline' size={20} color={'#D1D5DB'}/>
                    <Text style={{fontSize:16,color:'#4C1D95',lineHeight:24}}> 2 Business Days- </Text>
                    <Text style={{fontSize:14,color:'#1F2937',lineHeight:24}}>Delivery Fee ₹150 </Text>
                  </HStack>
                  <HStack style={{width:342,height:40}}>
                    <MaterialCommunityIcons name='circle-outline' size={20} color={'#D1D5DB'}/>
                    <Text style={{fontSize:16,color:'#4C1D95',lineHeight:24}}> Pickup- </Text>
                    <Text style={{fontSize:14,color:'#1F2937',lineHeight:24}}>Find a Location</Text>
                  </HStack>
                </View>
                <View>
                  <Button width={342} height={45} backgroundColor={"#4C1D95"} marginRight={2}
                  _text={{fontSize:14,fontWeight:'semibold'}} borderRadius={4}>
                    CONTINUE
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
      
    </Center>
    </NativeBaseProvider>
  )
}

export default Screen5

const styles = StyleSheet.create({})