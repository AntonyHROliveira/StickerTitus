import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <StatusBar style="auto"></StatusBar>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#25292E",
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    color:"#FFF",
  },
});
