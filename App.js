import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    
    }
    
  }

  render(){  
  return (
    <View style={styles.container}>
   
    </View>
  );
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue'
  },
  
})

export default App;

