// import { StyleSheet } from "react-native";
// import { Image, type ImageSource } from "expo-image";

// 1° Versão \\
//===================================================================================\\
// // type ImageSource = para ter acesso ao endereço da imagens.

// type Props = {
//     imgSource: ImageSource;
// }

// export default function ImageViewer({imgSource}:Props){
//     return <Image source={imgSource} style={styles.Image}/>
// }

// const styles = StyleSheet.create({
//     Image:{
//         width: 320,
//         height: 440,
//         borderRadius:18,
//     },
// });
//===================================================================================\\







import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";


// 2° Versão \\
//===================================================================================\\

// type ImageSource = para ter acesso ao endereço da imagens.

type Props = {
    imgSource: ImageSource;
    selectedImage?: string;
}

export default function ImageViewer({imgSource , selectedImage }:Props){

    const ImageSource = selectedImage ? {uri: selectedImage } : imgSource;

    return <Image source={ImageSource} style={styles.Image}/>
}

const styles = StyleSheet.create({
    Image:{
        width: 320,
        height: 440,
        borderRadius:18,
    },
});
//===================================================================================\\