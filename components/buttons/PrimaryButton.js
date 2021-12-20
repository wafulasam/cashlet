import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { COLOR_GREEN, COLOR_WHITE } from "../../styles/colors";
import { BORDER_RADIUS_MAX } from "../../styles/variables";

export default function PrimaryButton(props) {
  const { onPress, title = "Show Snackbar", icon, bg = COLOR_GREEN } = props;
  return (
    <Pressable
      style={[styles.button, { backgroundColor: bg }]}
      onPress={onPress}
    >
      {icon}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: "10%",
    marginVertical: 10,
    borderRadius: BORDER_RADIUS_MAX,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR_WHITE,
    marginHorizontal: 10,
  },
});
