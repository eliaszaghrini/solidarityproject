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
        marginStart:"10%",
        marginEnd:"10%",
        fontFamily: 'futura-condensed-bold',
        textAlign: "center"
    },
    modalBody: {
        marginTop: 30,
        fontFamily: 'futura',
        fontSize: 20,
        marginStart:"10%",
        marginEnd:"10%",
        textAlign: "center"
    },
    modalIconContainer: {
        width: 240,
        height: 60,
        marginTop: 40,
        marginBottom:40,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    containerModal: {
        width:undefined,
        height: undefined,
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: "white",
        borderColor: colors.midnight,
        borderWidth: 6
    },
    socialMediaIcon2: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        alignSelf: "center"
    },
    socialMediaBtn2: {
        height: 60,
        width: 60,
    },
    topBar: {
        width: "100%",
        height: 60,
        top: 0,
        flexDirection: 'row',
        backgroundColor: "white",
    },
    logo: {
        width: 115,
        height: 35,
        resizeMode: "contain",
        alignSelf: "flex-start",
        marginStart: 20,
        marginBottom: 13,
        marginTop: 12
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
        fontSize: 20,
        marginEnd: 20,
        height: 36,
        width: 115,
        marginTop: 13,
        justifyContent: "center",
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: "center"
    },
    topOptionsBtn: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 20,
        marginEnd: 30,
        backgroundColor: "white",
        height: 36,
        width: 154,
        marginTop: 13,
        justifyContent: "center",
        textAlign: "center"
    },
    coverBackground: {
        width: "100%",
        height: 652,
        flexDirection: "row-reverse",
        display:"flex",
        justifyContent:"space-between",
        flexWrap:"wrap"
    },
    windowDonate: {
        height: undefined,
        width: 367,
        backgroundColor: "white",
        borderColor: colors.midnight,
        position:"relative",
        borderWidth: 6,
        marginEnd: "5%",
        marginBottom: 40,
        marginTop: 40,
    },
    titleWindowDonate: {
        color: colors.midnight,
        lineHeight:57,
        width: 324,
        height: 114,
        marginTop: 20,
        marginStart: 16,
        fontFamily: "futura-condensed-bold",
        fontSize: 30,
        textAlign: "center"
    },
    donateBtnUnselected: {
        height: 60,
        width: 96,
        borderWidth: 2,
        borderColor: colors.midnight,
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: 22,
        justifyContent: 'center'
    },
    donateBtnSelected: {
        height: 60,
        width: 96,
        borderWidth: 2,
        borderColor: colors.emerald,
        backgroundColor: colors.emerald,
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: 22,
        justifyContent: 'center',
        color: "white"
    },
    buttonContainerWindowDonate: {
        height: 60,
        width: 335,
        marginTop: 20,
        marginStart: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    descriptionWindowDonate: {
        color: colors.midnight,
        lineHeight:32,
        width: 334,
        height: 72,
        marginTop: 18,
        marginStart: 10,
        paddingEnd: 10,
        fontFamily: "futura-condensed-bold",
        fontSize: 22,
        textAlign: "center"
    },
    ammountWindowDonate: {
        color: colors.midnight,
        height: 60,
        width: 335,
        textAlign: "center",
        borderColor: colors.midnight,
        marginTop: 20,
        borderWidth: 2,
        fontFamily: "futura-condensed-bold",
        fontSize: 22,
        marginStart: 10
    },
    donateBtnWindowDonate: {
        height: 60,
        width: 334,
        marginTop: 20,
        marginStart: 10,
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: 30,
        justifyContent: 'center'
    },
    latestDonationWindowDonate: {
        width: 389,
        height: 72,
        marginTop: 20,
        marginStart: 10,
        paddingEnd: 10,
        fontFamily: "futura-condensed-bold",
        fontSize: 18,
        textAlign: "left",
        color: colors.midnight
    },
    backgroundGraphicCover: {
        backgroundColor: colors.pinkishRed,
        marginTop:40,
        marginStart:"5%",
        alignSelf:"flex-start",
    },
    textGraphicCover: {
        fontFamily: 'futura-condensed-bold',
        flex: 1,
        fontSize: 60,
        alignSelf: "center",
        marginStart:15,
        marginEnd:15,
        marginTop:-8,
        marginBottom:-10,
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
        fontSize: 40,
        alignSelf: "start",
        paddingLeft: 40,
        marginTop: 21,
        lineHeight:72
    },
    body: {
        color: colors.midnight,
        width: "90%",
        fontFamily: 'futura',
        fontSize: 18,
        alignSelf: "start",
        marginStart: 40,
        marginTop: 19,
        lineHeight:32
    },
    youtubeVideo: {
        width: 660,
        height: 334,
        resizeMode: "contain",
        marginStart: 40,
        marginTop: 20,
        marginBottom:20,
    },
    containerSection3: {
        width: "100%",
        height: undefined,
        backgroundColor: colors.emerald,
    },
    learnMoreBtn: {
        height: 60,
        width: 179,
        alignContent: "center",
        marginTop: 24,
        marginStart: 42,
        marginBottom:43,
        backgroundColor: "white",
        flexDirection: 'row'
    },
    containerSection4: {
        width: "100%",
        height: undefined,
        backgroundColor: "white"
    },
    containerAssociations: {
        height: 210,
        width: 720,
        marginTop: 40,
        marginStart: 40,
        marginBottom:40,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    containerLogo: {
        height: 210,
        width: 240,
    },
    textLogo: {
        color: colors.midnight,
        fontFamily: "futura-condensed-bold",
        fontSize: 22,
        lineHeight:32,
        marginTop: 16,
        alignSelf: "center",
        textAlign: "center"
    },
    associationLogo: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        alignSelf: "center"
    },
    containerSection5: {
        width: "100%",
        height: undefined,
        backgroundColor: colors.pinkishRed
    },
    containerSocialMedia: {
        height: 40,
        width: 250,
        marginTop: 20,
        marginStart: 42,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom:40
    },
    socialMediaBtn: {
        height: 40,
        width: 40,
    },
    socialMediaIcon: {
        width: 40,
        height: 40,
        resizeMode: "contain",
        alignSelf: "center"
    },
    containerSection6: {
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
        marginStart:40
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