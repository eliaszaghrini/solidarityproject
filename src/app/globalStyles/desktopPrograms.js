import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Dimensions } from 'react-native';

export const programsStyle = StyleSheet.create({
    title: {
        marginTop: 40,
        fontSize: 60,
        fontFamily: 'futura-condensed-bold',
        marginStart: 120
    },
    topBar: {
        width: "100%",
        height: 128,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between"
    },
    logo: {
        flex: 16,
        width: 230,
        height: 70,
        resizeMode: "contain",
        alignSelf: "flex-start",
        marginStart: 80,
        marginBottom: 30,
        marginTop: 30
    },
    topDonateBtn: {
        fontFamily: "futura-condensed-bold",
        fontSize:24,
        height: 36,
        width: 146,
        marginTop: 49,
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
        marginEnd: 80
    },
    topOptionsBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        backgroundColor: "white",
        height: 36,
        width: 185,
        marginTop: 49,
        justifyContent: "center",
        textAlign: "center"
    },
    subtitle: {
        color: colors.midnight,
        marginStart: 120,
        fontFamily: 'futura-condensed-bold',
        fontSize: 40,
        alignSelf: "start",
        lineHeight:72,
        marginTop: 30
    },
    body: {
        color: colors.midnight,
        lineHeight: 32,
        width: 776,
        fontFamily: 'futura',
        fontSize: 20,
        alignSelf: "start",
        marginStart: 120,
        marginTop: 30,
    },
    bulletText: {
        fontFamily: 'futura-condensed-bold',
        fontSize: 25,
        marginStart: 120,
        marginTop: 30
    },
    picture: {
        width: 776,
        height: 536,
        marginStart: 120,
        marginTop: 30,
        resizeMode: "cover"
    },
    donateBtn: {
        height: 80,
        width: 332,
        marginTop: 30,
        marginStart: 120,
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: 40,
        justifyContent: 'center'
    },
    containerFooter: {
        width: "100%",
        height: undefined,
        backgroundColor: "white",
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        display: "flex",
        justifyContent: "space-between"
    },
    footerBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        marginStart: 40,
        backgroundColor: "white",
        height: 72,
        width: 205,
        marginTop: 30,
        justifyContent: "center",
    },
    containerNewsletter: {
        flexDirection: 'row',
        backgroundColor: "white",
        alignSelf: "flex-end",
        marginEnd: 80,
        marginTop: 30,
        marginBottom: 30,
        marginStart: 80,
    },
    newsletterBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        marginEnd: 29,
        backgroundColor: "white",
        height: 72,
        width: 293,
        justifyContent: "center",
    },
    emailInput: {
        color: colors.midnight,
        height: 60,
        width: 269,
        textAlign: "center",
        borderColor: colors.midnight,
        borderWidth: 2,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        justifyContent: "center"
    },
});
