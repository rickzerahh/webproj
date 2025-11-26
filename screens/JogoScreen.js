import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Navbar from "../components/Navbar";
import colors from "../theme/colors";

const PALAVRAS = [
  "REACT","JAVASCRIPT","NODE","EXPO","MOBILE",
  "CLOUD","ANGULAR","VUE","TYPESCRIPT","HTML",
  "CSS","PYTHON","JAVA","KOTLIN","SWIFT",
  "GITHUB","DOCKER","AWS","AZURE","GOOGLE",
  "SQL","MONGO","REDUX","API","GRAPHQL",
  "JEST","WEBPACK","LINUX","ANDROID","IOS"
];

const MAX_ERROS = 6;

export default function JogoScreen() {
  const [palavra, setPalavra] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(MAX_ERROS);
  const [jogoAtivo, setJogoAtivo] = useState(false);

  useEffect(() => iniciarJogo(), []);

  const iniciarJogo = () => {
    const novaPalavra = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
    setPalavra(novaPalavra);
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setTentativas(MAX_ERROS);
    setJogoAtivo(false);
  };

  const adivinharLetra = (letra) => {
    if (!jogoAtivo) setJogoAtivo(true);
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativas(tentativas - 1);
    }
  };

  useEffect(() => {
    if (!jogoAtivo) return;

    if (tentativas <= 0) {
      Alert.alert("Perdeu!", `A palavra era: ${palavra}`);
    } else if (palavra.split("").every((l) => letrasCorretas.includes(l))) {
      Alert.alert("Parabéns!", `Você acertou a palavra: ${palavra}`);
    }
  }, [letrasCorretas, tentativas]);

  const exibirPalavra = () =>
    palavra.split("").map((l) => (letrasCorretas.includes(l) ? l : "_")).join(" ");

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const renderBoneco = () => {
    const erros = letrasErradas.length;
    return (
      <View style={styles.forca}>
        <View style={styles.poste}></View>
        <View style={styles.trave}></View>
        <View style={styles.corda}></View>
        {erros > 0 && <View style={styles.cabeca} />}
        {erros > 1 && <View style={styles.tronco} />}
        {erros > 2 && <View style={[styles.braco, styles.bracoEsq]} />}
        {erros > 3 && <View style={[styles.braco, styles.bracoDir]} />}
        {erros > 4 && <View style={[styles.perna, styles.pernaEsq]} />}
        {erros > 5 && <View style={[styles.perna, styles.pernaDir]} />}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Navbar />

      <Text style={styles.titulo}>Jogo da Forca</Text>

      <Text style={styles.palavra}>{exibirPalavra()}</Text>
      <Text style={styles.subtitulo}>Tentativas restantes: {tentativas}</Text>

      <View style={styles.teclado}>
        {alfabeto.map((letra) => {
          const desabilitado = letrasCorretas.includes(letra) || letrasErradas.includes(letra);
          return (
            <TouchableOpacity
              key={letra}
              style={[styles.letraButton, desabilitado && { backgroundColor: "#555" }]}
              onPress={() => adivinharLetra(letra)}
              disabled={desabilitado}
            >
              <Text style={styles.letraText}>{letra}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Botão de Reiniciar */}
      <TouchableOpacity style={styles.botaoReiniciar} onPress={iniciarJogo}>
        <Text style={styles.botaoText}>REINICIAR</Text>
      </TouchableOpacity>

      {renderBoneco()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
  },
  palavra: {
    fontSize: 36,
    letterSpacing: 5,
    color: "#fff",
    marginBottom: 10,
  },
  subtitulo: {
    color: "#ccc",
    marginBottom: 20,
  },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  letraButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  letraText: {
    color: "#fff",
    fontWeight: "bold",
  },
  botaoReiniciar: {
    backgroundColor: "#f5de5d",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  botaoText: {
    color: "#111",
    fontWeight: "bold",
    fontSize: 16,
  },
  forca: {
    width: 120,
    height: 200,
    alignItems: "center",
    position: "relative",
    marginTop: 20,
  },
  poste: {
    position: "absolute",
    left: 10,
    top: 0,
    width: 5,
    height: 200,
    backgroundColor: "#888",
  },
  trave: {
    position: "absolute",
    left: 10,
    top: 0,
    width: 80,
    height: 5,
    backgroundColor: "#888",
  },
  corda: {
    position: "absolute",
    left: 85,
    top: 5,
    width: 2,
    height: 20,
    backgroundColor: "#888",
  },
  cabeca: {
    position: "absolute",
    top: 25,
    left: 70,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  tronco: {
    position: "absolute",
    top: 55,
    left: 83,
    width: 2,
    height: 60,
    backgroundColor: colors.primary,
  },
  braco: {
    position: "absolute",
    top: 55,
    width: 20,
    height: 2,
    backgroundColor: colors.primary,
  },
  bracoEsq: { left: 63 },
  bracoDir: { left: 83 },
  perna: {
    position: "absolute",
    width: 2,
    height: 20,
    backgroundColor: colors.primary,
    top: 115,
  },
  pernaEsq: { left: 75 },
  pernaDir: { left: 83 },
});
