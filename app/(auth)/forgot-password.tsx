import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Appearance } from "react-native";
import { useRouter } from "expo-router";

export default function ForgotPasswordScreen() {


  const [email, setEmail] = useState("");
  const router = useRouter();

  const colorScheme = Appearance.getColorScheme() || "light";


  const textColor = colorScheme === "dark" ? "#fff" : "#000";
  const placeholderColor = colorScheme === "dark" ? "#aaa" : "#555";

  const logoAnim = useRef(new Animated.Value(0)).current;
  const formAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.timing(logoAnim, { toValue: 1, duration: 800, useNativeDriver: true }).start();


    Animated.timing(formAnim, { toValue: 1, duration: 800, delay: 400, useNativeDriver: true }).start();


  }, []);

  const handleReset = () => {
    console.log("Reset password for", email);
  };

  return (

    <View style={{ width: "100%" }}>

      <Animated.View
        style={{
          opacity: logoAnim,
          transform: [{ translateY: logoAnim.interpolate({ inputRange: [0, 1], outputRange: [-50, 0] }) }],
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <Text style={[styles.title, { color: textColor }]}>Forgot Password</Text>
        <Text style={[styles.subtitle, { color: placeholderColor }]}>Enter your email to reset your password</Text>
      </Animated.View>

      <Animated.View
        style={{
          opacity: formAnim,
          transform: [{ translateY: formAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
        }}
      >


        <TextInput placeholder="Email" placeholderTextColor={placeholderColor} style={[styles.input, { color: textColor, borderColor: placeholderColor }]} value={email} onChangeText={setEmail} />

        <TouchableOpacity style={styles.button} onPress={handleReset}>

          <Text style={styles.buttonText}>Reset Password</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>

          <Text style={[styles.link, { color: textColor }]}>
            
            Back to Login

          </Text>
          
        </TouchableOpacity>

      </Animated.View>
    </View>

  );
}

const styles = StyleSheet.create({
  title: { fontSize: 26, fontWeight: "700", textAlign: "center" },
  subtitle: { fontSize: 14, marginBottom: 20, textAlign: "center" },
  input: { width: "100%", borderWidth: 1, borderRadius: 10, paddingVertical: 12, paddingHorizontal: 16, marginBottom: 12, fontSize: 16 },
  button: { backgroundColor: "#4c669f", width: "100%", borderRadius: 25, paddingVertical: 14, alignItems: "center", marginBottom: 16 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  link: { fontWeight: "600", textAlign: "center", marginVertical: 4 },
});
