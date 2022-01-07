import React, { useState } from "react";
import {Dimensions, Image, Text, View, StyleSheet,ImageBackground, Button} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { color } from "react-native-reanimated";
import HomeScreen from "../../src/screens/HomeScreen";




const {width,height} = Dimensions.get('screen');



const brocolli = ['https://m.media-amazon.com/images/I/91Pho5CvaML._SL1500_.jpg']
const tamato = ['https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg']
const onions = ['https://i.insider.com/5f80352d4c3b2e0019bba0d4?width=1200&format=jpeg']
const potatos = ['https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80']
const cilantro = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF64t-0wrF_T6IPLm0ZHhnWAX-Xrmx4p78Fg&usqp=CAU"]
const thaic = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRcRBzY_bZ5BtvErMtgCEyf99Fhf6xhsqEg&usqp=CAU']
const mushroom = ['https://d2xsikgwxkxyoe.cloudfront.net/media/37307/button-mushroom.jpg']

const Vegetables = ({navigation}) => {

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
                  marginHorizontal: 10,
                  padding : 5,
                  margin: 6,
                  fontSize: 23,
                  color: 'white' ,
                  textAlign: 'center',
                  fontFamily: 'Arial',
                  backgroundColor: '#5359D1',
                  
                   }}> VEGETABLES </Text>

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
              <TouchableOpacity onPress={() => alert('Brocolli')}>
                <Image source={brocolli} style={styles.imagestyle} />
                </TouchableOpacity>
               


                <View style = {{ width: 350,
                    height : 50,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    margin: 2,
                    }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 300, height: 35 }}>
                        <Text style={styles.textstyle} >Brocolli</Text>
                        <Text style={styles.ratestyle}> $ {n1} /kg </Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,  }}>
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
                <TouchableOpacity onPress={() => alert('Tomato')}>
                <Image source={tamato} style={styles.imagestyle}/>
                </TouchableOpacity>
  

                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    margin: 10,

                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 300, height: 35 }}>
                        <Text style={styles.textstyle} >Tomatos</Text>
                        <Text style={styles.ratestyle}> $ {n1} /kg </Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,  }}>
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
                <TouchableOpacity onPress={() => alert('Onions')}>
                <Image source={onions} style={styles.imagestyle}/>
                </TouchableOpacity>
                

                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    margin: 2,

                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 300, height: 35 }}>
                        <Text style={styles.textstyle} >Onions</Text>
                        <Text style={styles.ratestyle}> $ {n1} /kg </Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,  }}>
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
                <TouchableOpacity onPress={() => alert('Potatos')}>
                <Image source={potatos} style={styles.imagestyle}/>
                </TouchableOpacity>
                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'white',
                    justifyContent: 'center'
                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 300, height: 35 }}>
                        <Text style={styles.textstyle} >Potatos</Text>
                        <Text style={styles.ratestyle}> $ {n1} /kg </Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,  }}>
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
                <TouchableOpacity onPress={() => alert('Cilantro')}>
                <Image source={cilantro} style={styles.imagestyle}/>
                </TouchableOpacity>

                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'white',
                    justifyContent: 'center'
                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 300, height: 35 }}>
                        <Text style={styles.textstyle} >Cilantro</Text>
                        <Text style={styles.ratestyle}> $ {n1} /kg </Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,  }}>
                        <Icon name = 'ios-remove-circle' size={35} onPress={decrement} color={'darkorange'} />
                        <Text style = {{paddingHorizontal: 20, fontSize: 25, color: 'white'}}>{num}</Text>
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
                <TouchableOpacity onPress={() => alert('Thai Chilli')}>
                <Image source={thaic} style={styles.imagestyle}/>
                </TouchableOpacity>

                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'white',
                    justifyContent: 'center'
                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 300, height: 35 }}>
                        <Text style={styles.textstyle} >Thai Chillis</Text>
                        <Text style={styles.ratestyle}> $ {n1} /kg </Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,  }}>
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
                <TouchableOpacity onPress={() => alert('Mushroom')}>
                <Image source={mushroom} style={styles.imagestyle}/>
                </TouchableOpacity>

                <View style = {{ width: 300,
                    height : 40,
                    marginBottom: 10,
                    flexDirection : 'row',
                    backgroundColor: 'white',
                    justifyContent: 'center'
                    }}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',  width: 300, height: 35 }}>
                        <Text style={styles.textstyle} >Mushroom</Text>
                        <Text style={styles.ratestyle}> $ {n1} /kg </Text>
                        <View style ={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10,  }}>
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
        backgroundColor: 'white',
        marginVertical: 5,

    }
});

export default Vegetables;