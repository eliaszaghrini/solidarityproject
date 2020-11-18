import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Dimensions } from 'react-native';

export const programsStyle = StyleSheet.create({
    title: {
        marginTop: 22,
        fontSize: 40,
        fontFamily: 'futura-condensed-bold',
        marginStart: 20
    },
    topBar: {
        width: "100%",
        height: 60,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between"
    },
    logo: {
        flex: 16,
        width: 115,
        height: 35,
        resizeMode: "contain",
        alignSelf: "flex-start",
        marginStart: 20,
        marginBottom: 12,
        marginTop: 12
    },
    topDonateBtn: {
        fontFamily: "futura-condensed-bold",
        fontSize:20,
        height: 36,
        width: 115,
        marginTop: 11,
        justifyContent: "center",
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: "center"
    },
    containerTopBar: {
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: "space-between",
        marginEnd: 20
    },

    subtitle: {
        color: colors.midnight,
        width:"90%",
        marginStart: 20,
        fontFamily: 'futura-condensed-bold',
        fontSize: 30,
        alignSelf: "start",
        lineHeight:45,
        marginTop: 30
    },
    body: {
        color: colors.midnight,
        lineHeight: 32,
        width: "90%",
        fontFamily: 'futura',
        fontSize: 18,
        alignSelf: "start",
        marginStart: 20,
        marginTop: 20,
    },
    bulletText: {
        width: "90%",
        fontFamily: 'futura-condensed-bold',
        fontSize: 22,
        marginStart: 20,
        marginTop: 20
    },
    picture: {
        width: "90%",
        height: 231,
        marginStart: 20,
        marginTop: 20,
        resizeMode: "cover"
    },
    donateBtn: {
        height: 60,
        width: 332,
        marginTop: 20,
        marginStart: 20,
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: 30,
        justifyContent: 'center'
    },
    containerFooter: {
        width: "100%",
        height: undefined,
        backgroundColor: "white",
        marginTop:30,
    },
    footerBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 18,
        marginStart: 20,
        backgroundColor: "white",
        height: 36,
        width: 151,
        marginTop: 10,
        justifyContent: "center"
    },
    containerNewsletter: {
        backgroundColor: "white",
        marginTop: 10,
        marginStart:20,
        marginBottom:20
    },
    newsletterBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 18,
        backgroundColor: "white",
        height: 36,
        width: 220,
        justifyContent: "center"
    },
    emailInput: {
        color: colors.midnight,
        height: 60,
        width: 269,
        borderColor: colors.midnight,
        marginTop:20,
        borderWidth: 2,
        fontFamily: "futura-condensed-bold",
        fontSize: 18,
        justifyContent: "center",
        paddingLeft:16
    },
});
