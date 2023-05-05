import { View, Text, Pressable } from "react-native";
import React from "react";
import style from "./topCoursesLoadingCard.style";

const TopCoursesLoadingCard = () => {
  return (
    <Pressable style={style.cardContainer}>
      <View style={style.cardContent}>
        <View>
          <View style={style.cardImage}></View>
          <View style={style.textContainer}>
            <Text style={style.courseTitle}></Text>
          </View>
        </View>

        <View style={style.enrollContainer}>
          <Text style={style.coursePrice}></Text>
        </View>
      </View>
    </Pressable>
  );
};

export default TopCoursesLoadingCard;
