import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.livro}
        source={{ uri: props.livro.capa }}
        resizeMode="cover"
      />
      <Text style={{ color: "black" }}> {props.livro.titulo} </Text>
      <Text style={{ fontSize: 12 }}> R$ {props.livro.preco}</Text>
      <TouchableOpacity onPress={props.deletarLivro} style={styles.botao}>
        <Text style={{ color: "black", fontWeight: "bold",backgroundColor:"red"}}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#a7f3d0',
    width: '40%',
    height: 290,
    margin: 15,
  },

  livro: {
    resizeMode: "stretch",
    width: "100%",
    height: 220,
  },
  TouchableOpacity: {
    margin:15,
    backgroundColor:"red",
  },
});