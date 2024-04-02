import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Appbar } from "react-native-paper"; // Importing Appbar component from react-native-paper library
import { useNavigation } from "@react-navigation/native"; // Importing useNavigation hook from @react-navigation/native

export const ShortStory = () => {
  const navigation = useNavigation(); // Initializing navigation using useNavigation hook
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightblue" }}>
      <Appbar.Header style={styles.appbar}>
      <Appbar.BackAction onPress={() => navigation.goBack()} color="white"/>
      <Appbar.Content
        title="Short Stories"
        titleStyle={styles.title}
      />
        {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      
      <ScrollView>
        <View style={styles.TopicView}>
          <Text style={styles.TopicText}>Dog and Cat</Text>
        </View>
        <View style={styles.ContentView}>
          <Text style={styles.Content}>
            We are celebrating Asian Pacific American Heritage Month with
            Krystal and other members of our Theatre Troupe today, and learning
            about the ukulele! A small guitar-like instrument, the ukulele is a
            member of the lute family of instruments and was introduced to
            Hawaii by Portuguese immigrants from Madeira. Join us as we learn
            about one of our favorite instruments in this singalong!
          </Text>
        </View>
        <View style={styles.TopicView}>
          <Text style={styles.TopicText}>Dog and Cat</Text>
        </View>
        <View style={styles.ContentView}>
          <Text style={styles.Content}>
            We are celebrating Asian Pacific American Heritage Month with
            Krystal and other members of our Theatre Troupe today, and learning
            about the ukulele! A small guitar-like instrument, the ukulele is a
            member of the lute family of instruments and was introduced to
            Hawaii by Portuguese immigrants from Madeira. Join us as we learn
            about one of our favorite instruments in this singalong!
          </Text>
        </View>
        <View style={styles.TopicView}>
          <Text style={styles.TopicText}>Dog and Cat</Text>
        </View>
        <View style={styles.ContentView}>
          <Text style={styles.Content}>
            We are celebrating Asian Pacific American Heritage Month with
            Krystal and other members of our Theatre Troupe today, and learning
            about the ukulele! A small guitar-like instrument, the ukulele is a
            member of the lute family of instruments and was introduced to
            Hawaii by Portuguese immigrants from Madeira. Join us as we learn
            about one of our favorite instruments in this singalong!
          </Text>
        </View>
        <View style={styles.TopicView}>
          <Text style={styles.TopicText}>Dog and Cat</Text>
        </View>
        <View style={styles.ContentView}>
          <Text style={styles.Content}>
            We are celebrating Asian Pacific American Heritage Month with
            Krystal and other members of our Theatre Troupe today, and learning
            about the ukulele! A small guitar-like instrument, the ukulele is a
            member of the lute family of instruments and was introduced to
            Hawaii by Portuguese immigrants from Madeira. Join us as we learn
            about one of our favorite instruments in this singalong!
          </Text>
        </View>
        <View style={styles.TopicView}>
          <Text style={styles.TopicText}>Dog and Cat</Text>
        </View>
        <View style={styles.ContentView}>
          <Text style={styles.Content}>
            We are celebrating Asian Pacific American Heritage Month with
            Krystal and other members of our Theatre Troupe today, and learning
            about the ukulele! A small guitar-like instrument, the ukulele is a
            member of the lute family of instruments and was introduced to
            Hawaii by Portuguese immigrants from Madeira. Join us as we learn
            about one of our favorite instruments in this singalong!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: 'green',
      },
      title: {
        fontSize: 28,
        color: 'white',
        fontWeight:"bold",
      },
  
  TopicView: {
    marginTop: 20,
    marginBottom: 10,
  },
  TopicText: {
    color: "black",
    fontSize: 25,
    fontWeight: "500",
    paddingLeft: 30,
  },
  ContentView: {
    marginTop: 5,
    marginBottom: 5,
  },
  Content: {
    color: "black",
    fontSize: 20,
    fontWeight: "300",
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: "justify",
  },
});
