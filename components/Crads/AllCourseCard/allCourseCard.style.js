import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../context";

const style = StyleSheet.create({
  cardContainer: {
    width: "100%",
    padding: SIZES.large,
    borderRadius: SIZES.small,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primaryLight,
    marginBottom: 15,

    shadowColor: "#f0f8f7",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 10,
  },
  cardContent: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardImage: {
    width: "100%",
    height: 170,
    borderRadius: SIZES.xSmall,
  },
  courseTitle: {
    marginTop: SIZES.xSmall,
    fontSize: SIZES.medium,
    fontWeight: 500,
    color: COLORS.darkText,
  },
  courseDescription: {
    marginTop: SIZES.xSmall / 2,
    color: COLORS.lightText,
    textTransform: "capitalize",
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: SIZES.xSmall,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  infoIcon: {
    width: 25,
    height: 25,
  },
  infoContent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  infoText: {
    color: COLORS.lightText,
  },
  enrollContainer: {
    marginTop: SIZES.xSmall,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  coursePrice: {
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    fontWeight: 700,
  },
  coursePriceStatus: {
    fontSize: SIZES.small,
    color: COLORS.lightText,
  },
  enrollBtn: {
    borderRadius: SIZES.small,
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.medium - 1,
    width: "75%",
    alignItems: "center",
  },
  enrollBtnText: {
    color: COLORS.white,
    fontWeight: 500,
  },
  saveBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: COLORS.lightWhite,
    borderColor: COLORS.primaryLight,
    padding: SIZES.xSmall,
    borderRadius: SIZES.medium,
  },
  saveBtnIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  priceContainer: {
    marginTop: SIZES.xSmall,
  },
});

export default style;
