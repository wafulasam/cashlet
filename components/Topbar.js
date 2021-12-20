import { StyleSheet, Text, View } from "react-native";
import { COLOR_FAUX_DARK, COLOR_GREEN, COLOR_WHITE } from "../styles/colors";
import { vh } from "react-native-css-vh-vw";

export default function Topbar() {
  const user = {
    name: "Jo",
    totalFunds: "42,000",
    currency: "KES",
  };

  return (
    <View style={styles.topbar}>
      <Text style={styles.name}>Afternoon, {user.name}</Text>
      <Text style={styles.latest}>Here's the latest</Text>
      <Text style={styles.amount}>
        {user.currency} {user.totalFunds}
      </Text>
      <Text style={styles.total}>Total funds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: COLOR_FAUX_DARK,
    height: vh(30),
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  name: {
    color: COLOR_WHITE,
    fontSize: 30,
  },
  latest: { color: COLOR_WHITE, marginBottom: 10 },
  amount: { color: COLOR_GREEN, fontSize: 20, fontWeight: "bold" },
  total: { color: COLOR_WHITE },
});
