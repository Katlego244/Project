import React, { useState, useRef, useEffect } from "react";
import {TextInput,TouchableOpacity,Text,View,StyleSheet,Animated,Appearance,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const router = useRouter();

  const colorScheme = Appearance.getColorScheme() || "light";

  const titleColor = colorScheme === "dark" ? "#fff" : "#000";


  const placeholderColor = colorScheme === "dark" ? "#aaa" : "#555";

  const logoAnim = useRef(new Animated.Value(0)).current;
  const formAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {


    Animated.timing(logoAnim, {

      toValue: 1,
      duration: 800,
      useNativeDriver: true,

    }).start();


    Animated.timing(formAnim, {

      toValue: 1,
      duration: 800,
      delay: 400,
      useNativeDriver: true,

    }).start();


  }, []);

  const handleLogin = () => {


    console.log("Logging in with", email, password);
    router.replace("/(home)"); 


  };

  const handleGoogleLogin = () => {

    alert("Google login not implemented yet");

  };

  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >

      <Animated.View
        style={{
          opacity: logoAnim,
          transform: [
            {
              translateY: logoAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0],
              }),
            },
          ],

          marginBottom: 20,
          width: "100%",
          alignItems: "center",

        }}
      >

        <Text style={{ color: titleColor, fontSize: 26, fontWeight: "700" }}>
          Welcome back
        </Text>


        <Text
          style={{
            color: placeholderColor,
            fontSize: 14,
            marginTop: 4,
          }}
        >
          Enter your credentials to login
        </Text>

      </Animated.View>

      <Animated.View
        style={{
          opacity: formAnim,
          transform: [
            {
              translateY: formAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
          width: "100%",
        }}
      >
        <TextInput
          placeholder="Email"placeholderTextColor={placeholderColor}
          style={[
            styles.input,
            { color: titleColor, borderColor: placeholderColor },
          ]}
          value={email}
          onChangeText={setEmail}
        />


        <TextInput

          placeholder="Password"
          placeholderTextColor={placeholderColor}
          style={[
            styles.input,
            { color: titleColor, borderColor: placeholderColor },
          ]}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>

          <Ionicons
            name="logo-google"
            size={20}
            color="#fff"
            style={styles.googleIcon}
          />

          <Text style={styles.googleButtonText}>
            
            Login with Google

          </Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/sign-up")}>

          <Text style={[styles.link, { color: titleColor }]}>
            Sign up
          </Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/forgot-password")}>
          <Text style={[styles.link, { color: titleColor }]}>
            Forgot password?
          </Text>
        </TouchableOpacity>

      </Animated.View>

    </View>

  );
}

const styles = StyleSheet.create({

  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#4c669f",
    width: "100%",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 16,
  },

  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DB4437",
    width: "100%",
    borderRadius: 25,
    paddingVertical: 14,
    justifyContent: "center",
    marginBottom: 16,
  },

  googleIcon: { marginRight: 10 },

  googleButtonText: { color: "#fff", 
    
    fontSize: 16, fontWeight: "600" },

  link: { fontWeight: "600", textAlign: "center", marginVertical: 4 },
});
