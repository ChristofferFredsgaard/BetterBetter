import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    ContentContainer: {
        marginTop: hp('-27%'),
        backgroundColor: '#202020',
        width: wp('100%'),
        height: hp('75%')
    },
    section: {
        marginTop: hp('4%'),
    },
    split: {
        marginTop: hp('0.5%'),
        marginBottom: hp('0.5%'),
    },
    titles: {
        marginTop: hp('15%'),
        width: wp('100%'),
        height: hp('75%'),
        position: 'absolute'
    },
    title: {
        fontSize: hp('2.2%'),
        fontWeight: '400',
        color: 'white',
        letterSpacing: 1.2,
    },
    subtitle: {
        fontSize: hp('1.8%'),
        color: '#555',
        fontWeight: '300',
        color: 'white',
        marginTop: hp('1%'),
        letterSpacing: 1.2
    },
    body: {
        fontSize: hp('1.7%'),
        color: '#555',
        fontWeight: '200',
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