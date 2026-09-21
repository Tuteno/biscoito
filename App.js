import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const frases = [
    "Grandes coisas começam com pequenos passos.",
    "Hoje pode ser o começo de algo incrível.",
    "Confie mais no seu processo.",
    "Persistência vence talento quando o talento desiste.",
    "Uma boa oportunidade está mais perto do que parece.",
    "Trabalho duro frequentemente compensa.",
    "Tempo chato em família é tempo bem gasto.",
    "Tempo em família é tempo.",
    "Você fará um novo amigo hoje.",
    "Você vai fazer sexo com a sua mãe.",
  ];

  const [frase, setFrase] = useState("");
  const [aberto, setAberto] = useState(false);

  function abrirBiscoito() {
    const indice = Math.floor(Math.random() * frases.length);
    const fraseSorteada = frases[indice];

    setFrase(fraseSorteada);
    setAberto(true);
  }

  function voltarBiscoito() {
    setFrase("");
    setAberto(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Biscoito da Sorte</Text>

      {!aberto ? (
      <>
        <Pressable onPress={abrirBiscoito}>
          <Image
            source={require("./assets/biscoito.png")}
            style={styles.imagem}
            resizeMode="contain"
          />
        </Pressable>

        <Text style={styles.instrucao}>Toque no biscoito para o quebrar</Text>
      </>
      ) : (
        <>
          <Image
            source={require("./assets/biscoito-quebrado.png")}
            style={styles.imagem}
            resizeMode="contain"
          />

          <View style={styles.caixaFrase}>
            <Text style={styles.frase}>"{frase}"</Text>
          </View>

          <Pressable style={styles.botao} onPress={voltarBiscoito}>
            <Text style={styles.textBotao}>Voltar</Text>
          </Pressable>
        </>
      )}
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#100f0f",
    marginBottom: 20,
  },

  imagem: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

  instrucao: {
    fontSize: 18,
    color: "#100f0f",
    marginBottom: 20,
  },

  caixaFrase: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    marginBottom: 25,
  },

  frase: {
    fontSize: 15,
    color: "#100f0f",
    textAlign: "center",
    fontStyle: "italic",
  },

  botao: {
    backgroundColor: "#d32424",
    paddingVertical: 14,
    paddingHorizontal: 17,
    borderRadius: 17,
  },

  textBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
