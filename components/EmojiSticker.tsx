import { Image, type ImageSource } from "expo-image";
import { View } from "react-native";

type Props = {
  imageSize: number;
  stickerource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
