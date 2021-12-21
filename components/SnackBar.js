import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { COLOR_PINK, COLOR_WHITE } from "../styles/colors";
import { BORDER_RADIUS } from "../styles/variables";
import { Ionicons } from "@expo/vector-icons";

export default function SnackBar({ isVisible = false }) {
  const [visible, setVisible] = useState(isVisible);
  const [clickedSnackbar, setClickedSnackbar] = useState(false);
  return visible ? (
    <TouchableOpacity onPress={() => setClickedSnackbar(true)}>
      <View style={styles.snackbar}>
        <Ionicons
          name="close-circle-outline"
          size={30}
          color={COLOR_WHITE}
          style={styles.closeIcon}
          onPress={() => setVisible(false)}
        />

        {clickedSnackbar ? (
          <Text style={styles.message}>User clicked snackbar</Text>
        ) : (
          <Text style={styles.message}>
            This is an in-app notification snackbar to show the user when they
            perform an action. Clicking it should change the text.
          </Text>
        )}
      </View>
    </TouchableOpacity>
  ) : null;
}

const styles = StyleSheet.create({
  snackbar: {
    backgroundColor: COLOR_PINK,
    padding: 20,
    margin: 10,
    borderRadius: BORDER_RADIUS,
    //  flexDirection: "row",
    //  alignSelf: "flex-start",
    //  justifyContent: "space-around",
    //  minWidth: "80%",
    left: 0,
    bottom: 0,
    right: 0,
    //  position: "absolute",
  },
  closeIcon: {
    marginLeft: -15,
    marginTop: -20,
  },
  message: {
    color: COLOR_WHITE,
    marginHorizontal: 10,
  },
});
