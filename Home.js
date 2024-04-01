import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <View style={styles.appbar}>
          <Text style={styles.appbarText}>Stories App</Text>
        </View>

        <View style={styles.largeImageContainer}>
          <Image source={require('./assets/home.png')} style={styles.largeImage} />
        </View>

        <ScrollView style={styles.imageContainer}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.navigate('ShortStory')} style={styles.imageButton}>
              <Text style={styles.imageButtonText}>Short Stories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton}>
              <Text style={styles.imageButtonText}>Animals Stories</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.imageButton}>
              <Text style={styles.imageButtonText}>Moral Stories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton}>
              <Text style={styles.imageButtonText}>Life Stories</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.imageButton}>
              <Text style={styles.imageButtonText}>Funny Stories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageButton}>
              <Text style={styles.imageButtonText}>Love Stories</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "yellowgreen",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  appbarText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  largeImageContainer: {
    marginTop: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  largeImage: {
    width: "70%",
    height: 250,
    borderRadius: 20,
  },
  imageContainer: {
    flexDirection: "column",
    marginTop: 20,
    height: 250,
    marginBottom: 40,
  },
  row: {
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  imageButton: {
    width: 150,
    height: 120,
    backgroundColor: "yellow",
    borderColor: "white",
    borderWidth: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: "center",
  }
});

export default Home;