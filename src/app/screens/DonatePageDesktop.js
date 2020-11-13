import React, { useState, Component } from 'react';
import { Image, Check, Text, Button, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { } from 'react-router-dom';
import { donateStyle } from '../globalStyles/desktop';
import { Sticky, StickyContainer } from 'react-sticky';
import { Dimensions } from 'react-native';
import FrontPageDesktop from './FrontPageDesktop';
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
        if (creditBtn == false) {
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
        if (paypalBtn == false) {
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
        if (chequeBtn == false) {
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
                        <Text style={donateStyle.descriptionDonationWindow}>Increase my donation amount to cover fees.</Text>
                    </View>
                </View>
                <View>
                    <Text style={[donateStyle.title,{marginTop:50,marginStart:159}]}>PAYMENT METHOD</Text>
                    <Router>
                        <View style={{ flexDirection: 'row' }}>
                        <Link to='/donate/creditordebit' style={{ textDecoration: 'none',}} onPress={creditStyleBtnPressHandler}>
                                <View style={creditStyle} >CREDIT/DEBIT CARD</View>
                            </Link>
                            <Link to='/donate/paypal' style={{ textDecoration: 'none',}} onPress={paypalStyleBtnPressHandler}>
                                <View style={paypalStyle} >PAYPAL</View>
                            </Link>
                        </View>

                        <Route path="/donate/creditordebit" component={ProgramsPage}></Route>
                        <Route path="/donate/paypal" component={FrontPageDesktop}></Route>
                    </Router>
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