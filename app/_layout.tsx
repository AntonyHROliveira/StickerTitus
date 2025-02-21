// import { Stack } from "expo-router";
// import React from "react";

// export default function RootLayout() {
//   return (
//     <Stack>
//       {/* <Stack.Screen name="index" options={{ title: "Home" }} /> */}
//       <Stack.Screen name="index" options={{headerLeft: () => <></>, title: "Home" }}/>
//       <Stack.Screen name="about" options={{ title: "About" }} />
//     </Stack>
//     /*Explicando: options={{headerLeft: () => <></>, title: "Home" }}
//     -> para que quando estiver na página Home não aparecer a seta para retorna a outra página
//     */

//   );
// }





// << 2° Versão >> //
//================//
// import { Tabs } from "expo-router";
// import React from "react";

// // Criando navegação do tipo bar (Tabs)
// export default function TabLayout() {
//   return (
//     <Tabs>
//       {/* <Tabs.Screen name="index" options={{ title: "Home" }} /> */}
//       <Tabs.Screen name="index" options={{ title: "Home" }}/>
//       <Tabs.Screen name="about" options={{ title: "AboutS" }}/>
    
//     </Tabs>
//     /*Explicando: options={{headerLeft: () => <></>, title: "Home" }}
//     -> para que quando estiver na página Home não aparecer a seta para retorna a outra página
//     */

//   );
// }




// << 3° Versão >> //
//================//

// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       <Stack.Screen name="+not-found" />
//     </Stack>
//   );
// }



// << 4° Versão >> //
//================//

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
 
export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
      {/** config a cor do texto das informaçoes do aparelho (sinal, hora, bateria, etc ) */}
    </>
  );
}
 