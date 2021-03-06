import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultLayout from "./Layouts/DefaultLayout";
import Topbar from "../components/Topbar";
import { LIGHT_GRAY } from "../styles/colors";
import { BORDER_RADIUS } from "../styles/variables";
import { vh } from "react-native-css-vh-vw";
import CustomCard from "../components/cards/CustomCard";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SnackBar from "../components/SnackBar";

export default function HomeScreen() {
  const [showSnackBar, setShowSnackBar] = useState(false);
  const { goals } = require("../data/goals");
  return (
    <DefaultLayout>
      {/* snackbar */}
      <SnackBar showSnackBar={showSnackBar} setShowSnackBar={setShowSnackBar} />

      <Topbar />
      <View style={styles.container}>
        <Text style={styles.title}>Your Goals</Text>

        {goals.map((goal) => (
          <CustomCard name={goal.name} amount={goal.amount} key={goal.id} />
        ))}

        <View style={styles.buttonHolder}>
          <PrimaryButton onPress={() => setShowSnackBar(true)} />
        </View>
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GRAY,
    height: vh(80),
    padding: 20,
    marginTop: -30,
    borderRadius: BORDER_RADIUS,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonHolder: {
    marginTop: vh(20),
  },
});
