import React, { useState } from "react";
import {Dimensions, Image, Text, View, StyleSheet,Button} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";


const {width,height} = Dimensions.get('screen');

const Bread = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0z-s0q1Kyqas6kZf4ZIY4sFNq6qmHulrqaQ&usqp=CAU']
const Toastie = ['https://c8.alamy.com/comp/CW15R9/warburtons-thick-sliced-white-bread-loaf-CW15R9.jpg']
const Muffins = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxB3hsIMseB0V2k-wZ7ZEPPyv4mDBBW1QxPA&usqp=CAU']
const Bagels = ['https://www.perishablenews.com/wp-content/uploads/2020/01/ba11.jpg']
const FootLong = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoIw5x86hSGFFHN094YxaoqCOas1FETxWSg&usqp=CAU"]

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
                  
                   }}>{'\t'}BAKERY{'\t'} </Text>

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
              <TouchableOpacity onPress={() => alert('Bread')}>
                <Image source={Bread} style={styles.imagestyle} />
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
                        <Text style={styles.textstyle} >Bread</Text>
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
                <TouchableOpacity onPress={() => alert('Toastie')}>
                <Image source={Toastie} style={styles.imagestyle}/>
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
                        <Text style={styles.textstyle} >Toastie</Text>
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
                <TouchableOpacity onPress={() => alert('Muffins')}>
                <Image source={Muffins} style={styles.imagestyle}/>
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
                        <Text style={styles.textstyle} >Muffins</Text>
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
                <TouchableOpacity onPress={() => alert('Bagels')}>
                <Image source={Bagels} style={styles.imagestyle}/>
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
                        <Text style={styles.textstyle} >Bagels</Text>
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
                <TouchableOpacity onPress={() => alert('Foot Long Bread')}>
                <Image source={FootLong} style={styles.imagestyle}/>
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
                        <Text style={styles.textstyle} >FootLong</Text>
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