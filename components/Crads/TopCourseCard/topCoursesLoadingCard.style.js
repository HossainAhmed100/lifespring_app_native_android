import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../context";

const style = StyleSheet.create({
  cardContainer: {
    width: 250,
    height: 240,
    backgroundColor: COLORS.white,
    padding: SIZES.large,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: SIZES.xSmall,
    resizeMode: "contain",
    backgroundColor: COLORS.grayWhite,
  },
  courseTitle: {
    marginTop: SIZES.xSmall,
    backgroundColor: COLORS.grayWhite,
    borderRadius: SIZES.xSmall,
  },
  enrollContainer: {
    marginTop: SIZES.xSmall,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coursePrice: {
    backgroundColor: COLORS.grayWhite,
    borderRadius: SIZES.xSmall,
    width: "100%",
    height: 40,
  },
  enrollBtn: {
    backgroundColor: COLORS.grayWhite,
    paddingHorizontal: SIZES.xLarge,
    paddingVertical: SIZES.xSmall,
    borderRadius: 5,
    width: 100,
    height: 40,
  },
  enrollBtnText: {
    color: COLORS.white,
    fontWeight: 500,
  },
});

export default style;
