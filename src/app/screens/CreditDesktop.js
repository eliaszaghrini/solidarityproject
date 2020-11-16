import React, { useState, Component } from 'react';
import { Image, Check, Text, Button, View, ScrollView, TouchableOpacity, TextInput, Linking } from 'react-native';
import colors from '../config/colors';
import { Link, Switch, Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import { } from 'react-router-dom';
import { creditStyle, donateStyle } from '../globalStyles/desktopDonate';
import { Sticky, StickyContainer } from 'react-sticky';
import { Dimensions } from 'react-native';
import FrontPageDesktop from './FrontPageDesktop';
import ProgramsPage from './ProgramsPage';
import FrontPagePhone from './FrontPagePhone';
import amex from '../assets/images/payments/amex@3x.png';
import discover from '../assets/images/payments/discover@3x.png';
import mastercard from '../assets/images/payments/mastercard@3x.png';
import visadebit from '../assets/images/payments/visaDebit@3x.png';
import solidarityLogo from '../assets/images/solidarityLogo/solidarityLogo3x.jpg';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Checkbox, OutlinedInput, StylesProvider } from '@material-ui/core';
import checkIcon from '../assets/images/payments/checkboxSharp.svg';
import { countries, states } from '../config/arrays';

const ReviewSchema = yup.object({
    CardNo: yup.string()
        .required()
        .test('is-length-16', 'Enter a number of 16-digit', (val) => {
            return parseInt(val).toString().length == 16;
        }),

    ExpiryDate: yup.string()
        .required()
        .max(5),

    SecurityCode: yup.string()
        .required()
        .max(3),

    DonorName: yup.string()
        .required(),

    FirstName: yup.string()
        .required(),

    LastName: yup.string()
        .required(),

    Country: yup.string()
        .required(),

    City: yup.string()
        .required(),

    Address: yup.string()
        .required(),

    Email: yup.string()
        .required(),
})

function CreditDesktop() {
    const [myCountry, setCountry] = useState("hey");

    const [isChecked1, setChecked1] = useState(false);
    const [chkSource1, setChkSource1] = useState();
    const [chkStyle1, setChkStyle1] = useState(creditStyle.chkUnchecked);

    const [isChecked2, setChecked2] = useState(false);
    const [chkSource2, setChkSource2] = useState();
    const [chkStyle2, setChkStyle2] = useState(creditStyle.chkUnchecked);

    const [isChecked3, setChecked3] = useState(false);
    const [chkSource3, setChkSource3] = useState();
    const [chkStyle3, setChkStyle3] = useState(creditStyle.chkUnchecked);

    const handleChk = (key) => {
        switch (key) {
            case 1:
                if (isChecked1) {
                    setChkSource1();
                    setChecked1(false);
                    setChkStyle1(creditStyle.chkUnchecked);
                }
                else {
                    setChkSource1(checkIcon);
                    setChecked1(true);
                    setChkStyle1(creditStyle.chkChecked);
                }
                break;

            case 2:
                if (isChecked2) {
                    setChkSource2();
                    setChecked2(false);
                    setChkStyle2(creditStyle.chkUnchecked);
                }
                else {
                    setChkSource2(checkIcon);
                    setChecked2(true);
                    setChkStyle2(creditStyle.chkChecked);
                }
                break;

            case 3:
                if (isChecked3) {
                    setChkSource3();
                    setChecked3(false);
                    setChkStyle3(creditStyle.chkUnchecked);
                }
                else {
                    setChkSource3(checkIcon);
                    setChecked3(true);
                    setChkStyle3(creditStyle.chkChecked);
                }
                break;

            default:
                break;
        }
    }
    
    const [isUS, setUS] = useState(false);
    const showState = (value) => {
        if (value === "United States")
            setUS(true);
        else
            setUS(false);
    }

    return (
        <View style={creditStyle.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={visadebit} style={[creditStyle.icons, { marginStart: 0 }]} />
                <Image source={mastercard} style={creditStyle.icons} />
                <Image source={discover} style={creditStyle.icons} />
                <Image source={amex} style={creditStyle.icons} />
            </View>

            <Formik
                initialValues={{ CardNo: '', ExpiryDate: '', SecurityCode: '', DonorName: '', Country: '', FirstName: '', LastName: '', State: '', City: '', ZipCode: '', Address: '', Email: '', Message: '' }}
                validationSchema={ReviewSchema}
                validateOnMount
                onSubmit={(values, actions) => {
                    actions.resetForm();
                }}>
                {(props) => (
                    <View onPress={showState(props.values.Country)}>
                        <Text style={creditStyle.body}>Please note your card information is not held on our site, it is processed securely using the Salsa Labs gateway. </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={creditStyle.boxDescription}>16-DIGIT CARD NO.</Text>
                                <TextInput
                                    placeholder='Enter your card no. here'
                                    onChangeText={props.handleChange('CardNo')}
                                    value={props.values.CardNo}
                                    onBlur={props.handleBlur('CardNo')}
                                    style={creditStyle.inputText} />
                                <Text style={creditStyle.errors}>{props.touched.CardNo && props.errors.CardNo}</Text>
                            </View>
                            <View style={{ marginStart: 40 }}>
                                <Text style={creditStyle.boxDescription}>EXPIRY DATE</Text>
                                <TextInput
                                    placeholder='MM/YY'
                                    onChangeText={props.handleChange('ExpiryDate')}
                                    value={props.values.ExpiryDate}
                                    onBlur={props.handleBlur('ExpiryDate')}
                                    style={[creditStyle.inputText, { width: 120 }]} />
                                <Text style={creditStyle.errors}>{props.touched.ExpiryDate && props.errors.ExpiryDate}</Text>
                            </View>
                            <View style={{ marginStart: 40 }}>
                                <Text style={creditStyle.boxDescription}>SECURITY CODE</Text>
                                <TextInput
                                    placeholder='123'
                                    onChangeText={props.handleChange('SecurityCode')}
                                    value={props.values.SecurityCode}
                                    onBlur={props.handleBlur('SecurityCode')}
                                    style={[creditStyle.inputText, { width: 120 }]} />
                                <Text style={creditStyle.errors}>{props.touched.SecurityCode && props.errors.SecurityCode}</Text>
                            </View>
                        </View>

                        <Text style={creditStyle.boxDescription}>NAME ON CARD</Text>
                        <TextInput
                            placeholder='Enter your name here'
                            onChangeText={props.handleChange('DonorName')}
                            value={props.values.DonorName}
                            onBlur={props.handleBlur('DonorName')}
                            style={[creditStyle.inputText, { width: 661 }]} />
                        <Text style={creditStyle.errors}>{props.touched.DonorName && props.errors.DonorName}</Text>
                        <Text style={creditStyle.title}>BILLING INFORMATION</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={creditStyle.boxDescription}>FIRST NAME</Text>
                                <TextInput
                                    placeholder='Your first name'
                                    onChangeText={props.handleChange('FirstName')}
                                    value={props.values.FirstName}
                                    onBlur={props.handleBlur('FirstName')}
                                    style={creditStyle.inputText} />
                                <Text style={creditStyle.errors}>{props.touched.FirstName && props.errors.FirstName}</Text>
                                <Text style={creditStyle.boxDescription}>COUNTRY</Text>
                                <select
                                    name="Select country"
                                    value={props.values.Country}
                                    onChange={props.handleChange('Country')}

                                    style={{
                                        width: 341,
                                        height: 60,
                                        borderWidth: 2,
                                        borderColor: "grey",
                                        fontFamily: "futura-condensed-bold",
                                        color: colors.midnight,
                                        fontSize: 25,
                                        lineHeight: 57,
                                        paddingStart: 20,
                                        outline: 'none'
                                    }}
                                >
                                    {countries.map((option) => (
                                        <option value={option.name}>{option.name}</option>
                                    ))}
                                </select>
                                <Text style={creditStyle.errors}>{props.touched.Country && props.errors.Country}</Text>
                                <Text style={creditStyle.boxDescription}>CITY</Text>
                                <TextInput
                                    placeholder='Enter your city'
                                    onChangeText={props.handleChange('City')}
                                    value={props.values.City}
                                    onBlur={props.handleBlur('City')}
                                    style={creditStyle.inputText} />
                                <Text style={creditStyle.errors}>{props.touched.City && props.errors.City}</Text>
                            </View>

                            <View style={{ marginStart: 40 }}>
                                <Text style={creditStyle.boxDescription}>LAST NAME</Text>
                                <TextInput
                                    placeholder='Your last name'
                                    onChangeText={props.handleChange('LastName')}
                                    value={props.values.LastName}
                                    onBlur={props.handleBlur('LastName')}
                                    style={creditStyle.inputText} />
                                <Text style={creditStyle.errors}>{props.touched.LastName && props.errors.LastName}</Text>
                                <Text style={creditStyle.boxDescription}>STATE</Text>
                                <select
                                    name="Select state"
                                    value={props.values.State}
                                    onChange={props.handleChange('State')}
                                    disabled={!isUS}
                                    style={{
                                        width: 341,
                                        height: 60,
                                        borderWidth: 2,
                                        borderColor: "grey",
                                        fontFamily: "futura-condensed-bold",
                                        color: colors.midnight,
                                        fontSize: 25,
                                        lineHeight: 57,
                                        paddingStart: 20,
                                        outline: 'none'
                                    }}
                                >
                                    {states.map((option) => (
                                        <option value={option.text}>{option.text}</option>
                                    ))}

                                </select>
                                <Text style={creditStyle.errors}>{props.touched.State && props.errors.State}</Text>
                                <Text style={creditStyle.boxDescription}>ZIP CODE</Text>
                                <TextInput
                                    placeholder='Enter your zip code'
                                    onChangeText={props.handleChange('ZipCode')}
                                    value={props.values.ZipCode}
                                    onBlur={props.handleBlur('ZipCode')}
                                    style={creditStyle.inputText} />
                                <Text style={creditStyle.errors}>{props.touched.ZipCode && props.errors.ZipCode}</Text>
                            </View>
                        </View>

                        <Text style={creditStyle.boxDescription}>LINE 1 OF ADDRESS</Text>
                        <TextInput
                            placeholder='Enter the first line of your address'
                            onChangeText={props.handleChange('Address')}
                            value={props.values.Address}
                            onBlur={props.handleBlur('Address')}
                            style={[creditStyle.inputText, { width: 722 }]} />
                        <Text style={creditStyle.errors}>{props.touched.Address && props.errors.Address}</Text>

                        <Text style={creditStyle.boxDescription}>EMAIL</Text>
                        <TextInput
                            placeholder='Enter your email'
                            onChangeText={props.handleChange('Email')}
                            value={props.values.Email}
                            onBlur={props.handleBlur('Email')}
                            style={[creditStyle.inputText, { width: 430 }]} />
                        <Text style={creditStyle.errors}>{props.touched.Email && props.errors.Email}</Text>

                        <Text style={creditStyle.boxDescription}>LEAVE A PUBLIC MESSAGE (OPTIONAL)</Text>
                        <View style={creditStyle.messageContainer}>
                            <TextInput
                                placeholder='Your message goes here. Leaving a message encourages others to donate.'
                                onChangeText={props.handleChange('Message')}
                                value={props.values.Message}
                                onBlur={props.handleBlur('Message')}
                                style={creditStyle.inputMessage} />
                            <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 12 }}>
                                <TouchableOpacity onPress={() => handleChk(2)}>
                                    <Image style={[chkStyle2, { marginTop: 30 }]} source={chkSource2} />
                                </TouchableOpacity>
                                <Text style={[creditStyle.body, { marginStart: 20, paddingBottom: 17 }]}>Show my first name</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => handleChk(3)}>
                                <Image style={[chkStyle3, { marginTop: 34, width: 30, height: 30 }]} source={chkSource3} />
                            </TouchableOpacity>
                            <Text style={[creditStyle.body, { marginStart: 20, marginTop: 30 }]}>Please keep me updated with news from Lebanese Solidarity </Text>
                        </View>
                        <TouchableOpacity CardNo='Submit' disabled={!props.isValid} onPress={props.handleSubmit} style={creditStyle.donateBtn}>DONATE NOW</TouchableOpacity>
                        <Text style={[creditStyle.body, { width: 722, marginTop: 30 }]}>Lebanese Solidarity is a 501(c)(3) charitable organisation and charitable contributions are tax-deductible. For any enquires please contact{" "}
                            <TouchableOpacity onPress={() => { Linking.openURL('mailto:INFO@SOLIDARITY.ORG') }} >
                                <Text style={{ textDecorationLine: "underline" }}>info@lebanesesolidarity.org</Text>
                            </TouchableOpacity>.
                        </Text>
                    </View>
                )}

            </Formik>
        </View>
    );
}

export default CreditDesktop;