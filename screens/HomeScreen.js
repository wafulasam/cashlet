import { StyleSheet, Text, View } from "react-native";
import DefaultLayout from "./Layouts/DefaultLayout";

export default function HomeScreen() {
  return (
    <DefaultLayout>
      <View style={styles.container}>
        <Text>Home screen</Text>
      </View>
    </DefaultLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
