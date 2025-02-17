// 1º Versão \\
//=========================================================================================\\
import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

type Props = PropsWithChildren<{
    isVisible:boolean;
    onClose: () => void;
}>;


// Criando um Modal \\
export default function EmojiPicker({ isVisible, onClose, children} : Props){
    return(
        <Modal visible={isVisible} animationType="slide" transparent={true} >
            <View>
                <View>
                    <Text>Choose a Sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#FFF" size={12} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}

const style = StyleSheet.create({
    modalContent:{
        height:"25%",
        width:"100%",
        backgroundColor:"#25292E",
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        position:"absolute",
        bottom:0,
    },
    titleContainer:{
        height:"16%",
        backgroundColor:"#464C55",
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    title:{
        color:"#FFF",
        fontSize:16,
    },
});
//=========================================================================================\\