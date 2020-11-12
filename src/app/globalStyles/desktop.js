import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 1440;
const guidelineBaseHeight = 3005;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export const frontStyle = StyleSheet.create({

    modalTitle: {
        marginTop: 40,
        fontSize: 40,
        fontFamily: 'futura-condensed-bold',
        textAlign: "center"
    },
    modalBody: {
        marginTop: 30,
        fontFamily: 'futura',
        width: 644,
        marginStart: 80,
        marginEnd: 80,
        height: 62,
        fontSize: 20,
        textAlign: "center"
    },
    modalIconContainer: {
        width: 240,
        height: 60,
        marginTop: 40,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    containerModal: {
        width: undefined,
        height: undefined,
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: "white",
        borderColor: colors.midnight,
        borderWidth: 6
    },
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
    topDonateBtn: {
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        marginEnd: 30,
        height: 36,
        width: 146,
        marginTop: 49,
        justifyContent: "center",
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: "center"
    },
    topOptionsBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        marginEnd: 30,
        backgroundColor: "white",
        height: 36,
        width: 185,
        marginTop: 49,
        justifyContent: "center",
        textAlign: "center"
    },
    coverBackground: {
        width: "100%",
        height: 762,
        flexDirection: "row-reverse",
        display: "flex",
        justifyContent: "space-between"
    },
    windowDonate: {
        height: 644,
        width: 462,
        backgroundColor: "white",
        borderColor: colors.midnight,
        borderWidth: 6,
        marginEnd: "8%",
        marginBottom: 40,
        marginTop: 78,
        alignSelf: "flex-end"
    },
    titleWindowDonate: {
        color: colors.midnight,
        lineHeight: 57,
        width: 389,
        height: 114,
        marginTop: 30,
        marginStart: 31,
        fontFamily: "futura-condensed-bold",
        fontSize: 40,
        textAlign: "center"
    },
    donateBtnUnselected: {
        height: 60,
        width: 116,
        borderWidth: 2,
        borderColor: colors.midnight,
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: 25,
        justifyContent: 'center'
    },
    donateBtnSelected: {
        height: 60,
        width: 116,
        borderWidth: 2,
        borderColor: colors.emerald,
        backgroundColor: colors.emerald,
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: 25,
        justifyContent: 'center',
        color: "white"
    },
    buttonContainerWindowDonate: {
        height: 60,
        width: 390,
        marginTop: 30,
        marginStart: 30,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    descriptionWindowDonate: {
        color: colors.midnight,
        lineHeight: 32,
        width: 389,
        height: 72,
        marginTop: 30,
        marginStart: 61,
        paddingEnd: 61,
        fontFamily: "futura-condensed-bold",
        fontSize: 25,
        textAlign: "center"
    },
    ammountWindowDonate: {
        color: colors.midnight,
        height: 60,
        width: 390,
        textAlign: "center",
        borderColor: colors.midnight,
        marginTop: 20,
        borderWidth: 2,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        marginStart: 30
    },
    donateBtnWindowDonate: {
        height: 80,
        width: 390,
        marginTop: 30,
        marginStart: 30,
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: 40,
        justifyContent: 'center'
    },
    latestDonationWindowDonate: {
        lineHeight: 32,
        width: 389,
        height: 72,
        marginTop: 26,
        marginStart: 30,
        fontFamily: "futura-condensed-bold",
        fontSize: 20,
        textAlign: "left",
        color: colors.midnight
    },
    backgroundGraphicCover: {
        backgroundColor: colors.pinkishRed,
        marginTop: 82,
        alignSelf: "flex-start",
        marginStart: "8%"
    },
    textGraphicCover: {
        fontFamily: 'futura-condensed-bold',
        flex: 1,
        fontSize: 80,
        alignSelf: "center",
        marginStart: 15,
        marginEnd: 15,
        marginTop: -8,
        marginBottom: -10,
        color: "white"
    },
    containerSection2: {
        width: "100%",
        height: undefined,
        backgroundColor: "white"
    },
    subtitle: {
        color: colors.midnight,
        fontFamily: 'futura-condensed-bold',
        fontSize: 60,
        alignSelf: "start",
        marginStart: 100,
        marginTop: 40
    },
    body: {
        color: colors.midnight,
        lineHeight: 32,
        width: "55%",
        fontFamily: 'futura-light',
        fontSize: 20,
        alignSelf: "start",
        marginStart: 100,
        marginTop: 30,
    },
    youtubeVideo: {
        width: 660,
        height: 334,
        resizeMode: "contain",
        marginStart: 100,
        marginTop: 30,
        marginBottom: 40,
    },
    containerSection3: {
        width: "100%",
        height: undefined,
        backgroundColor: colors.emerald,
    },
    learnMoreBtn: {
        height: 60,
        width: 196,
        alignContent: "center",
        marginTop: 48,
        marginBottom: 40,
        marginStart: 100,
        backgroundColor: "white",
        flexDirection: 'row'
    },
    containerSection4: {
        width: "100%",
        height: undefined,
        backgroundColor: "white"
    },
    containerAssociations: {
        height: 280,
        width: 800,
        marginTop: 42,
        marginBottom: 40,
        marginStart: 100,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    containerLogo: {
        height: 280,
        width: 220,
    },
    textLogo: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 25,
        marginTop: 16,
        alignSelf: "center",
        textAlign: "center"
    },
    associationLogo: {
        width: 120,
        height: 120,
        marginTop: 50,
        resizeMode: "contain",
        alignSelf: "center"
    },
    containerSection5: {
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
    containerSection6: {
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
        textAlign: "center",
        borderColor: colors.midnight,
        borderWidth: 2,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        justifyContent: "center"
    },
});

export const programsStyle = StyleSheet.create({
    title: {
        marginTop: scale(40),
        fontSize: scale(60),
        fontFamily: 'futura-condensed-bold',
        marginStart: scale(120)
    },
    topBar: {
        width: "100%",
        height: scale(128),
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between"
    },
    logo: {
        flex: 16,
        width: scale(230),
        height: scale(70),
        resizeMode: "contain",
        alignSelf: "flex-start",
        marginStart: scale(80),
        marginBottom: scale(30),
        marginTop: scale(30)
    },
    topDonateBtn: {
        fontFamily: "futura-condensed-bold",
        fontSize: scale(24),
        height: scale(36),
        width: scale(146),
        marginTop: scale(49),
        marginEnd: "1%",
        justifyContent: "center",
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: "center"
    },
    containerTopBar: {
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: "flex-end",
        marginEnd: scale(80)
    },
    topOptionsBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: scale(24),
        backgroundColor: "white",
        height: scale(36),
        width: scale(185),
        marginTop: scale(49),
        justifyContent: "center",
        textAlign: "center"
    },
    subtitle: {
        color: colors.midnight,
        marginStart: scale(120),
        fontFamily: 'futura-condensed-bold',
        fontSize: scale(40),
        alignSelf: "start",
        lineHeight: scale(72),
        marginTop: scale(30)
    },
    body: {
        color: colors.midnight,
        lineHeight: scale(32),
        width: scale(776),
        fontFamily: 'futura',
        fontSize: scale(20),
        alignSelf: "start",
        marginStart: scale(120),
        marginTop: scale(30),
    },
    bulletText: {
        fontFamily: 'futura-condensed-bold',
        fontSize: scale(25),
        marginStart: scale(120),
        marginTop: scale(30)
    },
    picture: {
        width: scale(776),
        height: scale(536),
        marginStart: scale(120),
        marginTop: scale(30),
        resizeMode: "cover"
    },
    donateBtn: {
        height: scale(80),
        width: scale(332),
        marginTop: scale(30),
        marginStart: scale(120),
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: scale(40),
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
        fontSize: scale(24),
        marginStart: scale(40),
        backgroundColor: "white",
        height: scale(72),
        width: scale(205),
        marginTop: scale(30),
        justifyContent: "center",
    },
    containerNewsletter: {
        flexDirection: 'row',
        backgroundColor: "white",
        alignSelf: "flex-end",
        marginEnd: scale(80),
        marginTop: scale(30),
        marginBottom: scale(30),
        marginStart: scale(80),
    },
    newsletterBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: scale(24),
        marginEnd: scale(29),
        backgroundColor: "white",
        height: scale(72),
        width: scale(293),
        justifyContent: "center",
    },
    emailInput: {
        color: colors.midnight,
        height: scale(60),
        width: scale(269),
        textAlign: "center",
        borderColor: colors.midnight,
        borderWidth: 2,
        fontFamily: "futura-condensed-bold",
        fontSize: scale(24),
        justifyContent: "center"
    },
});

export const donateStyle = StyleSheet.create({
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
        marginTop:30
    },
    containerTopBar: {
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: "flex-end",
        marginEnd: 80
    },
    lockLogo: {
        width: 15,
        height: 20,
        marginEnd: 20,
        marginTop: 57
    },
    topOptionsBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 24,
        backgroundColor: "white",
        height: 36,
        width: 213,
        marginTop: 52,
        justifyContent: "center",
        textAlign: "center"
    },
    backgroundImage:{
width:"100%",
height:375,

    },
    donationWindow:{
        width:846,
        height:236,
        marginStart:120,
        marginTop:-150,
        backgroundColor:"white",
        borderColor: colors.midnight,
        borderWidth: 6,
    },
    subtitle: {
        color: colors.midnight,
        marginStart: 120,
        fontFamily: 'futura-condensed-bold',
        fontSize: 40,
        alignSelf: "start",
        lineHeight: 72,
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
        height:80,
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