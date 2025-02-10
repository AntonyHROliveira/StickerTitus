import { StyleSheet, View } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";
// Página para quando a página não encontrada e retorna para a página Home.

export default function NotFoundScreen() {
  return (
      <>
      {/* <></> => tag vazia */}
      <Stack.Screen options={{ title: "Oops! Not Found." }}/>
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
        {/* href="/" => é o link para retornar para a página Home */}
            Go to Home screen.
        </Link>
      </View>
      </>
        /*OBS:
        -> No react ele só importa um container principal por vez dentro de um return();
        Neste caso dentro da function NotFoundScreen() existe dois container principal que são:
        <Stack.Screen/> e <View></View>
        por isso criar uma tag vazia e transformando ela no container principal para ela abraçar tudo.
        */

    
 
  ); 
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#25292E",
    alignItems:"center",
    justifyContent:"center",
  },
  
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#FFF",
  },
});
