import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLOR_PINK, COLOR_WHITE } from "../styles/colors";
import { BORDER_RADIUS } from "../styles/variables";
import { EvilIcons } from "@expo/vector-icons";

export default function SnackBar(props) {
  const { showSnackBar = false, setShowSnackBar = () => null } = props;
  const [changeText, setChangeText] = useState("original");

  // close snackbar after 10 sec
  if (showSnackBar) {
    setTimeout(() => {
      setShowSnackBar(false), setChangeText("original");
    }, 10000);
  }

  if (!showSnackBar) return null;

  return (
    <TouchableOpacity onPress={() => setChangeText(!changeText)}>
      <View style={styles.snackbar}>
        <EvilIcons
          name="close"
          size={20}
          color={COLOR_WHITE}
          style={styles.closeIcon}
          onPress={() => {
            setShowSnackBar(false), setChangeText("original");
          }}
        />
        {changeText === "original" ? (
          <Text style={styles.message}>
            This is an in-app notification snackbar to show the user when they
            perform an action. Clicking it should change the text.
          </Text>
        ) : (
          <Text style={styles.message}>User clicked snackbar</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  snackbar: {
    backgroundColor: COLOR_PINK,
    padding: 20,
    margin: 10,
    borderRadius: BORDER_RADIUS,
    position: "absolute",
    left: 0,
    bottom: -130,
    right: 0,
    zIndex: 1,
  },
  closeIcon: {
    marginTop: -10,
    alignSelf: "flex-end",
  },
  message: {
    color: COLOR_WHITE,
    marginHorizontal: 10,
  },
});
