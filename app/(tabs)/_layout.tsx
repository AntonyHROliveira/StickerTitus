// import { Stack } from "expo-router";
// import React from "react";

// 1° Versão \\
//=======================================================================================================\\
// export default function RootLayout() {
//   return (
//     <Stack>
//       {/* <Stack.Screen name="index" options={{ title: "Home" }} /> */}
//       {/* <Stack.Screen name="index" options={{headerLeft: () => <></>, title: "Home" }}/> */}
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
//       {/* <Stack.Screen name="about" options={{ title: "About" }} /> */}
//       <Stack.Screen name="+not-found" />
//     </Stack>
//     /*Explicando: options={{headerLeft: () => <></>, title: "Home" }}
//     -> Para que quando estiver na página Home não aparecer a seta para retorna a outra página
//     */

//   );
// }
//=======================================================================================================\\

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: "#FFD33D",
      headerStyle: { backgroundColor: "#25292E" },
      headerShadowVisible: false,
      headerTintColor: "#FFF",
      tabBarStyle: {backgroundColor: "#25292E" },
       }}>
        
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-outline" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "information-circle" : "information-circle-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
