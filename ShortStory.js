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

export const ShortStory = () => {
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
              <Appbar.Content title="Short Stories" titleStyle={styles.title} />
            </Appbar.Header>

            <ScrollView>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Forgotten Key</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  In a forgotten corner of a quaint village, nestled beneath the
                  roots of an ancient oak tree, a rusted key lies half-buried in
                  the earth. Generations pass, and the key becomes a mere relic
                  of the past, its purpose lost to time. Until one fateful day,
                  a young girl named Eliza unearths the key while playing in the
                  fields. Intrigued by its enigmatic appearance, she takes it to
                  the village elder, who recalls the tales of a hidden treasure
                  locked away by a long-forgotten ancestor. With determination
                  blazing in her eyes, Eliza embarks on a quest to uncover the
                  secrets guarded by the mysterious key, unaware of the journey
                  of self-discovery that awaits her.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Moonlit Dance</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Beneath the silver glow of a full moon, a clearing in the
                  heart of an ancient forest comes alive with a wondrous
                  spectacle. Creatures of the night—foxes, rabbits, and
                  owls—gather in a harmonious dance, their movements
                  synchronized to the ethereal melody of the forest. One night,
                  a lost child named Peter wanders into the enchanted grove,
                  drawn by the distant strains of music. As he watches in awe,
                  the creatures pause their dance to welcome him, sensing his
                  pure heart. Together, they weave through the moonlit glade,
                  Peter's laughter joining the symphony of nature, forging an
                  unbreakable bond between the human world and the enchanting
                  realm of the forest.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Last Library</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Deep within the crumbling ruins of a once-great city, amidst
                  the echoes of a forgotten civilization, stands the last
                  bastion of knowledge: the Last Library. Its shelves, though
                  dust-covered and weather-worn, hold the remnants of humanity's
                  collective wisdom. In this desolate world, where the remnants
                  of technology are mere relics, a solitary figure, known only
                  as the Librarian, tirelessly tends to the decaying archives,
                  preserving the fragile pages of books long abandoned by time.
                  With each passing day, the Librarian's task grows more
                  daunting as the world outside descends further into chaos.
                  Yet, fueled by an unwavering determination to safeguard the
                  treasures within, they press on, a beacon of hope amidst the
                  encroaching darkness. As whispers of the Last Library spread
                  across the wasteland, seekers of knowledge brave perilous
                  journeys to reach its hallowed halls, seeking answers to the
                  mysteries of the past and a glimmer of hope for the future.
                  For within the confines of those weathered walls lies the key
                  to humanity's survival, waiting to be discovered by those
                  brave enough to seek it.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Whispering Woods</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Deep within the heart of the Whispering Woods, where the
                  ancient trees stand tall and proud, their branches swaying
                  gently in the breeze, lies a grove shrouded in mystery.
                  Legends tell of whispered secrets that drift among the leaves,
                  spoken by the spirits of the forest to those who dare to
                  listen. It is said that within this enchanted grove, one can
                  find answers to questions long forgotten and guidance for the
                  weary soul. One misty morning, a curious traveler named Ava
                  ventures into the depths of the Whispering Woods, drawn by
                  tales of the grove's mystical powers. With each step, the air
                  grows thick with anticipation, and the soft murmur of the
                  trees beckons her closer. As she enters the sacred grove, a
                  sense of tranquility washes over her, and she closes her eyes,
                  allowing the whispers to envelop her. In that moment, the
                  secrets of the forest reveal themselves to Ava, guiding her on
                  a journey of self-discovery and enlightenment amidst the
                  ancient wisdom of the Whispering Woods.
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

export default ShortStory;
