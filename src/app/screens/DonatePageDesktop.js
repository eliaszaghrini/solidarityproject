import React, { useState, Component } from 'react';
import { Image, Check, Text, View, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { Link, Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { } from 'react-router-dom';
import { donateStyle } from '../globalStyles/desktopDonate';
import { Sticky, StickyContainer } from 'react-sticky';
import { Dimensions } from 'react-native';
import CreditDesktop from './CreditDesktop';
import PaypalDesktop from './PaypalDesktop';
import ChequeDesktop from './ChequeDesktop';
import FrontPagePhone from './FrontPagePhone';
import amex from '../assets/images/payments/amex@3x.png';
import discover from '../assets/images/payments/discover@3x.png';
import mastercard from '../assets/images/payments/mastercard@3x.png';
import visadebit from '../assets/images/payments/visaDebit@3x.png';
import lockClosed from '../assets/images/payments/lockClosedSharp@3x.png';
import backgroundImage from '../assets/images/photos/home_page_cover.jpg';
import solidarityLogo from '../assets/images/solidarityLogo/solidarityLogo3x.jpg';
import { Formik } from 'formik';
import { Switch } from 'react-view-switch';
import checkIcon from '../assets/images/payments/checkboxSharp.svg';

const DonatePageDesktop = myProps => {

    const [email, setEmail] = useState('MyMail');
    const [otherAmmount, setOtherAmmount] = useState(myProps.location?.state?.ammount);
    const [isIncreaseDonationChecked, setIncreaseDonation] = useState(true);
    const[textStyleCredit,setTextStyleCredit]=useState(donateStyle.textUnselected);
    const[textStylePaypal,setTextStylePaypal]=useState(donateStyle.textUnselected);
    const[textStyleCheque,setTextStyleCheque]=useState(donateStyle.textUnselected);
    const [creditBtn, setcreditBtn] = useState(false);
    const [paypalBtn, setpaypalBtn] = useState(false);
    const [chequeBtn, setchequeBtn] = useState(false);
    const [creditStyle, setcreditStyle] = useState(donateStyle.creditStyleBtnUnselected);
    const [paypalStyle, setpaypalStyle] = useState(donateStyle.paypalStyleBtnUnselected);
    const [chequeStyle, setchequeStyle] = useState(donateStyle.chequeStyleBtnUnselected);
    const creditStyleBtnPressHandler = () => {
        if (creditBtn === false) {
            setcreditStyle(donateStyle.creditStyleBtnSelected);
            setpaypalStyle(donateStyle.paypalStyleBtnUnselected);
            setchequeStyle(donateStyle.chequeStyleBtnUnselected);
            setTextStyleCredit(donateStyle.textSelected);
            setTextStylePaypal(donateStyle.textUnselected);
            setTextStyleCheque(donateStyle.textUnselected);
            setcreditBtn(true);
            setpaypalBtn(false);
            setchequeBtn(false);
        }
    }
    const paypalStyleBtnPressHandler = () => {
        if (paypalBtn === false) {
            setpaypalStyle(donateStyle.paypalStyleBtnSelected);
            setcreditStyle(donateStyle.creditStyleBtnUnselected);
            setchequeStyle(donateStyle.chequeStyleBtnUnselected);
            setTextStyleCredit(donateStyle.textUnselected);
            setTextStylePaypal(donateStyle.textSelected);
            setTextStyleCheque(donateStyle.textUnselected);
            setpaypalBtn(true);
            setcreditBtn(false);
            setchequeBtn(false);
        }
    }
    const chequeStyleBtnPressHandler = () => {
        if (chequeBtn === false) {
            setchequeStyle(donateStyle.chequeStyleBtnSelected);
            setpaypalStyle(donateStyle.paypalStyleBtnUnselected);
            setcreditStyle(donateStyle.creditStyleBtnUnselected);
            setTextStyleCredit(donateStyle.textUnselected);
            setTextStylePaypal(donateStyle.textUnselected);
            setTextStyleCheque(donateStyle.textSelected);
            setchequeBtn(true);
            setpaypalBtn(false);
            setcreditBtn(false);
        }
    }

    const increaseDonationHandler = () => {
        switch (isIncreaseDonationChecked) {
            case true:
                setIncreaseDonation(false);
                break;
            case false:
                setIncreaseDonation(true);
                break;

            default:
                setIncreaseDonation(true);
                break;
        }
    }
    const [isChecked, setChecked] = useState(false);
    const [chkSource, setChkSource] = useState();
    const [chkStyle, setChkStyle] = useState(donateStyle.chkUnchecked);

    const handleChk = () => {

        if (isChecked) {
            setChkSource();
            setChecked(false);
            setChkStyle(donateStyle.chkUnchecked);
        }
        else {
            setChkSource(checkIcon);
            setChecked(true);
            setChkStyle(donateStyle.chkChecked);
        }

    }
    return (
        <View>

            <StickyContainer>

                <View style={donateStyle.topBar}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Image style={donateStyle.logo} source={solidarityLogo} />
                    </Link>
                    <View style={donateStyle.containerTopBar}>
                        <Image source={lockClosed} style={donateStyle.lockLogo} />
                        <Text style={donateStyle.topOptionsBtn}>SECURE PAYMENT PAGE</Text>
                    </View>

                </View>
                <Image style={donateStyle.backgroundImage} source={backgroundImage} />
                <View style={donateStyle.donationWindow}>
                    <View>
                        <Text style={donateStyle.title}>YOU ARE DONATING</Text>
                        <Text style={donateStyle.descriptionDonationWindow}>Your generous gift will help feed families and rebuild homes.</Text>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={donateStyle.ammountWindowDonate}
                                onChangeText={(otherAmmount) => setOtherAmmount(otherAmmount)}
                                placeholder='AMOUNT'
                                defaultValue={myProps.location?.state?.ammount} />
                            <Text style={{ marginStart: 20, marginTop: 41, fontFamily: 'futura-condensed-bold', fontSize: 30, lineHeight: 66 }}>$ - USD</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => handleChk()}>
                                <Image style={[chkStyle, { marginTop: 34, width: 30, height: 30, marginStart: 40 }]} source={chkSource} />
                            </TouchableOpacity>
                            <Text style={[donateStyle.descriptionDonationWindow, { width: 212, marginStart: 20 }]}>Increase my donation amount to cover fees.</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={[donateStyle.title, { marginTop: 50, marginStart: 159 }]}>PAYMENT METHOD</Text>
                    <Router>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={creditStyle} onPress={() => creditStyleBtnPressHandler()}>
                                <NavLink to={{
                                pathname: "/donate/credit_or_debit",
                                state: { ammount: otherAmmount }
                            }}style={{ textDecoration: "none", width:"100%",}}>
                                    <Text style={textStyleCredit}>
                                        CREDIT/DEBIT CARD
                                    </Text>
                                </NavLink>
                            </TouchableOpacity>
                            <TouchableOpacity style={paypalStyle} onPress={() => paypalStyleBtnPressHandler()}>
                                <NavLink to='/donate/paypal' style={{ textDecoration: "none" }}>
                                    <Text style={textStylePaypal}>
                                        PAYPAL
                                    </Text>
                                </NavLink>
                            </TouchableOpacity>
                            <TouchableOpacity style={chequeStyle} onPress={() => chequeStyleBtnPressHandler()}>
                                <NavLink to='/donate/cheque_or_bank_transfer' style={{ textDecoration: "none" }}>
                                    <Text style={textStyleCheque}>
                                        CHEQUE / BANK TRANSFER
                                </Text>
                                </NavLink>
                            </TouchableOpacity>

                        </View>

                        <Route path="/donate/credit_or_debit" component={CreditDesktop}></Route>
                        <Route path="/donate/paypal" component={PaypalDesktop}></Route>
                        <Route path="/donate/cheque_or_bank_transfer" component={ChequeDesktop}></Route>
                    </Router>
                </View>

                <View style={donateStyle.containerFooter}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Link to="/getInTouch" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={[donateStyle.footerBtn, { marginStart: 80, width: 132, }]}>GET IN TOUCH</TouchableOpacity>
                        </Link>
                        <Link to="/terms&Conditions" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={donateStyle.footerBtn}>TERMS & CONDITIONS</TouchableOpacity>
                        </Link>
                        <Link to="/privacyPolicy" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={donateStyle.footerBtn}>PRIVACY POLICY</TouchableOpacity>
                        </Link>
                    </View>
                    <View
                        style={donateStyle.containerNewsletter}>
                        <TouchableOpacity style={donateStyle.newsletterBtn}>SUBSCRIBE TO OUR NEWSLETTER</TouchableOpacity>
                        <TextInput
                            style={donateStyle.emailInput}
                            onChangeText={(email) => setEmail(email)}
                            placeholder='YOUR EMAIL'
                        />
                    </View>
                </View>

                <Sticky disableCompensation>{({ style, }) => (
                    <header style={style}>
                        <View style={donateStyle.topBar}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Image style={donateStyle.logo} source={solidarityLogo} />
                            </Link>
                            <View style={donateStyle.containerTopBar}>
                                <Image source={lockClosed} style={donateStyle.lockLogo} />
                                <Text style={donateStyle.topOptionsBtn}>SECURE PAYMENT PAGE</Text>
                            </View>
                        </View>
                    </header>)}
                </Sticky>

            </StickyContainer>

        </View>
    );

}
export default DonatePageDesktop;