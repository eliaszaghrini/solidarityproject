import React, { useState, Component } from 'react';
import { Image, Check, Text, Button, View, ScrollView, TouchableOpacity, TextInput, Linking } from 'react-native';
import colors from '../config/colors';
import { Link, Switch, Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { } from 'react-router-dom';
import { chequeStyle, donateStyle } from '../globalStyles/desktopDonate';
import { Sticky, StickyContainer } from 'react-sticky';
import { Dimensions } from 'react-native';
import FrontPageDesktop from './FrontPageDesktop';
import ProgramsPage from './ProgramsPageDesktop';
import FrontPagePhone from './FrontPagePhone';
import cardsImage from '../assets/images/payments/paypalCards.jpg';
import paypalButton from '../assets/images/payments/paypalButton.jpg';
import mastercard from '../assets/images/payments/mastercard@3x.png';
import visadebit from '../assets/images/payments/visaDebit@3x.png';
import solidarityLogo from '../assets/images/solidarityLogo/solidarityLogo3x.jpg';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Checkbox, OutlinedInput, StylesProvider } from '@material-ui/core';
import checkIcon from '../assets/images/payments/checkboxSharp.svg';
import { countries, states } from '../config/arrays';

function ChequeDesktop() {

    return (
        <View style={chequeStyle.container}>
            <Text style={chequeStyle.body}>Follow the instructions below for offline donations:</Text>
            <View style={{ flexDirection: 'row',marginTop:20 }}>
                <View>
                    <Text style={chequeStyle.bodyBold}>CHEQUE DEPOSIT</Text>
                    <Text style={chequeStyle.bodyBold}>
                        PO Box 96503<br />
                        PMB 42271<br />
                        Washington, DC 20090-6503
                    </Text>
                </View>
                <View style={{ marginStart: 70, }}>
                    <Text style={[chequeStyle.bodyBold,{ marginStart: 0 }]}>BANK TRANSFER</Text>
                    <Text style={[chequeStyle.body,{ marginStart: 0,width:"60%",marginTop:9 }]}>
                        Please contact us at{" "}
                    <TouchableOpacity onPress={() => { Linking.openURL('mailto:treasurer@lebanesesolidarity.org') }} >
                            <Text style={{ textDecorationLine: "underline" }}>treasurer@lebanesesolidarity.org</Text>
                        </TouchableOpacity> to request information for wire transfer donations.
                    </Text>
                </View>
            </View>
            <TouchableOpacity>
                <Image source={paypalButton} style={chequeStyle.paypalButton} />
            </TouchableOpacity>
        </View>
    );
}

export default ChequeDesktop;