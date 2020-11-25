import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
ads: {
position: "absolute",
bottom: 10,
},

buggedButton: {
position: "absolute",
marginTop: 430,
marginLeft: 135,
alignContent: "center",
borderWidth: 15,
borderColor: '#e5c45d',
backgroundColor: '#e5c45d',
padding: 15,
borderRadius: 100,
},

coinLogo:{
margin: 60,
marginLeft: 35
},

container: {
backgroundColor: "#f9e198",
flex: 1
},

flipACoin: {
color: "#121212",
fontSize: 30,
marginTop: 5,
marginLeft: 70
},

flippedText: { 
fontSize: 40,
margin: 150,
marginTop: -60,
width: 500,
fontFamily: "porky",
color: "black",
},


image: {
alignItems: "center",
margin: 35,
marginTop: 50,
},

saveButton: {
marginTop: -80,
alignContent: "center",
borderWidth: 2,
borderColor: '#e5c45d',
backgroundColor: '#e5c45d',
padding: 25,
margin: 30,
borderRadius: 100,
},

saveButtonText: {
color: '#000',
fontSize: 20,
textAlign: 'center',
fontFamily: "porky"
},

text: {
textAlign: 'center',
color: "#121212",
},
});


export default styles