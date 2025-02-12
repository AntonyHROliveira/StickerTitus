// import { StyleSheet, View, Pressable, Text } from "react-native";
// // Pressable = componente para toque na tela.

// 1° Versão //
//==========================================================================================================================
// type Props = {
//     label: string;
// };

// // Ou para exporta a props
// // export type Props = {
// //     label: string;
// // };

// export default function Button({label}:Props){
//     return(
//         <View style={styles.buttonContainer}>
//             <Pressable style={styles.button} onPress={() => alert("Você clicou aqui.")}>
//                 <Text style={styles.buttonLabel}>{label}</Text>
//             </Pressable>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     buttonContainer:{
//         width:320,
//         height: 68,
//         marginHorizontal:20,
//         alignItems:'center',
//         justifyContent:'center',
//         padding:1,
//     },
//     button:{
//         borderRadius:10,
//         width:"100%",
//         height:"100%",
//         alignItems:'center',
//         justifyContent:'center',
//         flexDirection:"row",
//     },
//     buttonLabel:{
//         color:"#FFF",
//         fontSize:16,
//     },
// });
//=================================================================================//

// import { StyleSheet, View, Pressable, Text } from "react-native";
// Pressable = componente para toque na tela.

// 2° Versão \\
//=====================================================================================================================================\\
// type Props = {
//   label: string;
//   theme?: "primary"; // (?) o sinal sinaliza que a Prop é opcional : () Sem o sinal sinaliza que a Prop é obrigatória;
//   // disabled: Boolean; <- ver isso.
// };

// Ou para exporta a props
// export type Props = {
//     label: string;
// };

// export default function Button({ label, theme }: Props) {
//   if (theme === "primary") {
//     return (
//       <View
//         style={[
//           styles.buttonContainer,
//           { borderWidth: 4, borderColor: "#FFD33D", borderRadius: 18 },
//         ]}
//       >
//         <Pressable
//           style={[styles.button, {backgroundColor: "#fff"}]}
//           onPress={() => alert("Você clicou aqui.")}
//         >
//           <Text style={[styles.buttonLabel, { color: "#25292e"}]}>{label}</Text>
//         </Pressable>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.buttonContainer}>
//       <Pressable
//         style={styles.button}
//         onPress={() => alert("Você clicou aqui.")}
//       >
//         <Text style={styles.buttonLabel}>{label}</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   buttonContainer: {
//     width: 320,
//     height: 68,
//     marginHorizontal: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 1,
//   },
//   button: {
//     borderRadius: 10,
//     width: "100%",
//     height: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//   },
//   buttonLabel: {
//     color: "#FFF",
//     fontSize: 16,
//   },
// });
//=====================================================================================================================================\\






import { FontAwesome } from "@expo/vector-icons";// <- Biblioteca de Icones.
import { StyleSheet, View, Pressable, Text } from "react-native";
// Pressable = componente para toque na tela.

// 2° Versão \\
//=====================================================================================================================================\\
type Props = {
  label: string;
  theme?: "primary"; // (?) o sinal sinaliza que a Prop é opcional : () Sem o sinal sinaliza que a Prop é obrigatória;
  // disabled: Boolean; <- ver isso.
};

// Ou para exporta a props
// export type Props = {
//     label: string;
// };

export default function Button({ label, theme }: Props) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#FFD33D", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, {backgroundColor: "#fff"}]}
          onPress={() => alert("Você clicou aqui.")}
        >
            {/* <FontAwesome/> ,_ para trabalhar com Icones*/}
          <FontAwesome
          name="picture-o"
          size={18}
          color={"#25292E"}
          style={styles.buttonIcon}/>
          <Text style={[styles.buttonLabel, { color: "#25292e"}]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("Você clicou aqui.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#FFF",
    fontSize: 16,
  },
  buttonIcon:{
    paddingRight: 8,
  },
});
//=====================================================================================================================================\\
