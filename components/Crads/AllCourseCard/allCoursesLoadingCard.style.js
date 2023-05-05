import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../context";

const style = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 320,
    backgroundColor: COLORS.white,
    padding: SIZES.large,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardImage: {
    width: "100%",
    height: 170,
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.grayWhite,
  },
  courseTitle: {
    marginTop: SIZES.xSmall,
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.grayWhite,
  },
  courseDescription: {
    marginTop: SIZES.xSmall / 2,
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.grayWhite,
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
    backgroundColor: COLORS.grayWhite,
    width: 80,
    height: 40,
  },
  enrollBtn: {
    borderRadius: SIZES.xSmall,
    backgroundColor: COLORS.grayWhite,
    width: 130,
    height: 40,
  },
  enrollBtnText: {
    color: COLORS.white,
    fontWeight: 500,
  },
});

export default style;
