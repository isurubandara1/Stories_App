import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const LifeStory = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={require('./assets/ShortStory.jpg')} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Appbar.Header style={styles.appbar}>
              <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
              <Appbar.Content title="Life Stories" titleStyle={styles.title} />
            </Appbar.Header>

            <ScrollView>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>Finding Purpose</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Emily had always felt lost, unsure of her place in the world. She spent years drifting through jobs and relationships, searching for something meaningful. It wasn't until she stumbled upon a volunteer opportunity at a local shelter that she found her true calling. Helping those in need gave her a sense of purpose she had never experienced before, and she dedicated herself wholeheartedly to making a positive impact on the lives of others.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>Overcoming Adversity</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  James had always faced adversity head-on, but nothing could have prepared him for the challenges that lay ahead. A devastating diagnosis shook his world to its core, threatening to rob him of everything he held dear. But instead of succumbing to despair, James chose to fight. With unwavering determination and the support of his loved ones, he battled through the darkest days of his life and emerged stronger on the other side.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>Embracing Change</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Sarah had always been a creature of habit, afraid to step outside her comfort zone. But when unexpected circumstances forced her to confront her fears, she discovered that change wasn't something to be feared, but embraced. Each new experience brought with it the opportunity for growth and self-discovery, and Sarah found herself blossoming in ways she never thought possible.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Power of Forgiveness</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Tom had spent years nursing a grudge against his estranged father, unable to let go of the pain from his past. But when a chance encounter brought them face to face after years of silence, Tom realized that holding onto his anger was only hurting himself. In that moment, he made the difficult choice to forgive, not for his father's sake, but for his own. And in doing so, he found a sense of peace and closure he never thought possible.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>Following Dreams</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Rachel had always dreamed of seeing the world, but life always seemed to get in the way. It wasn't until she found herself at a crossroads, facing the prospect of a mundane existence she knew she didn't want, that she finally decided to take the plunge. Armed with little more than a backpack and a sense of adventure, Rachel set off on a journey that would change her life forever, opening her eyes to the beauty and wonder of the world around her.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>Lessons Learned</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Mark had made his fair share of mistakes in life, but each one had taught him valuable lessons he wouldn't trade for anything. From the pain of heartbreak to the sting of failure, Mark had learned that life was as much about the lows as it was about the highs. But through it all, he had emerged a stronger, wiser person, ready to face whatever challenges the future might hold.
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

export default LifeStory;
