import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Navbar from "../components/Navbar";
import colors from "../theme/colors";
import global from "../theme/styles";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <SafeAreaView style={global.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Saudação centralizada */}
        <Text style={styles.mainTitle}>Olá, eu sou{"\n"}Ricardo Jr</Text>

        {/* Divisão visual igual ao separador */}
        <View style={styles.separator} />

        {/* Função / Cargo */}
        <Text style={styles.role}>
          ANALISTA DE INFRAESTRUTURA | MONITORAMENTO @ LUNIO (ZABBIX/GRAFANA) | CLOUD & DEVSECOPS
        </Text>

        {/* Separador abaixo do cargo */}
        <View style={styles.separator} />

        {/* Breve descrição */}
        <Text style={styles.description}>
          Tenho experiência em observabilidade, cloud e monitoramento de sistemas. 
          Especialista em Zabbix, Grafana e AWS. Sempre buscando novas tecnologias e automações.
        </Text>

        {/* Skills */}
        <View style={styles.skillsContainer}>
          {[
            "React", "Next.js", "Node.js", "TypeScript", "AWS", "Docker", 
            "Kubernetes", "Git", "GCP", "Linux", "Terraform", "SQL", 
            "MongoDB", "Python", "Grafana", "Java", "Zabbix", "Azure"
          ].map((skill, idx) => (
            <View key={idx} style={styles.skillCard}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        {/* Separador abaixo das skills */}
        <View style={styles.separator} />

        {/* Imagem do currículo */}
        <Image
          source={require("../assets/curriculo.png")}
          style={styles.curriculo}
          resizeMode="contain"
        />
      </ScrollView>

      {/* Navbar fixa */}
      <View style={styles.navbarContainer}>
        <Navbar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 40,
    paddingBottom: 120, // espaço para navbar
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: colors.bg,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary, // mantém a cor original
    textAlign: "center",
    marginBottom: 10,
  },
  role: {
    fontSize: 12, // fonte pequena
    color: "#fff", // branco
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0.5,
    textTransform: "uppercase", // caps alto
    marginBottom: 15,
  },
  separator: {
    width: "90%",
    height: 1,
    backgroundColor: "#fff", // igual aos separadores
    marginVertical: 15,
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    marginBottom: 30,
  },
  skillCard: {
    backgroundColor: "#1e1e2f",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  skillText: {
    color: "#fff",
    fontWeight: "600",
  },
  curriculo: {
    width: width * 0.95, 
    height: height * 0.7, 
    marginBottom: 30,
  },
  navbarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "#1e1e1e",
    paddingBottom: 10,
    zIndex: 999,
  },
});
