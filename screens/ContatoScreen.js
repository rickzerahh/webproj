import React from "react";
import { View, Text, Linking, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import global from "../theme/styles";
import colors from "../theme/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFeather from "react-native-vector-icons/Feather";

export default function ContatoScreen() {
  const socialLinks = [
    { name: "github", url: "https://github.com/rickzerahh", type: "FontAwesome" },
    { name: "linkedin", url: "https://www.linkedin.com/in/ricardoandrejunior/", type: "FontAwesome" },
    { name: "twitter", url: "https://x.com/rickzerahh2", type: "Feather" },
  ];

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir link: ", err));
  };

  return (
    <View style={global.container}>
      {/* Título centralizado com estilo do HomeScreen */}
      <Text style={styles.mainTitle}>Contatos :</Text>

      <View style={styles.contactCard}>
        <Text style={styles.contactLabel}>Email</Text>
        <Text style={styles.contactValue}>ricardojr2002@hotmail.com</Text>

        <Text style={styles.contactLabel}>Telefone</Text>
        <Text style={styles.contactValue}>+55 81 99707-0005</Text>

        <View style={styles.socialContainer}>
          {socialLinks.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => openLink(item.url)}
              style={styles.iconButton}
            >
              {item.type === "FontAwesome" ? (
                <Icon name={item.name} size={40} color="#fff" />
              ) : (
                <IconFeather name={item.name} size={40} color="#fff" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Navbar fixa */}
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.primary, 
    textAlign: "center",
    marginBottom: 20,
  },
  contactCard: {
    backgroundColor: "#1e1e1e",
    padding: 30,
    borderRadius: 20,
    width: "85%",
    alignSelf: "center",
    marginTop: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  contactLabel: {
    color: "#bbb",
    fontSize: 16,
    marginTop: 10,
    textTransform: "uppercase",
  },
  contactValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
  },
  iconButton: {
    padding: 10,
  },
});
