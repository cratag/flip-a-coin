import React from "react";
import {TouchableOpacity, View, Text, Image } from "react-native";
import styles from "../comp/styles"

import {
  AdMobBanner,
} from 'expo-ads-admob';


function heads({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/heads.png")}
          style={styles.image}
        ></Image>
        <View style={styles.flippedTextBorder}>
        <Text style={styles.flippedText}> Heads </Text>
        </View>
        <TouchableOpacity style={styles.buggedButton}
        onPress={()=> {navigation.navigate('Home')}}>
        <Text style={styles.saveButtonText}>Flip again!</Text>
      </TouchableOpacity>
      <AdMobBanner style={styles.ads}
    bannerSize="fullBanner"
    adUnitID="ca-app-pub-3940256099942544/6300978111"
    servePersonalizedAds // true or false
    />
      </View>
  );
}


export default heads;
