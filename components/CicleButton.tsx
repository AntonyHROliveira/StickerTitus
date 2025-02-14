import { MaterialIcons } from "@expo/vector-icons";
import { View, Pressable, StyleSheet } from "react-native";

type Props ={
    onPress: () => void;
};

export default function CicleButton({onPress} : Props) {
    <View style={styles.circleButtonContainer}>
        <Pressable onPress={onPress} style={styles.cicleButton}>
            <MaterialIcons name="add" size={38} color="#25292E" />
        </Pressable>
    </View>;   
}

const styles = StyleSheet.create({
    circleButtonContainer:{
        width:84,
        height:84,
        marginHorizontal: 60, // Igual a combinação da margim left + margin right
        borderWidth: 4,
        borderColor: "#FFD33D",
        borderRadius:42,
        padding:3,
    },
    cicleButton:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:42,
        backgroundColor:"#FFF",
    },

});