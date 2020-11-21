import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Dimensions } from 'react-native';


export const thankYouStyle = StyleSheet.create({

    topBar: {
        width: "100%",
        height: 128,
        top: 0,
        flexDirection: 'row',
        backgroundColor: "white",
    },
    logo: {
        width: 230,
        height: 70,
        resizeMode: "contain",
        alignSelf: "flex-start",
        marginStart: 80,
        marginBottom: 30,
        marginTop: 30
    },
    containerTopBar: {
        flex: 1,
        top: 0,
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: "flex-end"
    },
    topOptionsBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        marginEnd: 80,
        backgroundColor: "white",
        height: 36,
        width: 185,
        marginTop: 49,
        justifyContent: "center",
        textAlign: "center"
    },
    coverBackground: {
        width: "100%",
        resizeMode:'contain',
        height: 442,
    },
    windowThanks: {
        height: 294,
        width: 852,
        marginStart:120,
        marginTop:114,
        backgroundColor: "white",
        borderColor: colors.midnight,
        borderWidth: 6,
    },
    titleWindowThanks: {
        color: colors.midnight,
        lineHeight: 72,
        marginTop: 40,
        marginStart: 40,
        fontFamily: "futura-condensed-bold",
        fontSize: 60,
    },
    description: {
        color: colors.midnight,
        lineHeight: 32,
        fontFamily: 'futura',
        fontSize: 20,
        marginStart: 40,
        marginTop: 20,
    },
    subtitle: {
        color: colors.midnight,
        fontFamily: 'futura-condensed-bold',
        fontSize: 60,
        alignSelf: "start",
        marginStart: 100,
        marginTop: 40
    },
    descriptionBold:{
        color: colors.midnight,
        lineHeight: 32,
        width: "73%",
        fontFamily: 'futura-condensed-bold',
        fontSize: 25,
        marginStart: 40,
        marginTop: 30,
    },
    body: {
        color: colors.midnight,
        lineHeight: 32,
        width: "55%",
        fontFamily: 'futura',
        fontSize: 20,
        alignSelf: "start",
        marginStart: 100,
        marginTop: 30,
    },
    containerShare: {
        width: "100%",
        height: undefined,
        backgroundColor: colors.pinkishRed
    },
    containerSocialMedia: {
        height: 60,
        width: 330,
        marginTop: 30,
        marginStart: 100,
        marginBottom: 60,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    socialMediaBtn: {
        height: 60,
        width: 60,
    },
    socialMediaIcon: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        alignSelf: "center"
    },
    containerFooter: {
        width: "100%",
        height: undefined,
        backgroundColor: "white",
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1
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
        borderColor: colors.midnight,
        borderWidth: 2,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        justifyContent: "center",
        marginTop:6,
        paddingLeft:20
    },
});
