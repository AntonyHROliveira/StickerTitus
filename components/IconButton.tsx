import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    label: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
};

export default function IconButton({icon, label, onPress}: Props) {
    return(
        <Pressable onPress={onPress} style={style.iconButton}>
            <MaterialIcons name={icon} size={24} color="#FFF"  />
            <Text style={style.IconButtonLabel}>{label}</Text>
        </Pressable>
    );

}

const style = StyleSheet.create({
    iconButton:{
        justifyContent:"center",
        alignItems:"center",
    },
    IconButtonLabel:{
        color:"#FFF",
        marginTop:12,
    },

});