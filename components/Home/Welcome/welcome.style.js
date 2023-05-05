import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../context";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 40,
  },
  profileContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: SIZES.medium,
  },
  welcomeText: {
    fontSize: SIZES.medium,
    color: COLORS.lightText,
    marginTop: 2,
  },
  userName: {
    fontSize: SIZES.large,
    color: COLORS.darkText,
    fontWeight: 700,
  },
  seachContainer: {
    height: 50,
    marginTop: SIZES.large,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchWrapper: {
    height: "100%",
    flex: 1,
    backgroundColor: COLORS.grayWhite,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    marginRight: SIZES.small,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    paddingVertical: SIZES.xSmall,
  },
  tab: (activeCategory, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeCategory === item ? COLORS.primary : COLORS.borderLight,
    backgroundColor:
      activeCategory === item ? COLORS.primary : COLORS.primaryLight,
  }),
  tabText: (activeCategory, item) => ({
    color: activeCategory === item ? COLORS.white : COLORS.primary,
  }),
});

export default styles;
