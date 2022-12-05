import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: wp("100%"),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#303030'
    },

    textInput: {
        width: wp('70%'),
        color: 'black',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: wp('2%'),
        backgroundColor: 'white'
    },

    button: {
        backgroundColor: 'green',
        width: wp('70%'),
        alignItems: 'center',
        margin: wp('2%'),
        padding: 10,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1
    },

    title: {
        fontSize: heightPercentageToDP('2.5%'),
        fontWeight: '300',
        color: 'white',
        letterSpacing: 1.2,
        marginBottom: hp('5%'),
    },
})
    export default styles;