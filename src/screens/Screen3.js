
import { StyleSheet, Text, View, Image} from 'react-native'
import React,{useState} from 'react'
import { NativeBaseProvider, VStack, HStack, Progress, Box, Icon  } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Cart","Delivery Address","Order Summary","Payment Method"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: 'transparent',
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: '#4C1D95',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#4C1D95',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#4C1D95',
  stepIndicatorUnFinishedColor: '#C4B5FD',
  stepIndicatorCurrentColor: '#C4B5FD',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#4C1D95',
  stepIndicatorLabelFinishedColor: '#9CA3AF',
  stepIndicatorLabelUnFinishedColor: '#9CA3AF',
  labelColor: '#9CA3AF',
  labelSize: 13,
  currentStepLabelColor: '#4C1D95'
}



const Screen3 = () => {
  
  const data= [
    {
    label:'Order Placed',
    status:'We have received your order on 28-May-2021',
    time:'5:38',
    },
    {
    label:'Order Packed',
    status:'Seller has processed your order on 29th. Your item has been picked up by courier partner on 30 May-2021',
    time:'5.38',
    },
    {
    label:'Shipped',
    status:'Your item has been picked up not yet shipped.',
    time:'',
    },
    {
    label:'Out for Delivery',
    status:'Your order is out for delivery.',
    time:'',
    }
  ]

  const [currentPosition, setcurrentPosition] = useState(2)
  return (
    <NativeBaseProvider>
      <View style={{flex:1,backgroundColor:'white'}}>
      <Box height={114} width={358} backgroundColor={'#F3F4F6'} borderRadius={4}
        marginHorizontal={16} marginVertical={20}
      >
        <HStack>
          <Image source={require('../Images/dress.png')} style={{height:90,width:74,borderRadius:4,marginHorizontal:12,marginVertical:12}}/>
          <VStack width={116} height={90} justifyContent={'space-between'} marginVertical={12}>
            <VStack>
              <Text style={{fontSize:16,fontWeight:'700',color:'#1F2937'}}>Sweater dress</Text>
              <Text style={{fontSize:14,fontWeight:'400',color:'#6B7280'}}>Girls self design</Text>
            </VStack>
            <Text style={{fontSize:14,fontWeight:'500',color:'#1F2937'}}>₹1,199</Text>
          </VStack>
        </HStack>
      </Box>
      
      <View style={styles.indicatorContainer}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            direction='vertical'
            stepCount={4}
            renderStepIndicator={({position, stepStatus, label, crntPosition})=>{
              return(
                <Ionicons name='checkmark' size={16} color={'white'}/>
              )
            }}
            renderLabel={({position, stepStatus, label, crntPosition})=>{
              return(
                <View style={styles.lblContainer}>
                  <Text style={styles.lblText}>{data[position].label}</Text>
                  <Text style={styles.lblSubText}>{data[position].status}</Text>
                  </View>
              )
            }
            }
           />
      </View>
        
      </View>
    </NativeBaseProvider>
  )
}

export default Screen3

const styles = StyleSheet.create({
  indicatorContainer:{
    height:305,
    width:342,
    marginHorizontal:24,
    marginVertical:12,
    backgroundColor:'#ffffff',
  },
  lblContainer:{
    alignItems:'flex-start',
    marginBottom:16,
    marginTop:16,
    width:306,
    marginLeft:16
  },
  lblText:{
    fontSize:14,
    fontWeight:'500',
  },
  lblSubText:{
    fontSize:12,
    fontWeight:'400',
    color:'#6B7280'
  }
})