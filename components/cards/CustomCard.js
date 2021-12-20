import { StyleSheet, Text, View, Pressable } from "react-native";
import { BORDER_RADIUS } from "../../styles/variables";
import { COLOR_GREEN, COLOR_TEXT, COLOR_WHITE } from "../../styles/colors";
import { Entypo } from "@expo/vector-icons";

export default function CustomCard(props) {
  const { goal, amount } = props;
  return (
    <View style={styles.customCard}>
      <View>
        <Text style={styles.goal}>{goal}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <Pressable onPress={() => null} style={styles.badge}>
        <Text style={styles.badgeLabel}>Finish Goal</Text>
      </Pressable>
      <Entypo name="chevron-small-right" size={30} color={COLOR_TEXT} />
    </View>
  );
}

const styles = StyleSheet.create({
  customCard: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: COLOR_WHITE,
    borderRadius: BORDER_RADIUS,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",

    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  goal: { fontWeight: "bold" },
  amount: { color: COLOR_TEXT },
  badge: {
    backgroundColor: COLOR_GREEN,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: BORDER_RADIUS,
    alignSelf: "flex-start",
    marginLeft: "40%",
  },
  badgeLabel: { color: COLOR_WHITE },
});
