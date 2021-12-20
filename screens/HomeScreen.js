import { StyleSheet, Text, View } from "react-native";
import DefaultLayout from "./Layouts/DefaultLayout";
import Topbar from "../components/Topbar";
import { LIGHT_GRAY } from "../styles/colors";
import { BORDER_RADIUS } from "../styles/variables";
import { vh } from "react-native-css-vh-vw";
import CustomCard from "../components/cards/CustomCard";
import PrimaryButton from "../components/buttons/PrimaryButton";

export default function HomeScreen() {
  return (
    <DefaultLayout>
      <Topbar />
      <View style={styles.container}>
        <Text style={styles.title}>Your Goals</Text>
        <CustomCard />
        <PrimaryButton onPress={() => null} />
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
});
