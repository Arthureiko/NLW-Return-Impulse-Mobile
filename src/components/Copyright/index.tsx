import React from "react";
import { View, Text, Linking } from "react-native";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>
        Feito com ♥ por{" "}
        <Text
          style={styles.hyperlinkStyle}
          onPress={() => {
            Linking.openURL("https://github.com/arthureiko");
          }}
        >
          Arthur Eiko
        </Text>
      </Text>
    </View>
  );
}
