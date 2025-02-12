//import { View, StyleSheet } from "react-native";
//import { Link } from "expo-router"; <- so necessario para a 1° versão

// 1° Versão //
//====================================================================//
// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home screen.</Text>
//       <Link href="/about" style={styles.button}>
//         Go to About screen.
//       </Link>
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#25292E",
//   },
//   text: {
//     color: "#FFF",
//   },
//   button: {
//     fontSize: 20,
//     textDecorationLine: "underline",
//     color: "#FFF",
//   },
// });
//====================================================================//





// import { View, StyleSheet } from "react-native";
// import { Image } from "expo-image";


// 2° Versão //
//====================================================================//
// const PlaceholderImage = require("@/assets/images/image_dog.jpg");
// export default function Index() {
//   return <View style={styles.container}>
//     <View style={styles.imageContainer}>
//       <Image source={PlaceholderImage} style={styles.image}/>
//     </View>
//   </View>

// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#25292E",
//   },
//   imageContainer:{
//     flex: 1,
//   },
//   image:{
//     width: 320,
//     height: 440,
//     borderRadius: 18,
//   },
// });
//====================================================================//






// import { View, StyleSheet } from "react-native";
// import ImageViewer from "@/components/ImageViewer";


// 3° Versão //
//====================================================================//
// const PlaceholderImage = require("@/assets/images/image_dog.jpg");
// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage}/>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#25292E",
//   },
//   imageContainer:{
//     flex: 1,
//   },
  
// });
//====================================================================//






// import { View, StyleSheet } from "react-native";
// import ImageViewer from "@/components/ImageViewer";
// import Button from "@/components/Button";


// 4° Versão //
//====================================================================//
// const PlaceholderImage = require("@/assets/images/image_dog.jpg");
// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage}/>
//         <Button label="Click aqui"/>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#25292E",
//   },
//   imageContainer:{
//     flex: 1,
//   },
  
// });
//====================================================================//







import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";


// 5° Versão //
//====================================================================//
const PlaceholderImage = require("@/assets/images/image_dog.jpg");
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
        <View style={styles.footerConatiner}>
          <Button label="Choose a photo"/>
          <Button label="Use this photo"/>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  imageContainer:{
    flex: 1,
    paddingTop:28,
  },
  footerConatiner:{
    flex:1/3,// <- para usar 33% da tela.
    alignItems:"center",   
  },
  
});
//====================================================================//