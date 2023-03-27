import React from 'react'; 

import {StyleSheet, Text, View, TextInput, Button } from 'react-native'; 
// import testimg from './assets/test1.png';
export default function Signin() { 

  return ( 
    <View style={styles.container }> 
    {/* <ImageBackground source={testimg} style={styles.backgroundimage}></ImageBackground> */}
      <View> 
        <Text style={styles.title}> Signin </Text> 
      </View> 

      <View> 
        <Text style={styles.reg}></Text> 
        <TextInput style={styles.input} placeholder="  Email" /> 
      </View> 
      <View> 
        <Text style={styles.reg1}></Text> 
        <TextInput style={styles.input1} placeholder="  Password" /> 
      </View> 

       <View style={styles.bu}> 
        <Button 
        title="       LOGIN        "
        color="#509" >
        </Button> 
      </View>      
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center', 
    
  }, 
 
  title: { 
    fontSize: 40, 
    fontWeight: 'bold', 
    color: '#c58', 
  }, 
  
  reg: { 
    padding: 10, 
    textAlign: 'left', 
    marginLeft: -15, 
    marginBottom: -22, 
    color: 'blue', 
  }, 
  input: { 
    borderWidth: 2, 
    textAlign: 'left', 
    width: 400, 
    borderRadius: 8, 
  }, 
  reg1: { 
    padding: 10, 
    textAlign: 'left', 
    marginLeft: -14, 
    marginBottom: -10, 
    color: 'blue', 
  }, 
  input1: { 
    borderWidth: 2, 
    textAlign: 'left', 
    width: 400, 
    borderRadius: 8, 
  }, 
 
  bu: { 
    padding: 15, 
    textAlign: 'center', 
    borderRadius: 10, 
    marginLeft: 0, 
   
  }, 
 
  backgroundimage:{

    width:250,
    height:200,

  }
});
