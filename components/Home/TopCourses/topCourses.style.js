import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../context";

const style = StyleSheet.create({
  courseContainer: {
    paddingTop: SIZES.medium,
  },
  continer: {
    width: "100%",
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontSize: SIZES.large,
    fontWeight: 700,
    color: COLORS.darkText,
  },
  viewAllBtn: {
    flexDirection: "row",
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.xSmall,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAllBtnText: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    fontWeight: 400,
  },
});

export default style;
