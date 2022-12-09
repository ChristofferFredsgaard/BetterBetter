import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    ContentContainer: {
        backgroundColor: '#303030',
        width: '100%',
        height: Dimensions.get('window').height,
    },
    image: {
        marginTop: hp('10%'),
        width: wp('100%'),
        height: hp('50%'),
        opacity: 0.3
    },
    leagueSeparation: {
        marginTop: hp('2.5%'),
    },
    titles: {
        marginTop: hp('15%'),
        width: wp('100%'),
        height: hp('70%'),
        position: 'absolute',
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
})
    export default styles;