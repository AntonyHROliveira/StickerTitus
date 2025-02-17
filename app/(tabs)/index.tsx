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

// import { View, StyleSheet } from "react-native";
// import ImageViewer from "@/components/ImageViewer";
// import Button from "@/components/Button";

// 5° Versão //
//====================================================================//
// const PlaceholderImage = require("@/assets/images/image_dog.jpg");
// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage} />
//       </View>
//       <View style={styles.footerConatiner}>
//         <Button label="Choose a photo" theme="primary" />{" "}
//         {/*theme="primary" <- PARA colocar um style proprio neste botão*/}
//         <Button label="Use this photo" />
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
//   imageContainer: {
//     flex: 1,
//     paddingTop: 28,
//   },
//   footerConatiner: {
//     flex: 1 / 3, // <- para usar 33% da tela.
//     alignItems: "center",
//   },
// });
//====================================================================//

// import { View, StyleSheet } from "react-native";
// import ImageViewer from "@/components/ImageViewer";
// import Button from "@/components/Button";
// import * as ImagePicker from "expo-image-picker";

// // 6° Versão //
// //====================================================================//
// const PlaceholderImage = require("@/assets/images/image_dog.jpg");

// export default function Index() {
//   const pickImageAsync = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes:["images"],
//       allowsEditing:true,
//       quality:1,
//     });

//     if (!result.canceled) {
//       console.log(result);
//     }else{
//       alert("You did not select any image.");
//     }

//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage} />
//       </View>
//       <View style={styles.footerConatiner}>
//         <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
//         {/*theme="primary" <- PARA colocar um style proprio neste botão*/}
//         <Button label="Use this photo" />
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
//   imageContainer: {
//     flex: 1,
//     paddingTop: 28,
//   },
//   footerConatiner: {
//     flex: 1 / 3, // <- para usar 33% da tela.
//     alignItems: "center",
//   },
// });
// //====================================================================//

// import { View, StyleSheet } from "react-native";
// import ImageViewer from "@/components/ImageViewer";
// import Button from "@/components/Button";
// import * as ImagePicker from "expo-image-picker";
// import { useState } from "react";

// // 7° Versão //
// //====================================================================//
// const PlaceholderImage = require("@/assets/images/image_dog.jpg");

// export default function Index() {
//   const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

//   const pickImageAsync = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes:["images"],
//       allowsEditing:true,
//       quality:1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//     }else{
//       alert("You did not select any image.");
//     }

//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
//         {/* selectedImage={selectedImage}
//         selectedImage= =>  selectedImage?: string; da Prop da página ImageViewer.tsx
//         {selectedImage} =>  const [selectedImage, setSelectedImage] é o selectedImage da const dessa página.
// */}
//       </View>
//       <View style={styles.footerConatiner}>
//         <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
//         {/*theme="primary" <- PARA colocar um style proprio neste botão*/}
//         <Button label="Use this photo" />
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
//   imageContainer: {
//     flex: 1,
//     paddingTop: 28,
//   },
//   footerConatiner: {
//     flex: 1 / 3, // <- para usar 33% da tela.
//     alignItems: "center",
//   },
// });
// //====================================================================//












// import { View, StyleSheet } from "react-native";
// import ImageViewer from "@/components/ImageViewer";
// import Button from "@/components/Button";
// import * as ImagePicker from "expo-image-picker";
// import { useState } from "react";
// import IconButton from "@/components/IconButton";
// import CicleButton from "@/components/CicleButton";

// // 8° Versão //
// //====================================================================//
// const PlaceholderImage = require("@/assets/images/image_dog.jpg");

// export default function Index() {
//   const [selectedImage, setSelectedImage] = useState<string | undefined>(
//     undefined
//   );
//   const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

//   const pickImageAsync = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ["images"],
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//       setShowAppOptions(true);
//     } else {
//       alert("You did not select any image.");
//     }
//   };

 

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer
//           imgSource={PlaceholderImage}
//           selectedImage={selectedImage}
//         />
//         {/* selectedImage={selectedImage} 
//         selectedImage= =>  selectedImage?: string; da Prop da página ImageViewer.tsx
//         {selectedImage} =>  const [selectedImage, setSelectedImage] é o selectedImage da const dessa página.*/}
//       </View>

//       {/*abrindo um ternario = {showAppOptions ? <View /> : } => para ocultar esta view  */}
//       {showAppOptions ? (
//         <View style={styles.optionsContainer}>
//           <View style={styles.optionsRow}>
//             <IconButton icon="refresh" label="Reset" onPress={() => {setShowAppOptions(false)}}/>
//             <CicleButton onPress={() => {}} />
//             <IconButton icon="save-alt" label="Save" onPress={() => {}}/>
//           </View>
//         </View>
//       ) : (
//         <View style={styles.footerConatiner}>
//           <Button
//             label="Choose a photo"
//             theme="primary"
//             onPress={pickImageAsync}
//           />
//           {/*theme="primary" <- PARA colocar um style proprio neste botão*/}
//           <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
//         </View>
//       )}
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
//   imageContainer: {
//     flex: 1,
//     paddingTop: 28,
//   },
//   footerConatiner: {
//     flex: 1 / 3, // <- para usar 33% da tela.
//     alignItems: "center",
//   },
//   optionsContainer:{
//     position:"absolute",
//     bottom:80,
//   },
//   optionsRow:{
//     alignItems:"center",
//     flexDirection:"row",
//   },
// });
// //====================================================================//





// import { View, StyleSheet } from "react-native";
// import ImageViewer from "@/components/ImageViewer";
// import Button from "@/components/Button";
// import * as ImagePicker from "expo-image-picker";
// import { useState } from "react";
// import IconButton from "@/components/IconButton";
// import CicleButton from "@/components/CicleButton";

// // 9° Versão //
// //====================================================================//
// const PlaceholderImage = require("@/assets/images/image_dog.jpg");

// export default function Index() {
//   const [selectedImage, setSelectedImage] = useState<string | undefined>(
//     undefined
//   );
//   const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  

//   const pickImageAsync = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ["images"],
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setSelectedImage(result.assets[0].uri);
//       setShowAppOptions(true);
//     } else {
//       alert("You did not select any image.");
//     }
//   };

//  const onReset = () => {setShowAppOptions(false)};
//  const onAddSticker = () => {};
//  const onSaveImageAsync = () => {};

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer
//           imgSource={PlaceholderImage}
//           selectedImage={selectedImage}
//         />
//         {/* selectedImage={selectedImage} 
//         selectedImage= =>  selectedImage?: string; da Prop da página ImageViewer.tsx
//         {selectedImage} =>  const [selectedImage, setSelectedImage] é o selectedImage da const dessa página.*/}
//       </View>

//       {/*abrindo um ternario = {showAppOptions ? <View /> : } => para ocultar esta view  */}
//       {showAppOptions ? (
//         <View style={styles.optionsContainer}>
//           <View style={styles.optionsRow}>
//             <IconButton icon="refresh" label="Reset" onPress={onReset}/>
//             <CicleButton onPress={onAddSticker} />
//             <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
//           </View>
//         </View>
//       ) : (
//         <View style={styles.footerConatiner}>
//           <Button
//             label="Choose a photo"
//             theme="primary"
//             onPress={pickImageAsync}
//           />
//           {/*theme="primary" <- PARA colocar um style proprio neste botão*/}
//           <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
//         </View>
//       )}
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
//   imageContainer: {
//     flex: 1,
//     paddingTop: 28,
//   },
//   footerConatiner: {
//     flex: 1 / 3, // <- para usar 33% da tela.
//     alignItems: "center",
//   },
//   optionsContainer:{
//     position:"absolute",
//     bottom:80,
//   },
//   optionsRow:{
//     alignItems:"center",
//     flexDirection:"row",
//   },
// });
// //====================================================================//










import { View, StyleSheet } from "react-native";
import { useState } from "react";// <-  é um hook do React para gerenciar estados em componentes funcionais.
import * as ImagePicker from "expo-image-picker";// <- é uma biblioteca do Expo que permite selecionar imagens da galeria ou câmera do dispositivo.
import { type ImageSource } from "expo-image";

// imports dos componentes personalizados localizados na pasta components do projeto.
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import CicleButton from "@/components/CicleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";

// 10° Versão //
//====================================================================//
const PlaceholderImage = require("@/assets/images/image_dog.jpg");// <- Carrega uma imagem local (image_dog.jpg) localizada na pasta assets/images

// export default function Index(){} => Define um componente funcional padrão exportado.
// OBS: As const gerenciam os estados
export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>( undefined );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoje] = useState<ImageSource | undefined>(undefined);
  

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

 const onReset = () => {setShowAppOptions(false)};
 const onAddSticker = () => {setIsModalVisible(true)};
 const onModalChose = () => {setIsModalVisible(false)};
 const onSaveImageAsync = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {/* selectedImage={selectedImage} 
        selectedImage= =>  selectedImage?: string; da Prop da página ImageViewer.tsx
        {selectedImage} =>  const [selectedImage, setSelectedImage] é o selectedImage da const dessa página.*/}
      </View>

      {/*abrindo um ternario = {showAppOptions ? <View /> : } => para ocultar esta view  */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset}/>
            <CicleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
          </View>
        </View>
      ) : (
        <View style={styles.footerConatiner}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          {/*theme="primary" <- PARA colocar um style proprio neste botão*/}
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalChose}>
        <EmojiList onSelect={setPickedEmoje} onCloseModal={onModalChose}/>

      </EmojiPicker>
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
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerConatiner: {
    flex: 1 / 3, // <- para usar 33% da tela.
    alignItems: "center",
  },
  optionsContainer:{
    position:"absolute",
    bottom:80,
  },
  optionsRow:{
    alignItems:"center",
    flexDirection:"row",
  },
});
//====================================================================//