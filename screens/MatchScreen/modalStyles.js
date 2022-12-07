import { StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const modalStyles = StyleSheet.create({
    msContainer: {
        backgroundColor: '#202020',
        width: '100%',
        height: Dimensions.get('window').height,
    },

    msText: {
        width: wp('95%'),
        marginTop: hp('14%'),
        alignSelf: 'center',
        alignItems: 'center'
    },

    msClose: {  
        fontWeight: '100',
        textAlign: 'center',
        textAlignVertical: 'top',
        color: 'white',
        fontSize: 36,
    },

    msTouchableHighlight: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: hp('77%'),
        backgroundColor: 'black',
        opacity: 0.8,
        width: wp('110%'),
        height: hp('10%')
    },

    msPoster: {
        resizeMode: 'cover',
        width: wp('80%'),
        height: hp('55%'),
        borderRadius: 20,
        borderWidth: 1
    },
});
export default modalStyles;