import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

export const ShortStory = (z) => {
       return (
           <SafeAreaView style={{ backgroundColor:"lightblue", height: "100%"}}>
            <View style={styles.appbar}><Text style={styles.appbarText}>Short Stories</Text></View>

            <ScrollView>
            <View style={styles.TopicView}><Text style={styles.TopicText}>Dog and Cat</Text></View>
            <View style={styles.ContentView}><Text style={styles.Content}>We are celebrating Asian Pacific American Heritage Month with Krystal and other members of our Theatre Troupe today, and learning about the ukulele! A small guitar-like instrument, the ukulele is a member of the lute family of instruments and was introduced to Hawaii by Portuguese immigrants from Madeira. Join us as we learn about one of our favorite instruments in this singalong!</Text></View>

            <View style={styles.TopicView}><Text style={styles.TopicText}>Dog and Cat</Text></View>
            <View style={styles.ContentView}><Text style={styles.Content}>We are celebrating Asian Pacific American Heritage Month with Krystal and other members of our Theatre Troupe today, and learning about the ukulele! A small guitar-like instrument, the ukulele is a member of the lute family of instruments and was introduced to Hawaii by Portuguese immigrants from Madeira. Join us as we learn about one of our favorite instruments in this singalong!</Text></View>
           
            <View style={styles.TopicView}><Text style={styles.TopicText}>Dog and Cat</Text></View>
            <View style={styles.ContentView}><Text style={styles.Content}>We are celebrating Asian Pacific American Heritage Month with Krystal and other members of our Theatre Troupe today, and learning about the ukulele! A small guitar-like instrument, the ukulele is a member of the lute family of instruments and was introduced to Hawaii by Portuguese immigrants from Madeira. Join us as we learn about one of our favorite instruments in this singalong!</Text></View>
           
            <View style={styles.TopicView}><Text style={styles.TopicText}>Dog and Cat</Text></View>
            <View style={styles.ContentView}><Text style={styles.Content}>We are celebrating Asian Pacific American Heritage Month with Krystal and other members of our Theatre Troupe today, and learning about the ukulele! A small guitar-like instrument, the ukulele is a member of the lute family of instruments and was introduced to Hawaii by Portuguese immigrants from Madeira. Join us as we learn about one of our favorite instruments in this singalong!</Text></View>
           
            <View style={styles.TopicView}><Text style={styles.TopicText}>Dog and Cat</Text></View>
            <View style={styles.ContentView}><Text style={styles.Content}>We are celebrating Asian Pacific American Heritage Month with Krystal and other members of our Theatre Troupe today, and learning about the ukulele! A small guitar-like instrument, the ukulele is a member of the lute family of instruments and was introduced to Hawaii by Portuguese immigrants from Madeira. Join us as we learn about one of our favorite instruments in this singalong!</Text></View>
            </ScrollView>

           </SafeAreaView>
       );
}


const styles = StyleSheet.create({
    appbar:{
        backgroundColor:"blue",
        height:"10%",
        justifyContent:"center",
        alignItems:"center",
    },

    appbarText:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        
    },

    TopicView:{
        marginTop:20,
        marginBottom:10,
        
    },

    TopicText:{
        color:"black",
        fontSize:25,
        fontWeight:"500",
        paddingLeft:30,
    },

    ContentView:{
        marginTop:5,
        marginBottom:5,
        
    },

    Content:{
        color:"black",
        fontSize:20,
        fontWeight:"300",
        paddingLeft:25, 
        paddingRight:25,
        textAlign:"justify",
    },
    
});