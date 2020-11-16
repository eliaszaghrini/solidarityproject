import React, { useState, Component } from 'react';
import { Image, Check, Text, Button, View, ScrollView, TouchableOpacity, TextInput, ActionSheetIOS } from 'react-native';
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
import { Checkbox, OutlinedInput } from '@material-ui/core';
import checkIcon from '../assets/images/payments/checkboxSharp.svg';

const ReviewSchema = yup.object({
    CardNo: yup.string()
        .required()
        .min(4),

    body: yup.string()
        .required()
        .min(8),

    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating is a number from 1 to 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})



function CreditDesktop() {
    const [hey, sethey] = useState("Hello");
    const [isChecked, setChecked] = useState(false);
    const [mysource, setSource] = useState(discover);
    const [mystyle, setStyle] = useState(creditStyle.style1);

    const handlechk = () => {
        if (isChecked) {
            setSource(discover);
            setChecked(false);
            setStyle(creditStyle.style1);
        }
        else {
            setSource(checkIcon);
            setChecked(true);
            setStyle(creditStyle.style2);
        }
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
                initialValues={{ CardNo: '', ExpiryDate: '', SecurityCode: '', DonorName: '', body: '', rating: '', color: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    sethey(values.color);
                }}>
                {(props) => (
                    <View>
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
                                    <option value="" label="Select country" />
                                    <option value="red" label="red" />
                                    <option value="blue" label="blue" />
                                    <option value="green" label="green" />
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
                                    <option value="" label="Select state" />
                                    <option value="red" label="red" />
                                    <option value="blue" label="blue" />
                                    <option value="green" label="green" />
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
                            <View style={{ flexDirection: 'row', marginStart: 20, marginTop: 20 }}>
                                <Checkbox style={{ color: colors.pinkishRed, width: 20, height: 20 }}>Hey</Checkbox>
                                <Text style={[creditStyle.body, { marginTop: 0 }]}>Show my first name</Text>
                                <TouchableOpacity onPress={() => handlechk()}>
                                <Image style={mystyle} source={mysource} /></TouchableOpacity>
                            </View>

                        </View>


                        <Text>{props.touched.rating && props.errors.rating}</Text>
                        <TouchableOpacity CardNo='Submit' onPress={props.handleSubmit} style={{ width: 60, height: 60, backgroundColor: colors.emerald, }}>Hello</TouchableOpacity>
                    </View>
                )}

            </Formik>
            <Text>{hey}</Text>
        </View>
    );
}

export default CreditDesktop;