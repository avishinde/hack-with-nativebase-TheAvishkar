import { StyleSheet, Text, View,Image, ScrollView} from 'react-native'
import React from 'react'
import {  HStack, NativeBaseProvider, VStack,Badge, Button,IconButton } from 'native-base'
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import { StatusBar } from 'expo-status-bar'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const Screen2 = () => {
  
  return (
    <NativeBaseProvider>
      <StatusBar style='Auto'/>
      <ScrollView style={{backgroundColor:'#FFFFFF'}}>
        <View style={styles.ImageC}>
          <Image source={require('../Images/baby.png')} />
        </View>
        <HStack style={styles.productContainer}>
          <VStack>
            <Text style={styles.productTitle}>Body Suit</Text>
            <Text style={styles.productCategory}>Mother care</Text>
            <Text style={styles.productPrice}>₹500</Text>
          </VStack>
          <HStack style={styles.ratingContainer}>
            <Foundation name='star' size={15} color={'#FBBF24'}/>
            <Text style={styles.ratingText}>4.9</Text>
            <Text style={styles.ratingNo}>(120)</Text>
          </HStack>
        </HStack>
        <HStack style={styles.sizeContainer}>
          <HStack>
            <Text style={styles.sizeText}>Select Size</Text>
            <Text style={[styles.sizeText,{color:'#6B7280'}]}>(Age Group)</Text>
          </HStack>
          <View>
            <Text style={[styles.sizeText,{color:'#4C1D95'}]}>Size chart</Text>
          </View>
        </HStack>
        <HStack style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.sizeText}>New Born</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.sizeText}>Tiny Baby</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.sizeText}>0-3 M</Text>
          </View>
        </HStack>
        <HStack style={{marginHorizontal:16,marginVertical:20}}>
          <VStack>
          <View style={{height:37,width:110,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:14,fontWeight:'500',color:'#4C1D95'}}>Description</Text>
          </View>
          <View style={{height:4,width:110,backgroundColor:'#4C1D95',borderTopRightRadius:4,borderTopLeftRadius:4}}></View>
          </VStack>
          <View style={{height:37,width:110,alignItems:'center',justifyContent:'center',marginLeft:20}}>
          <Text style={{fontSize:14,fontWeight:'500',color:'#6B7280'}}>Reviews</Text>
          </View>
        </HStack>
        <View style={{marginHorizontal:16}}>
          <Text style={{fontSize:14,fontWeight:'400',color:'#1F2937'}}>
          Yellow bodysuit, has a round neck with envelope
          detail along the shoulder, short sleeves and
          snap button closures along the crotch. Yellow
          bodysuit, has a round neck with envelope detail
          along the shoulder, short sleeves and snap
          button closures along the crotch.
          Yellow bodysuit, has a round neck with envelo
          </Text>
        </View>
      </ScrollView>
      <View>
      <HStack style={styles.bottomButtonContainer}>
        <Button width={45} height={45} backgroundColor={"#F5F3FF"} >
          <Feather name='heart' size={21} color={'#4C1D95'}/>
        </Button>
        <Button width={301} height={45} backgroundColor={"#4C1D95"} marginRight={2}
          _text={{fontSize:14,fontWeight:'semibold'}}
        
        >
          CONTINUE
        </Button>
       </HStack>
      </View>
    </NativeBaseProvider>
  )
}

export default Screen2

const styles = StyleSheet.create({
  ImageC:{
    marginHorizontal:16,
    width:358,
    height:262,
    marginTop:20,
    marginBottom:16,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5F3FF',
    borderRadius:4
  },
  productContainer:{
    marginHorizontal:16,
    justifyContent:'space-between'
  },
  productTitle:{
    fontSize:18,
    fontWeight:'500',
    color:'#1F2937',
    height:27
  },
  productCategory:{
    fontSize:16,
    fontWeight:'400',
    color:'#6B7280',
    height:24
  },
  productPrice:{
    fontSize:20,
    fontWeight:'500',
    color:'#1F2937',
    height:30
  },
  ratingContainer:{
    justifyContent:'center',
    alignItems:'flex-start'
  },
  ratingText:{
    fontSize:14,
    fontWeight:'400',
    color:'#1F2937',
    height:21,
    marginHorizontal:5
  },
  ratingNo:{
    fontSize:14,
    fontWeight:'400',
    color:'#6B7280',
    height:21
  },
  sizeContainer:{
    marginHorizontal:16,
    justifyContent:'space-between',
    paddingTop:20
  },
  sizeText:{
    fontSize:14,
    fontWeight:'400',
    color:'#1F2937',
    height:21
  },
  badge:{
    width:89,
    height:45,
    borderRadius:4,
    backgroundColor:'#F5F3FF',
    justifyContent:'center',
    alignItems:'center',
    marginRight:8
  },
  badgeContainer:{
    marginTop:12,
    marginHorizontal:16,
    justifyContent:'flex-start'
  },
  bottomButtonContainer:{
    height:77,
    width:399,
    justifyContent:'space-between',
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    paddingHorizontal:16
  },
  iconButton:{

  }
})