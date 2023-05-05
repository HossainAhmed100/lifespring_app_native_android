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
  },
  courseTitle: {
    fontSize: SIZES.medium,
    marginTop: SIZES.xSmall,
    fontWeight: 500,
    color: COLORS.darkText,
    textTransform: "capitalize",
  },
  courseDescription: {
    fontSize: SIZES.small,
    marginTop: SIZES.xSmall / 2,
    color: COLORS.lightText,
  },
  enrollContainer: {
    marginTop: SIZES.xSmall,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coursePrice: {
    fontSize: SIZES.large,
    fontWeight: 700,
    color: COLORS.primary,
  },
  enrollBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.xLarge,
    paddingVertical: SIZES.xSmall,
    borderRadius: 5,
  },
  enrollBtnText: {
    color: COLORS.white,
    fontWeight: 500,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;
