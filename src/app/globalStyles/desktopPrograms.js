import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 1440;
const guidelineBaseHeight = 3005;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

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
