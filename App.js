import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function App() {

  const [height,setHeight] = useState(0);
  const [weigth,setWeigth] = useState(0);
  const [result,setResult] = useState(0);

  const calbmi = () => {
    const heightFormatter = height/100;
    let bmi= weigth / (heightFormatter*heightFormatter);
    bmi=bmi.toFixed(2);
    setResult(bmi)

  }


  return (
    <View style={styles.container}>
      <Text>Pleaes add your height in cm</Text>
      <TextInput style = {styles.inputStyle}
          value = {height}
          onChangeText={text => setHeight(text)}
      />
      <Text>Pleaes add your weigth in cm</Text>
      <TextInput style={styles.inputStyle}
        value = {weigth}
        onChangeText={text => setWeigth(text)}
      />
    
      <TouchableOpacity onPress={calbmi} style={styles.buttonStyle}> result </TouchableOpacity>
      <Text> result: {result} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
inputStyle:{
  backgroundColor:'#0099cc',
  width:'50%',
  borderRadius:20,
  paddingHorizontal:10,
  paddingVertical:10,
  marginTop:6,
  fontSize:16,
  textAlign:'center',
  
},
buttonStyle:{
  backgroundColor:'#0099',
  width:'20%',
  borderRadius:20,
  textAlign:'center',
  paddingHorizontal:10,
  paddingVertical:12,
  marginVertical:20,

}
  
,

  container: {
    flex: 1,
    backgroundColor: '#9900cc',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50,
  },
});
