import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";


import {
  AdMobBanner,
} from 'expo-ads-admob';

import styles from "../comp/styles"



function Home({navigation}) {
return (
    <View style={styles.container}>
  
    <Image source={require("../assets/coinLogo.png")} style={styles.coinLogo}/>
  
  <TouchableOpacity style={styles.saveButton}
    onPress={()=> {    let side = Math.floor(Math.random()*2)
      if (side === 0){
        navigation.navigate('heads')
      } else {
        navigation.navigate('tails')
      }}}>
  <Text style={styles.saveButtonText}>Flip a coin!</Text>
  </TouchableOpacity>
  
  <Text style={styles.text}>&quot;You make your own luck&quot;</Text>
  
    <AdMobBanner style={styles.ads}
    bannerSize="fullBanner"
    adUnitID="ca-app-pub-3940256099942544/6300978111"
    servePersonalizedAds/>
  </View>
);
}
export default Home;
