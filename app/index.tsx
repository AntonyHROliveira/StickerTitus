import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen.
      </Link>
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
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#FFF",
  },
});
