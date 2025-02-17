import { Image, type ImageSource } from "expo-image";
import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet } from "react-native";

type Props ={
    onSelect:(Image: ImageSource) => void;
    onCloseModal: () => void;
};

export default function EmojiList({onCloseModal, onSelect}: Props){

    const [emoji] = useState<ImageSource[]>([
        require("../assets/images/emoji1.png"),
        require("../assets/images/emoji2.png"),
        require("../assets/images/emoji3.png"),
        require("../assets/images/emoji4.png"),
        require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
    ]);


    return(
        <FlatList 
            horizontal
            contentContainerStyle={styles.ListContainer}
            showsHorizontalScrollIndicator={Platform.OS === "web"}
            data={emoji}
            renderItem={({item, index}) => (
                <Pressable onPress={() => { 
                    onSelect(item); 
                    onCloseModal();
                    }}>
                    <Image source={item} key={index} style={styles.Image}/>
                </Pressable>
            )}
        />
    );
};

const styles = StyleSheet.create({
    ListContainer:{
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    Image:{
        width:100,
        height:100,
        marginRight:20,
    },
});