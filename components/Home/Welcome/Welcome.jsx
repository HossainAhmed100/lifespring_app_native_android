import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SIZES, icons, images } from "../../../context";
import styles from "./welcome.style";

const courseCategory = [
  "All-Course",
  "Child-Development",
  "Certification",
  "Emotional-Balance",
  "Mental-Helth",
  "Phycial-Helth",
  "RelationShip",
  "Spirituality",
];
const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const [activeCategory, setActiveCategory] = useState("All-Course");

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.userName}>Hossain Ahmed</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={images.profile} style={styles.profileImg} />
        </View>
      </View>

      {/* <View style={styles.seachContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} handleClick={handleClick}>
          <Image
            source={icons.searchs}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View> */}

      <View style={styles.tabsContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={courseCategory}
          renderItem={({ item }) => (
            <Pressable
              style={styles.tab(activeCategory, item)}
              onPress={() => {
                setActiveCategory(item);
              }}
            >
              <Text style={styles.tabText(activeCategory, item)}>{item}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
