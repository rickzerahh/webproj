import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProjetosScreen from "./screens/ProjetosScreen";
import ContatoScreen from "./screens/ContatoScreen";
import JogoScreen from "./screens/JogoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Projetos" component={ProjetosScreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} />
        <Stack.Screen name="Jogo" component={JogoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
