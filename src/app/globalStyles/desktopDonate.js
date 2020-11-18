import { StyleSheet } from 'react-native';
import colors from '../config/colors';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 1440;
const guidelineBaseHeight = 3005;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export const donateStyle = StyleSheet.create({
    title: {
        height: 62,
        marginTop: 40,
        fontSize: 60,
        fontFamily: 'futura-condensed-bold',
        marginStart: 40,
        color:colors.midnight,
        lineHeight: 72
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
    backgroundImage: {
        width: "100%",
        height: 375,
        resizeMode: "cover"

    },
    donationWindow: {
        width: 858,
        height: 248,
        marginStart: 120,
        marginTop: -150,
        backgroundColor: "white",
        borderColor: colors.midnight,
        borderWidth: 6,
        flexDirection: 'row'
    },
    ammountWindowDonate: {
        color: colors.midnight,
        height: 66,
        width: 156,
        textAlign: "left",
        borderColor: colors.pinkishRed,
        marginTop: 45,
        borderWidth: 3,
        fontFamily: "futura-condensed-bold",
        fontSize: 30,
        marginStart: 40
    },
    creditStyleBtnUnselected: {
        width: 250,
        height: 60,
        borderWidth: 2,
        fontSize: 25,
        fontFamily: 'futura-condensed-bold',
        borderColor: colors.midnight,
        color: colors.midnight,
        marginStart: 159,
        marginTop: 42,
        textAlign: "center",
        justifyContent: 'center'
    },
    creditStyleBtnSelected: {
        width: 250,
        height: 60,
        fontSize: 25,
        fontFamily: 'futura-condensed-bold',
        color: "white",
        backgroundColor: colors.emerald,
        marginStart: 159,
        marginTop: 42,
        textAlign: "center",
        justifyContent: 'center'
    },
    paypalStyleBtnUnselected: {
        width: 141,
        height: 60,
        borderWidth: 2,
        fontSize: 25,
        fontFamily: 'futura-condensed-bold',
        borderColor: colors.midnight,
        color: colors.midnight,
        marginStart: 20,
        marginTop: 42,
        textAlign: "center",
        justifyContent: 'center'
    },
    paypalStyleBtnSelected: {
        width: 141,
        height: 60,
        fontSize: 25,
        fontFamily: 'futura-condensed-bold',
        color: "white",
        backgroundColor: colors.emerald,
        marginStart: 20,
        marginTop: 42,
        textAlign: "center",
        justifyContent: 'center'
    },
    chequeStyleBtnUnselected: {
        width: 250,
        height: 60,
        borderWidth: 2,
        fontSize: 25,
        fontFamily: 'futura-condensed-bold',
        borderColor: colors.midnight,
        color: colors.midnight,
        marginStart: 159,
        marginTop: 42,
        textAlign: "center",
        justifyContent: 'center'
    },
    chequeStyleBtnSelected: {
        width: 250,
        height: 60,
        fontSize: 25,
        fontFamily: 'futura-condensed-bold',
        color: "white",
        backgroundColor: colors.emerald,
        marginStart: 159,
        marginTop: 42,
        textAlign: "center",
        justifyContent: 'center'
    },
    subtitle: {
        color: colors.midnight,
        marginStart: 120,
        fontFamily: 'futura-condensed-bold',
        color:colors.midnight,
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
    descriptionDonationWindow: {
        width: 464,
        fontFamily: 'futura-condensed-bold',
        color:colors.midnight,
        fontSize: 25,
        marginStart: 40,
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
    chkUnchecked:{
        width:20,
        height:20,
        borderWidth:2,
        borderColor:colors.midnight,
    },
    chkChecked:{
        width:20,
        height:20,
        borderColor:colors.midnight,
    },
});

export const creditStyle = StyleSheet.create({
    container: {
        marginStart: 160,
        marginTop: 20,
        width: 722
    },
    icons: {
        width: 64,
        height: 40,
        resizeMode: "contain",
        marginStart: 20
    },
    body:{
        fontFamily:"futura",
        color:colors.midnight,
        fontSize:25,
        lineHeight:43,
        marginTop:17
    },
    boxDescription:{
        fontFamily:"futura-condensed-bold",
        color:colors.midnight,
        fontSize:25,
        lineHeight:57,
        marginTop:20
    },
    inputText:{
        width:341,
        height:60,
        borderWidth:2,
        borderColor:"grey",
        fontFamily:"futura-condensed-bold",
        color:colors.midnight,
        fontSize:25,
        lineHeight:57,
        paddingStart:20,
        outline:'none'
    },
    errors:{
        fontFamily:"futura",
        fontSize:20,
        lineHeight:57,
        color:colors.pinkishRed,
        marginStart:20
    },
    title: {
        height: 62,
        marginTop: 50,
        fontSize: 60,
        color:colors.midnight,
        fontFamily: 'futura-condensed-bold',
        lineHeight: 72
    },
    select:{
        width:341,
        height:60,
        borderWidth:2,
        borderColor:"grey",
        fontFamily:"futura-condensed-bold",
        color:colors.midnight,
        fontSize:25,
        lineHeight:57,
        paddingStart:20,
        outline:'none'
    },
    messageContainer:{
        borderColor:"grey",
        borderWidth:2,
        width:722,
        height:142
    },
    inputMessage:{
        width:"100%",
        height:68,
        fontFamily:"futura-condensed-bold",
        color:colors.midnight,
        fontSize:25,
        lineHeight:57,
        paddingStart:20,
        marginTop:10
    },
    chkUnchecked:{
        width:20,
        height:20,
        borderWidth:2,
        borderColor:colors.midnight,
    },
    chkChecked:{
        width:20,
        height:20,
        borderColor:colors.midnight,
    },
    donateBtn:{
        width:341,
        height:80,
        backgroundColor:colors.pinkishRed,
        color:"white",
        fontFamily:"futura-condensed-bold",
        fontSize:40,
        alignItems:'center',
        justifyContent:"center",
        textAlign:"center",
        marginTop:40
    },
    donateBtnUnchecked:{
        width:341,
        height:80,
        backgroundColor:"grey",
        color:"white",
        fontFamily:"futura-condensed-bold",
        fontSize:40,
        alignItems:'center',
        justifyContent:"center",
        textAlign:"center",
        marginTop:40
    }
});

export const paypalStyle = StyleSheet.create({
    container: {
        marginStart: 160,
        marginTop: 20,
        width: 722
    },
    cardsImage:{
        width:319,
        height:110,
        resizeMode:'contain'
    },
    body:{
        fontFamily:"futura",
        color:colors.midnight,
        fontSize:25,
        lineHeight:43,
        marginTop:20,
        width:767,
    },
    paypalButton:{
        width:288,
        height:44,
        marginTop:20
    }
});

export const chequeStyle = StyleSheet.create({
    container: {
        marginStart: 160,
        marginTop: 20,
        width: 722
    },
    body:{
        fontFamily:"futura",
        color:colors.midnight,
        fontSize:25,
        lineHeight:43,
    },
    bodyBold:{
        fontFamily:"futura-condensed-bold",
        color:colors.midnight,
        fontSize:25,
        lineHeight:57,
    },
});
