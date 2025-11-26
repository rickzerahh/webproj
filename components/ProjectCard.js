import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function ProjectCard({ title, desc }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    width: "90%", 
    alignSelf: "center", 
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    color: "#999",
    marginTop: 5,
    textAlign: "center",
  },
});
