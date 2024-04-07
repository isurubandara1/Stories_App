import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, SafeAreaView } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const LoveStory = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={require('./assets/ShortStory.jpg')} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Appbar.Header style={styles.appbar}>
              <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
              <Appbar.Content title="Love Stories" titleStyle={styles.title} />
            </Appbar.Header>

            <ScrollView>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>Love at First Sight</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Sarah and John met in a crowded café, their eyes locking in an instant. Sparks flew as they shared their first cup of coffee, and they knew it was love at first sight. Their conversation flowed effortlessly, as if they had known each other for years. From that day on, they became inseparable, exploring the city hand in hand and dreaming of a future together filled with love and laughter.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Unforgettable Proposal</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Mark planned the perfect proposal atop a scenic mountain, where he got down on one knee and asked Emily to be his forever. Tears of joy streamed down her face as she said yes. It was a moment they would cherish for a lifetime, a symbol of their unwavering love and commitment to each other. As they stood overlooking the breathtaking landscape, they knew that their love would only continue to grow stronger with each passing day.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>A Love Across Borders</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Maria and Carlos defied all odds, their love transcending borders and cultures. Despite the distance, their hearts remained intertwined, and their bond grew stronger with each passing day. They communicated through letters and video calls, counting down the days until they could be reunited once again. When they finally met in person, it was as if no time had passed at all. Their love knew no boundaries, and they knew that together, they could conquer anything.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>The Eternal Promise</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Anna and Michael exchanged vows under a canopy of stars, pledging to love and cherish each other for all eternity. Their love was a beacon of hope in a world filled with uncertainty. Through the ups and downs of life, they remained steadfast in their commitment to each other, their love only growing stronger with each passing year. They knew that no matter what the future held, they would face it together, hand in hand, forever and always.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>A Second Chance at Love</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  After years apart, Emily and David found each other again, realizing that their love had never faded. With open hearts and a renewed commitment, they embraced their second chance at love. They cherished every moment together, making up for lost time and creating new memories to last a lifetime. They knew that their love was worth fighting for, and they were determined to make it last forever.
                </Text>
              </View>
              <View style={styles.TopicView}>
                <Text style={styles.TopicText}>Love Beyond Time</Text>
              </View>
              <View style={styles.ContentView}>
                <Text style={styles.Content}>
                  Sarah and James's love spanned centuries, their souls destined to find each other in every lifetime. With each reunion, their love grew stronger, defying the bounds of time. They navigated through different eras and faced countless challenges, but their love remained unwavering throughout it all. They knew that their connection was eternal, transcending the limitations of the physical world. Together, they were bound by a love that would last for eternity.
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

export default LoveStory;
