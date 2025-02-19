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

// 2º Versão \\
//====================================================================================\\
import { type ImageSource } from "expo-image";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler"; // <= Biblioteca para jetos de (arrastar, ampliar, toque).

type Props = {
  imageSize: number;
  stickerource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  // Gesture.Tap => é para dois toque
  const doubleTap = Gesture.Tap()
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
    <View style={{ top: -350 }}>
      <GestureDetector gesture={doubleTap}>
        <Animated.Image
          source={stickerource}
          style={[imageStyle, { width: imageSize, height: imageSize }]} // <= [] coloca o style dentro de um vetor
          resizeMode="contain"
        />
      </GestureDetector>
    </View>
  );
}
// ANOTAÇÕES:
// A tag <Animated> só funciona animado outras tags por isso usa assim <Animated.Image.
// No react-native todo o (use) lida com Hooks : EXEMPLO {useSharedValue}
//======================================================================================\\
