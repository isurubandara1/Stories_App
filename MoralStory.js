import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const MoralStory = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={require('./assets/ShortStory.jpg')} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Appbar.Header style={styles.appbar}>
              <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
              <Appbar.Content title="Moral Stories" titleStyle={styles.title} />
            </Appbar.Header>

            <ScrollView>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Honest Woodcutter</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Once upon a time, there was a woodcutter who accidentally dropped his axe into a river. Distraught, he sat by the riverbank, lamenting his loss. Suddenly, a fairy appeared and asked him what was wrong. When he explained his situation, the fairy dived into the river and emerged with a golden axe. But the woodcutter refused it, saying it wasn't his. Impressed by his honesty, the fairy rewarded him with his axe and the golden one as well.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Greedy Dog</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  A dog stole a piece of meat from a butcher's shop and ran away with it. On his way home, he had to cross a bridge over a river. Seeing his reflection in the water, he thought it was another dog with a bigger piece of meat. Greedy and envious, he barked at the 'other dog', causing his piece of meat to fall into the river. The dog learned that greed leads to loss.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Boy Who Cried Wolf</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  A shepherd boy repeatedly lied about seeing a wolf attacking his sheep just for fun. Villagers rushed to help him each time, only to find out there was no wolf. When a real wolf appeared and the boy cried for help, no one believed him anymore. The moral: Don't lie, or people won't trust you when you're telling the truth.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Tortoise and the Hare</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  In a race between a fast hare and a slow tortoise, the hare was overconfident and took a nap while the tortoise kept plodding along. When the hare woke up, he found the tortoise had won the race. The moral: Slow and steady wins the race.
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

export default MoralStory;
