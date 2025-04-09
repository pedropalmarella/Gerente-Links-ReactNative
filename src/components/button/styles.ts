import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 52,
    backgroundColor: colors.green[300],
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.green[900],
    fontSize: 16,
    fontWeight: "600",
  },
});
