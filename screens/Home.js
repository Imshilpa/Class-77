import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,SafeAreaView,Platform,StatusBar} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
               <SafeAreaView style = {styles.droidSafeArea}/>
               <View style={styles.titleBar}>
                <Text style={styles.titleText}>ISS Tracker App</Text>

                <TouchableOpacity style={styles.routeCard}>
                   <Text style={styles.routeText}>ISS Location</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                <Text style={styles.routeText}>Meteors</Text> 
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    titleBar:{
       flex:0.15,
       justifyContent:"center",
       alignItems:"center",
    },
    titleText:{
      fontSize:25,
      fontWeight:"bold",
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"
    },
    routeText:{
        fontSize:30,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30
    }
})