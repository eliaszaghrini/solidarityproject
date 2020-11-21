import { StyleSheet } from 'react-native';
import colors from '../config/colors';

export const frontStyle = StyleSheet.create({
    modalTitle: {
        marginTop: 20,
        fontSize: 20,
        marginStart:"5%",
        marginEnd:"5%",
        fontFamily: 'futura-condensed-bold',
        textAlign: "center"
    },
    modalBody: {
        marginTop: 15,
        fontFamily: 'futura',
        fontSize: 18,
        marginStart:"10%",
        marginEnd:"10%",
        textAlign: "center"
    },
    modalIconContainer: {
        width: 180,
        height: 60,
        marginTop: 20,
        marginBottom:20,
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
        width: 40,
        height: 40,
        resizeMode: "contain",
        alignSelf: "center"
    },
    socialMediaBtn2: {
        height: 40,
        width: 40,
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
        marginTop: 12,
        justifyContent: "center",
        backgroundColor: colors.pinkishRed,
        color: "white",
        textAlign: "center"
    },
    windowDonate: {
        height: undefined,
        width: "95%",
        backgroundColor: "white",
        borderColor: colors.midnight,
        alignSelf:"center",
        borderWidth: 6,
        marginEnd: 10,
        marginStart:10,
        marginTop: 10,
    },
    titleWindowDonate: {
        color: colors.midnight,
        lineHeight:57,
        width: "94%",
        height: undefined,
        marginTop: 20,
        marginStart: 16,
        fontFamily: "futura-condensed-bold",
        fontSize: 30,
        textAlign: "center"
    },
    donateBtnUnselected: {
        height: 60,
        width: "30%",
        borderWidth: 2,
        borderColor: colors.midnight,
        textAlign: 'center',
        fontFamily: "futura-condensed-bold",
        fontSize: 22,
        justifyContent: 'center'
    },
    donateBtnSelected: {
        height: 60,
        width: "30%",
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
        width: "94%",
        marginTop: 20,
        marginStart: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    descriptionWindowDonate: {
        color: colors.midnight,
        lineHeight:32,
        width: "94%",
        height: undefined,
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
        width: "94%",
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
        width: "94%",
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
        width: "94%",
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
        width: 339,
        height: 66,
        backgroundColor: colors.pinkishRed,
        marginEnd:36,
        marginTop:40
    },
    textGraphicCover: {
        fontFamily: 'futura-condensed-bold',
        flex: 1,
        fontSize: 60,
        alignSelf: "center",
        marginTop: -5,
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
        paddingLeft: 20,
        marginTop: 20,
        lineHeight:72
    },
    body: {
        color: colors.midnight,
        width: "90%",
        fontFamily: 'futura',
        fontSize: 18,
        alignSelf: "start",
        marginStart: 20,
        marginTop: 20,
        lineHeight:32
    },
    youtubeVideo: {
        width: 336,
        height: 170,
        resizeMode: "contain",
        marginStart: 20,
        marginTop: 20,
        marginBottom:20,
        backgroundColor: colors.emerald,
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
        marginStart: 20,
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
        height: 670,
        width: 240,
        marginTop: 20,
        marginStart: 20,
        marginBottom:40,
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
        marginStart: 20,
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
        fontSize: 22,
        justifyContent: "center",
        paddingLeft:16
    },
});