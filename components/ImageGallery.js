import { View,Text ,StyleSheet,Image} from "react-native";
import React from 'react';
import GridImageView from 'react-native-grid-image-viewer';
import { useNavigation } from "@react-navigation/native";

import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function ImageGallery(){
const navigation = useNavigation();
 


    return <View style = {styles.container}>
       <GridImageView
       transparent = {1}
        data={[
          'http://i.imgur.com/XP2BE7q.jpg',
          'http://i.imgur.com/XP2BE7q.jpg',
          'http://i.imgur.com/XP2BE7q.jpg',
          'http://i.imgur.com/XP2BE7q.jpg',
          'http://i.imgur.com/XP2BE7q.jpg',
          
        ]}
      />
    
      
      
    </View>

}
export default ImageGallery;
const styles = StyleSheet.create({
    container:{
        flex:1,
       
       // flexDirection:'row',
       // justifyContent:'center',
       // alignItems:'center'
    },
    image:{
        width:80,
        height:80,
        margin:2
    },
    gridView:{
      backgroundColor:'black',
      margin:20
    }

});