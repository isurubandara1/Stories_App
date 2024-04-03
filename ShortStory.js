import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const ShortStory = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('./assets/ShortStory.jpg')} style={styles.backgroundImage}>
        <Appbar.Header style={styles.appbar}>
          <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
          <Appbar.Content title="Short Stories" titleStyle={styles.title} />
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
          
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  appbar: {
    backgroundColor: 'yellowgreen',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
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

export default ShortStory;