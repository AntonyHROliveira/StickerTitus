import { StyleSheet, View, Pressable, Text } from "react-native";
// Pressable = componente para toque na tela.

type Props = {
    label: string;
};

// Ou para exporta a props
// export type Props = {
//     label: string;
// };



export default function Button({label}:Props){
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert("Você clicou aqui.")}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:320,
        height: 68,
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
        padding:1,
    },
    button:{
        borderRadius:10,
        width:"100%",
        height:"100%",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row",
    },
    buttonLabel:{
        color:"#FFF",
        fontSize:16,
    },
});
