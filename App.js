//https://aboutreact.com/image-icon-inside-the-react-native-button/
import { StatusBar } from 'expo-status-bar';
import {TextInput,TouchableOpacity, StyleSheet,Image, Text, View } from 'react-native';
//import Spinner from 'react-native-loading-spinner-overlay';


const App = () => {

  const handlerLongClick = () => {
    //handler for Long Click
    alert('Button Long Pressed');
  };

  const handlerClick = () => {
    //handler for Long Click
    alert('Button Pressed');
  };

  //const [loading, setLoading] = useState(false);

 /* const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };*/
  return (
    <View style={styles.container}>
      <TouchableOpacity onLongPress={handlerLongClick} onPress={handlerClick}
      activeOpacity={0.6}
      style={styles.buttonStyle}>
        <Text style = {styles.buttonTextStyle}>LONG PRESS THE BUTTON</Text>
      </TouchableOpacity>
      <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Numeric Values Only"
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'numeric'}
        />
    
      <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Login Using Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonGPlusStyle} 
          activeOpacity={0.5} > 
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle}  />
          <Text style={styles.buttonTextStyle}>
            Login Using Google Plus
          </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "gold",
   padding:10,
   fontSize:25,
   fontStyle:'italic',
   fontWeight:'bold',
  },
  buttonStyle:{
    color:"maroom",
    textAlign:'center',
    fontSize:20,
    fontWeight:'100'
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    width:220,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width:220,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  textInputStyle: {
    width: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 5,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },

});