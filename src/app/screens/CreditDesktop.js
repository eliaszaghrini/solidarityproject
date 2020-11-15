import React, { useState, Component } from 'react';
import { Image, Check, Text, Button, View, ScrollView, TouchableOpacity, TextInput, ActionSheetIOS } from 'react-native';
import colors from '../config/colors';
import { Link, Switch, Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
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
import * as yup from 'yup';

const ReviewSchema = yup.object({
    title: yup.string()
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
    return (
        <View>
            <Formik
                initialValues={{ title: '', body: '', rating: '', color: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    sethey(values.color);
                }}>
                {(props) => (
                    <View>
                        <TextInput
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')} />

                        <Text>{props.touched.title && props.errors.title}</Text>

                        <TextInput
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body} />
                        <Text>{props.touched.body && props.errors.body}</Text>
                        <select
                            name="color"
                            value={props.values.color}
                            onChange={props.handleChange('color')}
                            style={{ width: 300, height: 60, borderColor: colors.pinkishRed, borderWidth: 3, fontFamily: 'futura', fontSize: 25, }}
                        >
                            <option value="" label="Select a color" />
                            <option value="red" label="red" />
                            <option value="blue" label="blue" />
                            <option value="green" label="green" />
                        </select>

                        <TextInput
                            placeholder='Review rating'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Text>{props.touched.rating && props.errors.rating}</Text>
                        <TouchableOpacity title='Submit' onPress={props.handleSubmit} style={{ width: 60, height: 60, backgroundColor: colors.emerald, }}>Hello</TouchableOpacity>
                    </View>
                )}

            </Formik>
            <Text>{hey}</Text>
        </View>
    );
}

export default CreditDesktop;