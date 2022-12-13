import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    ContentContainer: {
        backgroundColor: '#303030',
        width: wp('100%'),
        height: Dimensions.get('window').height,
    },
    SearchBar: {
        alignSelf: 'center',
        backgroundColor: '#404040',
        color: 'white',
        fontSize: hp('1.8%'),
        fontWeight: '300',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#303030',
        width: wp('100%'),
        padding: 10,
        width: wp("99%")
    },
    titles: {
        marginTop: hp('15%'),
        width: wp('100%'),
        height: hp('75%'),
        position: 'absolute'
    },
    title: {
        fontSize: hp('1.8%'),
        fontWeight: '300',
        color: 'white',
        letterSpacing: 1.2,
    },
    subtitle: {
        fontSize: hp('1.7%'),
        color: '#555',
        fontWeight: '100',
        color: 'white',
        marginTop: hp('1%'),
        letterSpacing: 1.2
    },
    leagueTable: {
        marginTop: hp('4%'),
        marginBottom: hp('1%'),
    },

    //Modal Close
    msClose: {  
        fontWeight: '100',
        textAlign: 'center',
        textAlignVertical: 'top',
        color: 'white',
        fontSize: 18,
    },
    msTouchableHighlight: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#303030',
        width: wp('110%'),
        height: hp('3%')
    },
});

    export default styles;