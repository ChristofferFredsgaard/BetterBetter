import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  ContentContainer: {
    backgroundColor: "#303030",
    width: wp("100%"),
    height: Dimensions.get("window").height,
  },
  SearchBar: {
    alignSelf: "center",
    backgroundColor: "#404040",
    color: "white",
    fontSize: hp("1.8%"),
    fontWeight: "300",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#303030",
    width: wp("100%"),
    padding: 10,
    width: wp("99%"),
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  titles: {
    marginTop: hp("15%"),
    width: wp("100%"),
    height: hp("75%"),
    position: "absolute",
  },
  title: {
    fontSize: hp("1.8%"),
    fontWeight: "300",
    color: "white",
    letterSpacing: 1.2,
  },
  subtitle: {
    fontSize: hp("1.7%"),
    color: "#555",
    fontWeight: "100",
    color: "white",
    marginTop: hp("1%"),
    letterSpacing: 1.2,
  },
  leagueTable: {
    marginTop: hp("4%"),
    marginBottom: hp("1%"),
  },
  button: {
    zIndex: 100,
    alignSelf: 'center',
    alignItems: 'flex-start',
    width: wp("15%"),
    height: hp('5%'),
    position: "absolute",
    backgroundColor: 'black',
  },
  button: {
    zIndex: 100,
    alignSelf: 'flex-start',
    width: wp('8%'),
    height: Dimensions.get('window').height,
    position: 'absolute',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    marginLeft: wp('-4%')
  },
});

export default styles;
