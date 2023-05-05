import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../context/theme";

const style = StyleSheet.create({
  contentContainer: {
    backgroundColor: COLORS.lightWhite,
  },
  courseTitle: {
    fontSize: SIZES.large,
    fontWeight: 600,
  },
  courseLearning: {
    fontSize: SIZES.medium,
    color: COLORS.lightText,
  },
});

export default style;
