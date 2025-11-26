import React, { useEffect, useRef } from "react";
import { View, Text, Pressable, StyleSheet, Animated, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../theme/colors";

const ITEMS = [
  { label: "Home", route: "Home", icon: "home-outline" },
  { label: "Projetos", route: "Projetos", icon: "briefcase-outline" },
  { label: "Contato", route: "Contato", icon: "mail-outline" },
  { label: "Jogo", route: "Jogo", icon: "game-controller-outline" },
];

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Navbar() {
  const navigation = useNavigation();
  const route = useRoute();

  const ITEM_WIDTH = SCREEN_WIDTH / ITEMS.length;

  const fade = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 400, useNativeDriver: true }).start();
  }, []);

  const activeIndex = ITEMS.findIndex((i) => i.route === route.name);
  const indicatorX = useRef(new Animated.Value(activeIndex * ITEM_WIDTH)).current;

  useEffect(() => {
    Animated.spring(indicatorX, { toValue: activeIndex * ITEM_WIDTH, useNativeDriver: false }).start();
  }, [activeIndex, ITEM_WIDTH]);

  return (
    <Animated.View style={[styles.container, { opacity: fade }]}>
      <View style={[styles.menu, { width: SCREEN_WIDTH }]}>
        {/* linha roxa abaixo do item ativo */}
        <Animated.View
          style={[styles.indicator, { left: indicatorX, width: ITEM_WIDTH }]}
        />
        {ITEMS.map((item) => {
          const isActive = route.name === item.route;
          return (
            <Pressable
              key={item.route}
              onPress={() => navigation.navigate(item.route)}
              style={[styles.item, { width: ITEM_WIDTH }]}
            >
              <Ionicons
                name={item.icon}
                size={22}
                color={isActive ? colors.primary : "#ccc"}
              />
              <Text style={[styles.label, isActive && styles.labelActive]}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000",
    borderTopWidth: 0,
  },
  menu: {
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  label: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 2,
  },
  labelActive: {
    color: colors.primary,
    fontWeight: "bold",
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    height: 4,
    backgroundColor: colors.primary,
  },
});
