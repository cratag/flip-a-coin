import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
ads: {
position: "absolute",
bottom: 10,
},

buggedButton: {
alignSelf: "center",
borderWidth: 15,
borderColor: '#e5c45d',
backgroundColor: '#e5c45d',
padding: 15,
borderRadius: 100,
},

coinLogo:{
    alignSelf: "center",
    margin: "10%",
    marginBottom: "3%",    
},

container: {
backgroundColor: "#f9e198",
height: "100%",
width: "100%"
},

flipACoin: {
color: "#121212",
fontSize: 30,
marginTop: 5,
marginLeft: 70
},

flippedText: { 
fontSize: 60,
alignSelf: "center",
fontFamily: "porky",
color: "black",
},


image: {
alignSelf: "center",
marginTop: "5%",
},

saveButton: {
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