import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import style from "./coursedetails.style";
import { COLORS } from "../../../../context/theme";

const CouresInf = () => {
  const { id } = useSearchParams();
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      await axios
        .get(`http://192.168.1.103:5000/specificCourse/${id}`)
        .then((res) => {
          setCourse(res.data);
          setIsLoading(false);
        });
    };
    loadData();
  }, [id]);
  const listDat = () => {
    if (!isLoading) {
      course.coursePurpuse.map((item) => console.log(item));
    }
  };
  // listDat();
  return (
    <ScrollView style={style.contentContainer}>
      <View>
        {isLoading ? (
          <Text> Loading....</Text>
        ) : (
          <View>
            <View>
              <Text style={style.courseTitle}>{course.courseName}</Text>
              <View>
                <View>
                  <Text>{course.totalLecture}</Text>
                </View>
                <View>
                  <Text>{course.courseDuration}</Text>
                </View>
                <View>
                  <Text>{course.courseLevel}</Text>
                </View>
              </View>
            </View>
            <View>
              {course.coursePurpuse.map((item, index) => (
                <Text style={style.courseLearning} key={index}>
                  <Feather
                    name="check-circle"
                    size={20}
                    color={COLORS.primary}
                  />{" "}
                  {item}
                </Text>
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CouresInf;
