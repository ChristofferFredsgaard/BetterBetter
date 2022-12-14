import React from "react";
import {
  Text,
  View,
} from "react-native";


//Styles
import styles from "./styles";

//Section Imports
import Header from "../../components/header/header";
import Search from "../../components/search/search";

const SearchScreen = () => {
  return (
    <View style={styles.Container}>
      <Header />
      <Search />
    </View>
  );
};

export default SearchScreen;
