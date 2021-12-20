import { StyleSheet, Text, View } from "react-native";
import DefaultLayout from "./Layouts/DefaultLayout";
import Topbar from "../components/Topbar";
import { LIGHT_GRAY } from "../styles/colors";
import { BORDER_RADIUS } from "../styles/variables";
import { vh } from "react-native-css-vh-vw";
import CustomCard from "../components/cards/CustomCard";
import PrimaryButton from "../components/buttons/PrimaryButton";

export default function HomeScreen() {
  const { goals } = require("../data/goals");
  return (
    <DefaultLayout>
      <Topbar />
      <View style={styles.container}>
        <Text style={styles.title}>Your Goals</Text>
        {goals.map((goal) => (
          <CustomCard name={goal.name} amount={goal.amount} key={goal.name} />
        ))}

        <View style={styles.buttonHolder}>
          <PrimaryButton onPress={() => null} />
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
    marginTop: vh(-10),
    borderRadius: BORDER_RADIUS,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonHolder: {
    marginTop: vh(20),
    // left: 0,
    // bottom: 10,
    // right: 0,
  },
});
