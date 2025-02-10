import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ title: "Home" }} /> */}
      <Stack.Screen name="index" options={{headerLeft: () => <></>, title: "Home" }}/>
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
    /*Explicando: options={{headerLeft: () => <></>, title: "Home" }}
    -> Para que quando estiver na página Home não aparecer a seta para retorna a outra página
    */

  );
}
