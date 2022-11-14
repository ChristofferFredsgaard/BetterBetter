import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';

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
        opacity: 1
    },
    titles: {
        marginTop: hp('62%'),
        width: wp('100%'),
        alignItems: 'center',
        position: 'absolute'
    },
    title: {
        fontSize: heightPercentageToDP('2.5%'),
        fontWeight: '300',
        color: 'white',
        letterSpacing: 1.2
    },
    subtitle: {
        fontSize: heightPercentageToDP('2%'),
        color: '#555',
        fontWeight: '100',
        color: 'white',
        textAlign: 'center',
        marginTop: hp('1%'),
        marginLeft: wp('7%'),
        marginRight: wp('7%'),
        letterSpacing: 1.2
    },
})
    export default styles;