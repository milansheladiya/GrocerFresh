import React,{useEffect, useState} from "react";
import { View,Text, StyleSheet,Image,ScrollView,TextInput, Button,Dimensions } from "react-native";
import {insertWithSetDocHandler} from '../Firebase/insert';
import {signUpHandler,getUserIdHandler} from '../Firebase/auth';



const SignupScreen = ({navigation}) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const [address,setAddress] = useState('');
    const [postal,setPostal] = useState('');
    const [password,setPassword] = useState('');

    const signUpOperator = async () => {
        const data = {
            "name":name,
            "email":email.toLowerCase(),
            "contact":contact,
            "address":address,
            "postal":postal.toUpperCase(),
            "isAdmin":false,
        }

        const isRes = await signUpHandler(email,password);     
        if(isRes)
        {
            const uid = await getUserIdHandler();
            const res = insertWithSetDocHandler(["customers",uid],data);
            resetAllField();
            navigation.navigate("LoginScreen");
        }
        else{
            console.log("something went wrong!");
        }
        
    }

    const resetAllField = () => {
        setName('');
        setEmail('');
        setContact('');
        setAddress(''); 
        setPostal('');
        setPassword('');
    }

    return(

            <View style={{marginTop:50,backgroundColor:'white',height:Dimensions.get('window').height}}>
                <Image source={require('../../assets/GrocerFreshLogo.png')} style={styles.img}/>
                <Text style={{fontSize:20,alignSelf:'center',color:'  ',marginTop:10}}> Sign Up </Text>
                <View>
                    <View style={styles.viewContain}>
                        <Text style={styles.txt}>Name : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Enter the Name" value={name} onChangeText={setName}/>
                    </View>
                    <View style={styles.viewContain}>
                        <Text style={styles.txt}>Email : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Enter the Email" autoComplete='email' value={email} onChangeText={setEmail}/>
                    </View>
                    <View style={styles.viewContain}>
                        <Text style={styles.txt,{fontSize:17}}>Contact No : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Contact Number" autoComplete='cc-number' value={contact} onChangeText={setContact} maxLength={10}/>
                    </View>
                    <View style={styles.viewContain}>
                        <Text style={styles.txt}> Address : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Full Address" autoComplete='street-address' value={address} onChangeText={setAddress}/>
                    </View> 
                    <View style={styles.viewContain}>
                        <Text style={styles.txt,{fontSize:17}}> Postal Code : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Postal Code" autoComplete='postal-code' value={postal} onChangeText={setPostal} maxLength={6}/>
                    </View> 
                    <View style={styles.viewContain}>
                        <Text style={styles.txt}> Password : </Text>
                        <TextInput style={styles.inputStyle} placeholder="Password" autoComplete='password' secureTextEntry={true} value={password} onChangeText={setPassword}/>
                    </View> 
                    <View>
                        <Button title="SignUp" style={{padding:20}} onPress={signUpOperator}/>
                    </View>
                    
                </View>

            </View>


    );

  return (
    <ScrollView
      style={{
        paddingTop: 50,
        backgroundColor: "white",
        height: Dimensions.get("window").height,
        flex: 1,
      }}
    >
      <Image
        source={require("../../assets/GrocerFreshLogo.png")}
        style={styles.img}
      />
      <Text
        style={{
          fontSize: 20,
          alignSelf: "center",
          color: "green",
          marginTop: 10,
          textTransform: "uppercase",
        }}
      >
        {" "}
        Enter your details{" "}
      </Text>
      <View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Name : </Text>
          <TextInput style={styles.inputStyle} placeholder="Enter the Name" />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Email : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter the Email"
            autoComplete="email"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Contact No : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Contact Number"
            autoComplete="cc-number"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}> Address : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Full Address"
            autoComplete="street-address"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={(styles.txt, { fontSize: 17 })}> Postal Code : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Postal Code"
            autoComplete="postal-code"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}> Password : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            autoComplete="password"
          />
        </View>
        <View style={styles.viewContain}>
          <Text style={styles.txt}>Re-enter Password : </Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            autoComplete="password"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            height: 150,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button title="SignUp" onPress={showAlert} />
          <Button
            title="Already have an account?"
            onPress={() => navigation.replace("LoginScreen")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

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
        paddingVertical:5,
        borderWidth: 1,
        borderRadius: 30,
        width:'50%',
        fontSize:20,
        borderColor: '#dadae8',
      },
});

export default SignupScreen;
