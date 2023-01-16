import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    
    }
    
  }

  render(){  
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
  },
  box1:{
    backgroundColor:'red',
    height:250,
    width:150,
  },
  box2:{
    backgroundColor:'yellow',
    height:250,
    width:150,
  },
  box3:{
    backgroundColor:'green',
    height:250,
    width:150,
  },
  box4:{
    backgroundColor:'blue',
    height:250,
    width:150,
  },
  
  
})

export default App;

