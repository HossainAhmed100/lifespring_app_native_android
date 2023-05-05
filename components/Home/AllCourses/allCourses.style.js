import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../context";

const style = StyleSheet.create({
  continer: {
    width: "100%",
    paddingVertical: 20,
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
  courseContainer: {
    paddingTop: SIZES.medium,
    paddingBottom: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;
