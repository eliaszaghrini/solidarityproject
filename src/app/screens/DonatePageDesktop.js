import React, { useState, Component } from 'react';
import { Image, Check, Text, View, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { Link, Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { } from 'react-router-dom';
import { donateStyle } from '../globalStyles/desktopDonate';
import { Sticky, StickyContainer } from 'react-sticky';
import { Dimensions } from 'react-native';
import CreditDesktop from './CreditDesktop';
import ProgramsPage from './ProgramsPage';
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

function DonatePageDesktop() {

    const [email, setEmail] = useState('MyMail');
    const [otherAmmount, setOtherAmmount] = useState('0');
    const [isIncreaseDonationChecked, setIncreaseDonation] = useState(true);
    const [creditBtn, setcreditBtn] = useState(true);
    const [paypalBtn, setpaypalBtn] = useState(false);
    const [chequeBtn, setchequeBtn] = useState(false);
    const [creditStyle, setcreditStyle] = useState(donateStyle.creditStyleBtnSelected);
    const [paypalStyle, setpaypalStyle] = useState(donateStyle.paypalStyleBtnUnselected);
    const [chequeStyle, setchequeStyle] = useState(donateStyle.chequeStyleBtnUnselected);
    const creditStyleBtnPressHandler = () => {
        if (creditBtn === false) {
            setcreditStyle(donateStyle.creditStyleBtnSelected);
            setpaypalStyle(donateStyle.paypalStyleBtnUnselected);
            setchequeStyle(donateStyle.chequeStyleBtnUnselected);
            setcreditBtn(true);
            setpaypalBtn(false);
            setchequeBtn(false);
        }
        else {
            setcreditStyle(donateStyle.creditStyleBtnUnselected);
            setcreditBtn(false);
        }
    }
    const paypalStyleBtnPressHandler = () => {
        if (paypalBtn === false) {
            setpaypalStyle(donateStyle.paypalStyleBtnSelected);
            setcreditStyle(donateStyle.creditStyleBtnUnselected);
            setchequeStyle(donateStyle.chequeStyleBtnUnselected);
            setpaypalBtn(true);
            setcreditBtn(false);
            setchequeBtn(false);
        }
        else {
            setpaypalStyle(donateStyle.paypalStyleBtnUnselected);
            setpaypalBtn(false);
        }
    }
    const chequeStyleBtnPressHandler = () => {
        if (chequeBtn === false) {
            setchequeStyle(donateStyle.chequeStyleBtnSelected);
            setpaypalStyle(donateStyle.paypalStyleBtnUnselected);
            setcreditStyle(donateStyle.creditStyleBtnUnselected);
            setchequeBtn(true);
            setpaypalBtn(false);
            setcreditBtn(false);
        }
        else {
            setchequeStyle(donateStyle.chequeStyleBtnUnselected);
            setchequeBtn(false);
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
                                placeholder='$' />
                            <Text style={{ marginStart: 20, marginTop: 41, fontFamily: 'futura-condensed-bold', fontSize: 30, lineHeight: 66 }}>$ - USD</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => handleChk()}>
                                <Image style={[chkStyle, { marginTop: 34, width: 30, height: 30,marginStart:40 }]} source={chkSource} />
                            </TouchableOpacity>
                            <Text style={[donateStyle.descriptionDonationWindow,{width:212,marginStart:20}]}>Increase my donation amount to cover fees.</Text>
                        </View>
                    </View>

                </View>

                <View>
                    <Text style={[donateStyle.title, { marginTop: 50, marginStart: 159 }]}>PAYMENT METHOD</Text>
                    <Router>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={creditStyle}>
                                <NavLink to='/donate/creditordebit'>
                                    CREDIT/DEBIT CARD
                            </NavLink>
                            </View>
                            <NavLink to='/donate/paypal' activeStyle={donateStyle.paypalStyleBtnUnselected} >
                                <View style={paypalStyle} >PAYPAL</View>
                            </NavLink>
                        </View>

                        <Route path="/donate/creditordebit" component={CreditDesktop}></Route>
                        <Route path="/donate/paypal" component={ProgramsPage}></Route>
                    </Router>
                </View>

                <View style={donateStyle.containerSection6}>
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