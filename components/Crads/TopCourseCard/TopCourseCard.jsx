import { View, Text, Image } from "react-native";
import React from "react";
import style from "./topCourseCard.style";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../context";

const TopCourseCard = ({ item }) => {
  const titleText = item.courseName;
  const courseNameSplit = titleText.slice(0, 20) + "...";
  const priceConverter = (num) => {
    var str = num.toString().split(".");
    if (str[0].length >= 4) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 4) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(",");
  };
  return (
    <Pressable style={style.cardContainer}>
      <View style={style.cardContent}>
        <View>
          <Image
            style={style.cardImage}
            resizeMode="cover"
            source={{ uri: item.thumbnail }}
          />
          <View style={style.textContainer}>
            <Text style={style.courseTitle}>{courseNameSplit}</Text>
          </View>
        </View>

        <View style={style.enrollContainer}>
          <Text style={style.coursePrice}>
            ৳{priceConverter(item.enrollmentFee)}
          </Text>
          <View style={style.ratingContainer}>
            <AntDesign name="star" size={20} color={COLORS.yellow} />
            <AntDesign name="star" size={20} color={COLORS.yellow} />
            <AntDesign name="star" size={20} color={COLORS.yellow} />
            <AntDesign name="star" size={20} color={COLORS.yellow} />
            <AntDesign name="staro" size={20} color={COLORS.lightText} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default TopCourseCard;
