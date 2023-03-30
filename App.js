import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Card from "./src/components/Card";

export default function App() {
  const [livros, setLivross] = React.useState([
    {
      id: 1,
      capa: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS69X9XXz6-jlpdDBW56nWey8pVF-PlvHPZPsc48xtEtQmwibB1avieLaedseQgqRf1vPSZ748kNsUsz49eLuaZAXITRwZWb5kNICcHovk&usqp=CAE",
      titulo: "É assim que acaba",
      preco: "38,90",
    },

    {
      id: 2,
      capa: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTIH-QvmpdTb5H5byn-uBiFzA_UHrmxOuPjX5sgxpfc6OMHdE2ExCrHWzvIyFhGYuaeMuwIqYAvpupDJRVSO-TXHvrQXOyZOlyJeO1w4LU61Dz998cUzXqMg",
      titulo: "Musashi O livro dos cinco aneis",
      preco: "59,00",
    },

    {
      id: 3,
      capa: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCfmZBjG34zlRhHtHbsGNskEnWRlzLbO5Dt8Lv4RY8Zq74FsA0yJzGx766FfCSwHASpm3yAkb82vjFPfCfKOc03DgbdBgGK12fIw368ZQ&usqp=CAE",
      titulo: "Friedrich Nietzsche Uma Biografia",
      preco: "74,50",
    },

    {
      id: 4,
      capa:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNcsk4RaPzBoN8uh9uFkrzT7KqBX-dKYEVbyW14tKG2_zUUZ62tjkzXKgSAPtDMKGqobwiJ54hwRXDuwn-byAbIJHEHCE3WGAv5QG9OiY&usqp=CAE",
      titulo: "A fantastica fabrica de chocolate",
      preco: "17,90",
    },

    {
      id: 5,
      capa:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRl315vZqwhsLZ9BgBik9hWpEDfiG88P3QAQtE1BJqSdKtAS_SZw562MYbZ3y1pacar_a1G0wzsqBS7uiYnLJLOA5JBY3RJE2qvEApNyLy4&usqp=CAE",
      titulo: "Você ligou para Sam",
      preco: "54,85",
    },
  ]);

  const deletarLivro = (id) => {
    const index = livros.findIndex((livro) => livro.id === id);
    const novaLista = [...livros];
    novaLista.splice(index, 1);
    setLivross(novaLista);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Ola mundo da literatura</Text>
      <View style={styles.conteudo}>
        {livros.map((livro) => (
          <Card livro={livro} key={livro.id} deletarLivro={() => deletarLivro(livro.id)} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "blue",
  },

  conteudo: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  
});
