// // 1º Versão \\
// //=================================================================================\\
// import { Image, type ImageSource } from "expo-image";
// import { View } from "react-native";

// type Props = {
//   imageSize: number;
//   stickerource: ImageSource;
// };

// export default function EmojiSticker({ imageSize, stickerource }: Props) {
//   return (
//     <View style={{ top: -350 }}>
//       <Image
//         source={stickerource}
//         style={{ width: imageSize, height: imageSize }}
//       />
//     </View>
//   );
// }
// //=================================================================================\\

// // 2º Versão \\
// //====================================================================================\\
// import { type ImageSource } from "expo-image";
// import { View } from "react-native";
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from "react-native-reanimated";
// import { Gesture, GestureDetector } from "react-native-gesture-handler"; // <= Biblioteca para jetos de (arrastar, ampliar, toque).

// type Props = {
//   imageSize: number;
//   stickerource: ImageSource;
// };

// export default function EmojiSticker({ imageSize, stickerource }: Props) {

//   const scaleImage = useSharedValue(imageSize);// <= const para aumentar ou diminuir o tamanho do emoji.
//   // Gesture.Tap => é para dois toque
//   const doubleTap = Gesture.Tap()
//     .numberOfTaps(2)
//     .onStart(() => {
//       // if?else = (se o valor for diferente de 2) então aumenta o tamanho do emoji em 2X
//       if (scaleImage.value !== imageSize * 2) {
//         scaleImage.value = scaleImage.value * 2;
//       } else {
//         // Math arredonda o value.
//         scaleImage.value = Math.round(scaleImage.value / 2);
//       }
//     });

//   const imageStyle = useAnimatedStyle(() => {
//     // return como {} retorna um objeto.
//     return {
//       width: withSpring(scaleImage.value),
//       height: withSpring(scaleImage.value),
//     };
//   });

//   return (
//     <View style={{ top: -350 }}>
//       <GestureDetector gesture={doubleTap}>// <= para trabalhar com toque
//         <Animated.Image
//           source={stickerource}
//           style={[imageStyle, { width: imageSize, height: imageSize }]} // <= [] coloca o style dentro de um vetor
//           resizeMode="contain"
//         />
//       </GestureDetector>
//     </View>
//   );
// }
// // ANOTAÇÕES:
// // A tag <Animated> só funciona animado outras tags por isso usa assim <Animated.Image.
// // No react-native todo o (use) lida com Hooks : EXEMPLO {useSharedValue}
// //======================================================================================\\

// 2º Versão \\
//====================================================================================\\
import { type ImageSource } from "expo-image";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler"; // <= Biblioteca para jetos de (arrastar, ampliar, toque).

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  // (translateX & translatey) => para lidar com a posição do emoji
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // função para lidar a posição do emoji.
  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX; // <= pega a posição inicial e soma a nova posição
    translateY.value += event.changeY; // <= pega a posição inicial e soma a nova posição
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const scaleImage = useSharedValue(imageSize); // <= const para aumentar ou diminuir o tamanho do emoji.

  // função para lidar com o toque
  const doubleTap = Gesture.Tap() // Gesture.Tap => é para dois toque
    .numberOfTaps(2)
    .onStart(() => {
      // if?else = (se o valor for diferente de 2) então aumenta o tamanho do emoji em 2X
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        // Math arredonda o value.
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    // return como {} retorna um objeto.
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  return (
    <GestureDetector gesture={drag}>{/*gesture={drag} => tag responsavel por mudar a posição do emoji*/}
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}> {/*gesture={doubleTap} => tag responsavel por aumentar o diminuir o tamanho do emoji*/}
          <Animated.Image
            source={stickerSource}
            style={[imageStyle, { width: imageSize, height: imageSize }]} // <= [] coloca o style dentro de um vetor
            resizeMode="contain"
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
// ANOTAÇÕES:
// A tag <Animated> só funciona animado outras tags por isso usa assim <Animated.Image.
// No react-native todo o (use) lida com Hooks : EXEMPLO {useSharedValue}
//======================================================================================\\
