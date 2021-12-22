import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLOR_PINK, COLOR_WHITE } from "../styles/colors";
import { BORDER_RADIUS } from "../styles/variables";
import { Ionicons } from "@expo/vector-icons";

export default function SnackBar(props) {
  const { showSnackBar = false, setShowSnackBar = () => null } = props;
  const [changeText, setChangeText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSnackBar(false), 10000); // close snackbar after 10 sec
  }, []);

  if (!showSnackBar) return null;

  return (
    <TouchableOpacity onPress={() => setChangeText(true)}>
      <View style={styles.snackbar}>
        <Ionicons
          name="close-circle-outline"
          size={30}
          color={COLOR_WHITE}
          style={styles.closeIcon}
          onPress={() => setShowSnackBar(false)}
        />
        {changeText ? (
          <Text style={styles.message}>User clicked snackbar</Text>
        ) : (
          <Text style={styles.message}>
            This is an in-app notification snackbar to show the user when they
            perform an action. Clicking it should change the text.
          </Text>
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
    bottom: -105,
    right: 0,
    zIndex: 1,
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
