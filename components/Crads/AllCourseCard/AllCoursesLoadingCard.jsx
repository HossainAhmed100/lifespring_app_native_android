import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import style from "./allCoursesLoadingCard.style";

const AllCoursesLoadingCard = () => {
  return (
    <Pressable style={style.cardContainer}>
      <View style={style.cardContent}>
        <View>
          <View style={style.cardImage}></View>
          <View style={style.textContainer}>
            <Text style={style.courseTitle}> </Text>
            <Text style={style.courseDescription}></Text>
          </View>
        </View>

        <View style={style.enrollContainer}>
          <Text style={style.coursePrice}></Text>
          <Pressable style={style.enrollBtn}>
            <Text style={style.enrollBtnText}></Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default AllCoursesLoadingCard;
