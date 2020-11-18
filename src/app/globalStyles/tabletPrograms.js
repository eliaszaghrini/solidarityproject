import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Dimensions } from 'react-native';

export const programsStyle = StyleSheet.create({
    title: {
        marginTop: 22,
        fontSize: 40,
        fontFamily: 'futura-condensed-bold',
        marginStart: 40
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
        marginEnd:20,
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
    topOptionsBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 20,
        backgroundColor: "white",
        height: 36,
        width: 140,
        marginTop: 11,
        justifyContent: "center",
        textAlign: "center"
    },
    subtitle: {
        color: colors.midnight,
        width:"90%",
        marginStart: 40,
        fontFamily: 'futura-condensed-bold',
        fontSize: 40,
        alignSelf: "start",
        lineHeight:72,
        marginTop: 20
    },
    body: {
        color: colors.midnight,
        lineHeight: 32,
        width: "90%",
        fontFamily: 'futura',
        fontSize: 18,
        alignSelf: "start",
        marginStart: 40,
        marginTop: 20,
    },
    bulletText: {
        width: "90%",
        fontFamily: 'futura-condensed-bold',
        fontSize: 22,
        marginStart: 40,
        marginTop: 20
    },
    picture: {
        width: "90%",
        height: 504,
        marginStart: 40,
        marginTop: 30,
        resizeMode: "cover"
    },
    donateBtn: {
        height: 60,
        width: 332,
        marginTop: 20,
        marginStart: 40,
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
    },
    footerBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 22,
        marginStart: 20,
        backgroundColor: "white",
        height: 72,
        width: 205,
        marginTop: 20,
        justifyContent: "center"
    },
    containerNewsletter: {
        flex: 1,
        top: 0,
        flexDirection: 'row',
        backgroundColor: "white",
        marginTop: 20,
        marginEnd: 80,
        marginStart:40,
        marginBottom:26
    },
    newsletterBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 22,
        marginEnd: 29,
        backgroundColor: "white",
        height: 72,
        width: 293,
        justifyContent: "center"
    },
    emailInput: {
        color: colors.midnight,
        height: 60,
        width: 269,
        borderColor: colors.midnight,
        borderWidth: 2,
        fontFamily: "futura-condensed-bold",
        fontSize: 22,
        justifyContent: "center",
        marginTop:6,
        paddingLeft:20
    },
});
