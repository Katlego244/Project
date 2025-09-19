import React from "react";
import { Slot } from "expo-router";
import { View, StyleSheet, Dimensions, Appearance } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function AuthLayout() {

  const colorScheme = Appearance.getColorScheme();

  const topColor = colorScheme === "dark" ? "#060404dc" : "#fff";
  const bottomColor = colorScheme === "dark" ? "#207b6bff" : "#8f7d7dff";

  return (

    <LinearGradient colors={[topColor, bottomColor]} style={styles.gradient}>

      <View style={styles.container}>

        <Slot />

      </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width - 48,
    alignSelf: "center",
    padding: 24,
  },
});
