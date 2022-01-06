import React, { useState } from "react";
import { ScrollView,View, Text, StyleSheet, Image, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import VegesP from '../../assets/VegesH.png';
import fruits from '../../assets/fruitsD.png';
import meat from '../../assets/meatD.png';
import frozen from '../../assets/frozenD.png';
import bakery from '../../assets/bakeryD.png';
import personal from '../../assets/personalD.png';
import saleproduct from '../../assets/saleproductD.png';
import Icon from 'react-native-vector-icons/Ionicons';


const {width, height} = Dimensions.get('screen');
const deals = ['https://cdn.grabon.in/gograbon/images/web-images/uploads/1618548899692/groceries-offers.jpg',
]

const HomeS = ({navigation}) => {
    const [currentTab, setCurrentTab] = useState('Home');
    const [showMenu, setShowmenu] = useState(false);




        return(
          
          <View style= {{flex: 1 , width: width, height: height, paddingTop: 40, backgroundColor: 'black'}} >
              
              <View style={{marginTop: 0, width: "100%", height: 50 , backgroundColor: 'transparent' , flexDirection: 'row' , }}>
                  
              
              <TouchableOpacity   onPress={() =>  (alert('menu'))} >
                <Icon name= 'menu' size={30} color={'white'} style={{ margin: 10}}/>
              </TouchableOpacity>
              
              <Text style={{
                  padding : 5,
                  margin: 6,
                  fontSize: 23,
                  color: 'white' ,
                  textAlign: 'center',
                  fontFamily: 'Arial',
                  backgroundColor: '#5359D1',
                   }}> PRODUCTS </Text>

                <TouchableOpacity   onPress={() =>  (alert('seacrh'))} >
                <Icon name= 'ios-search' size={30} color={'white'} style={{ margin:5, position: 'absolute', marginHorizontal: 70}}/>

              </TouchableOpacity>

                <TouchableOpacity   onPress={() =>  (alert('cart'))} >
                <Icon name= 'ios-cart' size={30} color={'white'} style={{ margin: 5, position: 'absolute', marginHorizontal: 120}}/>
              </TouchableOpacity>


              </View>


              
              <ScrollView style={{
                  width: width,
                  height: height,
                  backgroundColor: 'transparent'
              }}>

            {/* View1 */}
            
            <View style={{
                backgroundColor: ('white'),
                width: width,
                height: 350, 
                flexDirection: 'row'           
                 }} >
            <ScrollView >
               <TouchableOpacity onPress={() =>  navigation.navigate('Vegetables')}>
            <Image style ={styles.imagestyle} 
            source= {VegesP} /> 
            </TouchableOpacity>
          
                <View style={{
                 marginLeft : 15,
                 width:110,
                 height: 30,
                }}>

                    
            <Text style={{
                fontSize: 20,                
                justifyContent: 'center',
                }}> Vegetables </Text></View>
            
            <TouchableOpacity onPress={() =>  navigation.navigate('Frozen')}>
            <Image style ={styles.imagestyle} 
            source= {frozen} /> 
            </TouchableOpacity>
            
            <View style={{
                 marginLeft : 10,
                 width:110,
                 height: 30,
                            }}>
            <Text style={{
                fontSize: 20,                
                justifyContent: 'center',
                textAlign: 'center'
                }}> Frozenfood </Text></View>


            </ScrollView>

                {/* View2 */} 
            <ScrollView>
               <TouchableOpacity onPress={() =>  navigation.navigate('Fruits')}>
            <Image style ={styles.imagestyle} 
            source= {fruits} /> 
            </TouchableOpacity>
          
                <View style={{
                 marginLeft : 5,
                 width:110,
                 height: 30,
                            }}>
            <Text style={{
                fontSize: 20,     
                textAlign: 'center',           
                justifyContent: 'center',
                }}> Fruits </Text></View>
            
            <TouchableOpacity onPress={() =>  navigation.navigate('Bakery')}>
            <Image style ={styles.imagestyle} 
            source= {bakery} /> 
            </TouchableOpacity>
            
            <View style={{
                 marginLeft : 5,
                 width:110,
                 height: 30,
                            }}>
            <Text style={{
                fontSize: 20,     
                textAlign: 'center',           
                justifyContent: 'center',
                }}> Bakery </Text></View>


            </ScrollView>

                 {/* View3 */}
            <ScrollView >
               <TouchableOpacity onPress={() =>  navigation.navigate('Meat')}>
            <Image style ={styles.imagestyle} 
            source= {meat} /> 
            </TouchableOpacity>
          
                <View style={{
                 marginLeft : 5,
                 width:110,
                 height: 30,
                            }}>
            <Text style={{
                fontSize: 20,                
                justifyContent: 'center',
                textAlign: 'center'
                }}> Meat </Text></View>
            
            <TouchableOpacity onPress={() =>  navigation.navigate('Personal')}>
            <Image style ={styles.imagestyle} 
            source= {personal} /> 
            </TouchableOpacity>
            
            <View style={{
                marginLeft : 5,
                width:110,
                height: 30,
                            }}>
            <Text style={{
                fontSize: 20,                
                justifyContent: 'center',
                textAlign: 'center',
                }}> Personal </Text></View>


            </ScrollView>


            </View>

            {/* saleImage */}
            <View>
                <Image resizeMode= 'cover' style={{
                    marginTop: 2,
                    width: width,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    height: 100,
                }} source={saleproduct} />
            </View>

            <View style={{
                backgroundColor: 'white',
                width: width,
                height: 300,
                marginTop: 2,
                

            }}>
                <Text style={{
                    width: 100,
                    height: 50,
                    marginTop: 10,
                    textAlign:'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: '#5359D1',
                    borderRadius: 20,
                    
                }}>Deal for the day!!</Text>

                <View style={{backgroundColor: 'white', flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between'}}>
                    <Icon name='arrow-back-circle' size={30} color={'maroon'} onPress={() => {alert('Previous Image')}} style={{ marginTop: 75}}/>
                    <TouchableOpacity onPress={() => {alert('perfect deal for you!!')}}>
                    <Image source={deals} style={{
                        width: 280,
                        height: 150,
                        alignSelf: 'center',
                        marginVertical: 20,
                        borderRadius: 10,
                        borderColor: 'black',
                        borderWidth: 2,

                    }}/>
                    </TouchableOpacity>
                    <Icon name='arrow-forward-circle' size={30} color={'maroon'} onPress={() => {alert('Next Image')}} style={{marginTop: 75}}/>
                </View>

                

            </View>
            
            
            </ScrollView>

          
            
            </View> 



            
     
       ); 
  
      }
    

const styles = StyleSheet.create({
 
  imagestyle : {
      width: 100,
      height: 100,
      margin: 10,
      borderRadius: 150,
      borderColor: 'black',
      borderWidth: 2,
     
     
  },
  
  
  
});

export default HomeS;