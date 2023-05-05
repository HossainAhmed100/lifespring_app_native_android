import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import AllCourseCard from "../../Crads/AllCourseCard/AllCourseCard";
import styles from "./allCourses.style";
import { COLORS } from "../../../context";
import AllCoursesLoadingCard from "../../Crads/AllCourseCard/AllCoursesLoadingCard";
import { useRouter } from "expo-router";

const AllCourses = ({ data, isLoading }) => {
  const router = useRouter();
  const handleCardPress = (id) => {
    router.push(`../Home/Screens/CourseDetails/${id}`);
  };
  return (
    <View style={styles.continer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>All Courses</Text>
        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllBtnText}>VIEW ALL</Text>
          <Entypo name="chevron-small-right" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.courseContainer}>
        {isLoading
          ? [1, 2, 3, 4, 5].map((itemId) => (
              <AllCoursesLoadingCard key={itemId} />
            ))
          : data.map((item) => (
              <AllCourseCard
                handleCardPress={handleCardPress}
                key={item._id}
                item={item}
              />
            ))}
      </View>
    </View>
  );
};

export default AllCourses;
