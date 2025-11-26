import { View, Text } from "react-native";
import Navbar from "../components/Navbar";
import global from "../theme/styles";

export default function SobreScreen() {
  return (
    <View style={global.container}>
      <Text style={global.title}>Sobre mim</Text>
      <Text style={global.subtitle}>
        Desenvolvedor apaixonado por tecnologia, mobile, cloud e sistemas.
      </Text>

      {/* Navbar fixa */}
      <Navbar />
    </View>
  );
}
