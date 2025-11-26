import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../theme/colors";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => nav.navigate("Home")}>
        <Text style={styles.logo}>RJ</Text>
      </TouchableOpacity>

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => nav.navigate("Sobre")}>
          <Text style={styles.link}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => nav.navigate("Projetos")}>
          <Text style={styles.link}>Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => nav.navigate("Contato")}>
          <Text style={styles.link}>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: "bold",
  },
  menu: {
    flexDirection: "row",
    gap: 25,
  },
  link: {
    color: colors.text,
    fontSize: 16,
  },
});
