import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";
import { COLORS, SIZES } from "../../context";
import { Stack, useRouter } from "expo-router";
import Welcome from "../../components/Home/Welcome/Welcome";
import TopCourses from "../../components/Home/TopCourses/TopCourses";
import AllCourses from "../../components/Home/AllCourses/AllCourses";
import useFetch from "../../hooks/useFetch";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const { refetch, data, isLoading } = useFetch();
  const handleClick = (text) => {
    console.log(text);
  };
  const router = useRouter();
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  });
  const handleCardPress = (id) => {
    router.push(`./Screens/CourseDetails/${id}`);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar />
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <Welcome
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={handleClick}
        />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          <TopCourses data={data} isLoading={isLoading} />
          <AllCourses data={data} isLoading={isLoading} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
