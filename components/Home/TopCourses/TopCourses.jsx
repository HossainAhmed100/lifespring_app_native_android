import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import TopCourseCard from "../../Crads/TopCourseCard/TopCourseCard";
import { COLORS, SIZES } from "../../../context";
import styles from "./topCourses.style";
import TopCoursesLoadingCard from "../../Crads/TopCourseCard/TopCoursesLoadingCard";

const TopCourses = ({ data, isLoading }) => {
  return (
    <View style={styles.continer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Top Courses</Text>
        <TouchableOpacity style={styles.viewAllBtn}>
          <Text style={styles.viewAllBtnText}>VIEW ALL</Text>
          <Entypo name="chevron-small-right" size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.courseContainer}>
        {isLoading ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => <TopCoursesLoadingCard key={item} />}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.small }}
          />
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
              <TopCourseCard key={item._id} item={item} />
            )}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.small }}
          />
        )}
      </View>
    </View>
  );
};

export default TopCourses;
