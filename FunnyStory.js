import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const FunnyStory = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/ShortStory.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <Appbar.Header style={styles.appbar}>
              <Appbar.BackAction
                onPress={() => navigation.goBack()}
                color="white"
              />
              <Appbar.Content title="Funny Stories" titleStyle={styles.title} />
            </Appbar.Header>

            <ScrollView>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Mischievous Dog</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Max, the mischievous dog, had a peculiar habit of stealing
                  socks and burying them in the backyard. Each morning, his
                  owner would find a new collection of socks hidden beneath the
                  rose bushes, much to their bemusement. Despite numerous
                  attempts to curb Max's thieving ways, the cunning canine
                  always found new hiding spots for his prized possessions.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Cunning Cat</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Whiskers, the cunning cat, had a knack for outsmarting the
                  neighborhood dogs with her stealthy maneuvers. Whether it was
                  sneaking past the sleeping watchdog or swiping treats from
                  under their noses, Whiskers always had the upper paw. With a
                  flick of her tail and a mischievous gleam in her eye, she
                  ruled the streets with an iron paw and a velvet paw.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Laughing Monkey</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Chuckles, the laughing monkey, had a contagious giggle that
                  echoed through the jungle. Whether swinging from vine to vine
                  or playing pranks on unsuspecting tourists, Chuckles brought
                  joy wherever he went. With a mischievous twinkle in his eyes
                  and a banana in hand, he was the life of the party in the lush
                  green canopy.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Silly Squirrel</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Nutmeg, the silly squirrel, had a penchant for acorn cap hats
                  and leaf pile forts. With boundless energy and a dash of
                  imagination, Nutmeg turned everyday activities into whimsical
                  adventures. Whether performing acrobatic stunts or hosting tea
                  parties for woodland critters, Nutmeg's antics always brought
                  smiles to those around.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Playful Penguin</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  In the frigid expanse of Antarctica, there lived a penguin
                  named Waddle, known for his playful antics and boundless
                  enthusiasm. With his sleek black and white feathers, Waddle
                  glided effortlessly across the ice, bringing laughter to all
                  who watched. His infectious energy knew no bounds as he
                  performed synchronized swimming routines and belly-slid down
                  icy slopes with gleeful abandon. But Waddle's charm extended
                  beyond his fellow penguins; he had a knack for making friends
                  with the seals that lounged on the ice floes. With his
                  charismatic personality, he bridged the gap between species,
                  proving that friendship knows no boundaries in the frozen
                  wilderness. As seasons changed, Waddle remained a steadfast
                  symbol of joy and companionship in the icy landscape. His
                  laughter echoed through the frosty air, reminding all who
                  heard it that even in the harshest of environments, the warmth
                  of friendship can thrive. Waddle's playful spirit served as a
                  reminder of the power of connection and the enduring magic of
                  the Antarctic wilderness.
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
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust opacity here
  },
  appbar: {
    backgroundColor: "yellowgreen",
  },
  title: {
    fontSize: 28,
    color: "white",
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

export default FunnyStory;
