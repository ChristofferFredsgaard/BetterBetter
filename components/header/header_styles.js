import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    headerContainer: {
        zIndex: 100,
        resizeMode: 'contain',
        position: 'relative',
        padding: wp('2%'),
        top: hp('5%'),
        width: wp('100%'),
        height: hp('16%'),
        display: 'flex',
        alignSelf: 'flex-start',
    },

    profileContainer: {
        zIndex: 100,
        resizeMode: 'contain',
        position: 'absolute',
        top: hp('1.4%'),
        width: hp('5.5%'),
        height: hp('5.5%'),
        display: 'flex',
        alignSelf: 'flex-end',
    },

    headerSubtitle: {
        fontSize: hp('1.7%'),
        color: '#ffffff',
        fontWeight: '200',
        letterSpacing: 1.8
    },

    headerTitle: {
        top: hp('0.2%'),
        fontSize: hp('4%'),
        fontWeight: '300',
        color: '#ffffff',
        letterSpacing: 1.2,
    },
});

export default styles;