import React,{useEffect, useState} from "react";
import { View,Text, StyleSheet,Image,ScrollView,TextInput, Button } from "react-native";

const SignupScreen = () => {


    return(

            <View style={{marginTop:20}}>
                <Image source={require('../../assets/GrocerFreshLogo.png')} style={styles.img}/>
                <Text style={{fontSize:20,alignSelf:'center',color:'green',marginTop:10}}> Sign Up </Text>
                <View>
                    <View style={styles.viewContain}>
                        <Text style={styles.txt}>Name : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Enter the Name"/>
                    </View>
                    <View style={styles.viewContain}>
                        <Text style={styles.txt}>Email : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Enter the Email" autoComplete='email'/>
                    </View>
                    <View style={styles.viewContain}>
                        <Text style={styles.txt,{fontSize:17}}>Contact No : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Contact Number" autoComplete='cc-number'/>
                    </View>
                    <View style={styles.viewContain}>
                        <Text style={styles.txt}> Address : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Full Address" autoComplete='street-address'/>
                    </View> 
                    <View style={styles.viewContain}>
                        <Text style={styles.txt,{fontSize:17}}> Postal Code : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Postal Code" autoComplete='postal-code'/>
                    </View> 
                    <View style={styles.viewContain}>
                        <Text style={styles.txt}> Password : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Password" autoComplete='password'/>
                    </View> 
                    <View>
                        <Button title="SignUp" style={{padding:20}}/>
                    </View>
                    
                </View>

            </View>


    );

}

const styles = StyleSheet.create({
    img:{
        width:220,
        height:100,
        alignSelf:'center',
    },
    viewContain:{
        flexDirection:'row',padding:20       
    },
    txt:{
        flex:1,fontSize:20,
    },
    inputStyle: {
        flex:2,
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical:2,
        borderWidth: 1,
        borderRadius: 30,
        width:'50%',
        fontSize:20,
        borderColor: '#dadae8',
      },
});

export default SignupScreen;