import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import style from "./allCourseCard.style";
import { icons } from "../../../context";

const AllCourseCard = ({ item, handleCardPress }) => {
  const descriptionText = item.description;
  const descriptionSplit = descriptionText.slice(0, 85) + "...";
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
    <Pressable
      onPress={() => handleCardPress(item._id)}
      style={style.cardContainer}
    >
      <View style={style.cardContent}>
        <View>
          <Image
            style={style.cardImage}
            resizeMode="cover"
            source={{ uri: item.thumbnail }}
          />
          <View style={style.textContainer}>
            <Text style={style.courseTitle}>{item.courseName}</Text>
            <Text style={style.courseDescription}>{descriptionSplit}</Text>
          </View>
        </View>

        <View style={style.infoContainer}>
          <View style={style.infoContent}>
            <Image
              style={style.infoIcon}
              resizeMode="cover"
              source={icons.vicon}
            />
            <Text style={style.infoText}>{item.totalLecture} Lessons</Text>
          </View>

          <View style={style.infoContent}>
            <Image
              style={style.infoIcon}
              resizeMode="cover"
              source={icons.lavel}
            />
            <Text style={style.infoText}>11 hours</Text>
          </View>
        </View>

        <View style={style.enrollContainer}>
          <View style={style.priceContainer}>
            <Text style={style.coursePrice}>
              ৳ {priceConverter(item.enrollmentFee)}
            </Text>
          </View>
          {/* <Pressable style={style.enrollBtn}>
            <Text style={style.enrollBtnText}>Enroll now</Text>
          </Pressable> */}
          <Pressable style={style.saveBtn}>
            <Image
              style={style.saveBtnIcon}
              resizeMode="cover"
              source={icons.heart}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default AllCourseCard;
