import React from "react";
import {
  Text,
  View,
} from "react-native";


//Styles
import styles from "./styles";

//Section Imports
import Header from "../../components/header/header";

//Api Calls
import ApiCalls from "../../components/api_calls/calls";
import Search from "../../components/search/search";

//Token
var token = ApiCalls.ApiToken.Token;

const SearchScreen = () => {
  return (
    <View style={styles.Container}>
      <Header />
      <Search />
    </View>
  );
};

export default SearchScreen;