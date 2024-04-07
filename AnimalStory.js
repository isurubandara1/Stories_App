import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const AnimalStory = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={require('./assets/ShortStory.jpg')} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Appbar.Header style={styles.appbar}>
              <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
              <Appbar.Content title="Animal Stories" titleStyle={styles.title} />
            </Appbar.Header>

            <ScrollView>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Brave Little Mouse</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  In a forest far away, there lived a brave little mouse named Milo. Despite his small size, Milo had a heart as big as a lion's and would do anything to protect his family and friends. One day, when a hungry owl threatened to devour his loved ones, Milo sprang into action, using his wit and cunning to outsmart the predator and save the day.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Curious Squirrel</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Sammy the squirrel was always curious about the world around him. Every day, he would venture out into the forest, eager to explore new sights and sounds. But one day, his curiosity got the better of him when he stumbled upon a mysterious object hidden deep in the woods. Determined to uncover its secrets, Sammy embarked on an adventure that would change his life forever.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Friendly Rabbit</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Rosie the rabbit was the friendliest creature in the meadow. With a warm smile and a kind heart, she welcomed everyone she met with open arms. But when a group of strangers moved into the neighborhood, Rosie's kindness was put to the test. Would she be able to bridge the gap between them and her fellow forest dwellers, or would fear and mistrust tear them apart?
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Loyal Dog</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Max the dog was the most loyal companion anyone could ask for. From fetching sticks to protecting his family from danger, he was always there when they needed him most. But when his owner fell ill and was unable to care for him, Max faced his biggest challenge yet. Would he be able to find a new home and continue to spread joy and happiness wherever he went?
                </Text>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust opacity here
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
    color: "white", // Text color should match the overlay background color
    fontSize: 25,
    fontWeight: "400",
    paddingLeft: 30,
  },
  ContentView: {
    marginTop: 5,
    marginBottom: 5,
  },
  Content: {
    color: "white", // Text color should match the overlay background color
    fontSize: 21,
    fontWeight: "400",
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: "justify",
  },
});

export default AnimalStory;
