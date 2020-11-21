import React, { useState, Component } from 'react';
import { Image, Check, Text, Button, View, ScrollView, TouchableOpacity, TextInput, Linking } from 'react-native';
import colors from '../config/colors';
import { Link, Switch, Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { } from 'react-router-dom';
import { paypalStyle, donateStyle } from '../globalStyles/desktopDonate';
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

function PaypalDesktop() {

    return (
        <View style={paypalStyle.container}>
            <Image source={cardsImage} style={paypalStyle.cardsImage} />
            <Text style={paypalStyle.body}>Please use the Paypal button below to complete your donation. You will be redirected to this site when you complete your payment.</Text>
            <TouchableOpacity>
                <Image source={paypalButton} style={paypalStyle.paypalButton} />
            </TouchableOpacity>
        </View>
    );
}

export default PaypalDesktop;