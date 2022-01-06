import React, { useState } from "react";
import {Dimensions, Image, Text, View, StyleSheet,Button} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";


const {width,height} = Dimensions.get('screen');

const Moisturizer = ['https://media.glamour.com/photos/5e445e17f4fce00008ba04e8/3:2/w_2498,h_1665,c_limit/river.jpg']
const FaceWash = ['https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2020/09/189620-13-Best-Face-Wash-Products-for-Men-1296x728-Header-2e69ed.jpg?w=1155&h=1528']
const FaceWashGs = ['https://www.scarymommy.com/wp-content/uploads/2021/04/12/face-washes-for-teens.jpg']
const ShampooC = ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-sulphate-free-shampoo-conditioner-1584706761.jpg']
const BodyWash = ["https://ustraa.cdn.imgeng.in/media/ustraa/1/_/1_3_.jpg"]

const Bakery = ({navigation}) => {
    const [currentState, setCurrentState] = useState('Home')

    const [n1, n2] = React.useState(0);
    const [num, setNum] = React.useState(0);
  
   const increment = () => {
     if( num < 10){
     setNum(num + 1);
     n2(n1+15);
    }else{
      
      alert("Maxium Quantity limit");
    }
     
   }
   const decrement = () => {
     if(num > 0){
      setNum(num - 1);
      n2(n1-15);

     }
    else{
      setNum(0);
    }
    
  };
    return(
        <View style= {{flex: 1 , width: width, height: height, paddingTop: 40, backgroundColor: 'black'}} >
              <View style={{marginTop: 0, width: 450, height: 50 , backgroundColor: 'black' , flexDirection: 'row' , justifyContent: 'flex-start' }}>
              <TouchableOpacity   onPress={() =>  (navigation.navigate('HomeScreen'))} >
                <Icon name= 'arrow-back' size={30} color={'white'} style={{ margin: 10}}/>
              </TouchableOpacity>
              <Text style={{
                  marginHorizontal: 25,
                  padding : 5,
                  margin: 6,
                  fontSize: 23,
                  color: 'white' ,
                  textAlign: 'center',
                  fontFamily: 'Arial',
                  backgroundColor: '#5359D1',
                  
                   }}>PERSONAL</Text>

                <TouchableOpacity   onPress={() =>  (alert('seacrh'))} >
                <Icon name= 'ios-search' size={30} color={'white'} style={{ margin:5, marginLeft: 50, position: 'relative'}}/>

              </TouchableOpacity>

                <TouchableOpacity   onPress={() =>  (alert('cart'))} >
                <Icon name= 'ios-cart' size={30} color={'white'} style={{margin: 5, marginLeft: 10}}/>
              </TouchableOpacity>

              </View>
                <View style={{
                    padding: 10,
                    backgroundColor: 'white',
                    width: width,
                    height : 50,
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => {alert('sorting')}}>
                        <Text style={{
                            fontSize: 20,
                            margin: 5,
                            fontWeight: '500',
                            textAlign: 'center',
                            position: 'fixed',
                            color : 'black'
                        }}>Sort ↓ </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {alert('Filtering')}}>
                        <Text style={{
                            fontSize: 20,
                            position: 'fixed',
                            margin: 5,
                            marginLeft: "70%",
                            fontWeight: '500',
                            textAlign: 'center',
                            color : 'black',

                        }}>Filters</Text>
                    </TouchableOpacity>

                </View>
                


                <ScrollView style={{
                  width: width,
                  height: height,
                  backgroundColor: 'white',
                  
                  
              }}> 
              <View style={{
                  borderColor: 'black',
                  borderWidth: 2,
                  margin: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginBottom: 10,
                
              }}>
              <TouchableOpacity onPress={() => alert('Moisturizer')}>
                <Image source={Moisturizer} style={styles.imagestyle} />
                </TouchableOpacity>
               


                <View style = {{ width: 350,
                    height : 50,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    margin: 10,
                    }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 350, height: 35 }}>
                        <Text style={styles.textstyle} >Moisturizer</Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center',  borderRadius: 10,  }}>
                        <Icon name = 'ios-remove-circle' size={35} onPress={decrement} color={'darkorange'} />
                        <Text style = {{paddingHorizontal: 20, fontSize: 25, color: 'black'}}>{num}</Text>
                        <Icon name = 'ios-add-circle' size={35} onPress={increment} color={'darkorange'}/>
                        </View></View>
                    </View></View>

                
                    <View style={{
                  borderColor: 'black',
                  borderWidth: 2,
                  margin: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginBottom: 10,
                
              }}>
                <TouchableOpacity onPress={() => alert('Mens FaceWash')}>
                <Image source={FaceWash} style={styles.imagestyle}/>
                </TouchableOpacity>
  

                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    margin: 10,

                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 350, height: 35 }}>
                        <Text style={styles.textstyle} >FaceWash M</Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', borderRadius: 10,  }}>
                        <Icon name = 'ios-remove-circle' size={35} onPress={decrement} color={'darkorange'} />
                        <Text style = {{paddingHorizontal: 20, fontSize: 25, color: 'black'}}>{num}</Text>
                        <Icon name = 'ios-add-circle' size={35} onPress={increment} color={'darkorange'}/>
                        </View></View>
                    </View></View>

                

                    <View style={{
                  borderColor: 'black',
                  borderWidth: 2,
                  margin: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginBottom: 10,
                
              }}>
                <TouchableOpacity onPress={() => alert('Women FaceWash')}>
                <Image source={FaceWashGs} style={styles.imagestyle}/>
                </TouchableOpacity>
                

                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    margin: 10,

                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 350, height: 35 }}>
                        <Text style={styles.textstyle} >FaceWash G</Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', borderRadius: 10,  }}>
                        <Icon name = 'ios-remove-circle' size={35} onPress={decrement} color={'darkorange'} />
                        <Text style = {{paddingHorizontal: 20, fontSize: 25, color: 'black'}}>{num}</Text>
                        <Icon name = 'ios-add-circle' size={35} onPress={increment} color={'darkorange'}/>
                        </View></View>
                    </View></View>

                
                    <View style={{
                  borderColor: 'black',
                  borderWidth: 2,
                  margin: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginBottom: 10,
                
              }}>
                <TouchableOpacity onPress={() => alert('Shampoo & Conditioner')}>
                <Image source={ShampooC} style={styles.imagestyle}/>
                </TouchableOpacity>
                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    margin: 10
                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 350, height: 35 }}>
                        <Text style={styles.textstyle} >Shampoo+Conditioner </Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', borderRadius: 10,  }}>
                        <Icon name = 'ios-remove-circle' size={35} onPress={decrement} color={'darkorange'} />
                        <Text style = {{paddingHorizontal: 20, fontSize: 25, color: 'black'}}>{num}</Text>
                        <Icon name = 'ios-add-circle' size={35} onPress={increment} color={'darkorange'}/>
                        </View></View>
                    </View></View>

                

                    <View style={{
                  borderColor: 'black',
                  borderWidth: 2,
                  margin: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginBottom: 10,
                
              }}>
                <TouchableOpacity onPress={() => alert('Body Wash')}>
                <Image source={BodyWash} style={styles.imagestyle}/>
                </TouchableOpacity>

                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    margin: 10,
                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 350, height: 35 }}>
                        <Text style={styles.textstyle} >BodyWash</Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', borderRadius: 10,  }}>
                        <Icon name = 'ios-remove-circle' size={35} onPress={decrement} color={'darkorange'} />
                        <Text style = {{paddingHorizontal: 20, fontSize: 25, color: 'black'}}>{num}</Text>
                        <Icon name = 'ios-add-circle' size={35} onPress={increment} color={'darkorange'}/>
                        </View></View>
                    </View></View>

                




              </ScrollView>

                <View style ={{
                    paddingBottom: 25,
                }}>
                    <Button style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'red',
                        marginHorizontal: 10,
                        marginVertical: 10,
                        paddingBottom: 10,
                    }} 
                    title ='Add To Cart'
                    onPress={ () => {alert('pressed')}}/>
                    
                </View>


              <View>

                </View>
          
            
            </View> 

    );
}


const styles = StyleSheet.create({
 
    imagestyle : {
        width: 350,
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
       
        
        shadowOffset: { width: 10, height: 10 },
            shadowColor: '#000',
            shadowOpacity: 1,
            backgroundColor : "#000",
            
       
    },

    textstyle :{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0C090A',
        
        
    },
    ratestyle : {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 5,

    }
});

export default Bakery;