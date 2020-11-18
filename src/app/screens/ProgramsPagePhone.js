import React, { useState, Component } from 'react';
import { Image, ImageBackground, Text, Linking, programsStyleheet, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { Link } from 'react-router-dom';
import Modal from "modal-enhanced-react-native-web";
import { programsStyle } from '../globalStyles/phonePrograms';
import { Sticky, StickyContainer } from 'react-sticky';
import { Dimensions } from 'react-native';
import solidarityLogo from '../assets/images/solidarityLogo/solidarityLogo3x.jpg';
import group from '../assets/images/photos/group@3x.jpg';
import group2 from '../assets/images/photos/group2@3x.jpg';

function ProgramsPagePhone() {

    const [email, setEmail] = useState('MyMail');

    return (
        <View>

            <StickyContainer>

                <View style={programsStyle.topBar}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Image style={programsStyle.logo} source={solidarityLogo} />
                    </Link>
                    <View style={programsStyle.containerTopBar}>
                        <Link to="/donate" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={programsStyle.topDonateBtn}>DONATE NOW</TouchableOpacity>
                        </Link>
                    </View>
                </View>

                <View>
                    <Text style={programsStyle.title}>OUR PROGRAMS</Text>
                    <Text style={programsStyle.body}>Solidarity works towards across 2 programs to achieve its goals of:</Text>
                    <Text style={programsStyle.bulletText}>• Supporting underprivileged families meet their daily needs.</Text>
                    <Text style={programsStyle.bulletText}>• Reconstructing hundreds of homes damaged by the Beirut blast. </Text>
                    <Text style={programsStyle.bulletText}>• Assisting key healthcare professionals and institutions that are fighting the Covid–19 pandemic.</Text>
                </View>

                <View>
                    <Text style={programsStyle.subtitle}>PEOPLE BELOW THE POVERTY LINE PROGRAM</Text>
                    <Text style={programsStyle.body}>Our poverty program is a hunger-relief initiative that addresses the human right to food, aiming at eradicating hunger throughout Lebanon.
                    <br /><br />Funded by your donations, we provide families in need, specifically suffering from food poverty, with assistance in the form of food boxes containing salt and sugar, rice, beans, hummus, burghul, lentils, spaghetti, vermicelli, tomato paste, cheese (in tins and powdered), jams, sardine, chocolate spread, sunflower oil, flour, and tea.
                    <br /><br />Each food box (costing USD 30 or LBP 80,000) helps to support our goal of relieving 20,000 undernourished families living below the poverty line.</Text>
                </View>

                <Image style={programsStyle.picture} source={group2} />



                <View>
                    <Text style={programsStyle.body}>Above: Food relief is delivered by Solidarity volunteers. </Text>
                    <Text style={programsStyle.subtitle}>PEOPLE BELOW THE POVERTY LINE PROGRAM</Text>
                    <Text style={programsStyle.body}>Our poverty program is a hunger-relief initiative that addresses the human right to food, aiming at eradicating hunger throughout Lebanon.
                    <br /><br />Funded by your donations, we provide families in need, specifically suffering from food poverty, with assistance in the form of food boxes containing salt and sugar, rice, beans, hummus, burghul, lentils, spaghetti, vermicelli, tomato paste, cheese (in tins and powdered), jams, sardine, chocolate spread, sunflower oil, flour, and tea.
                    <br /><br />Each food box (costing USD 30 or LBP 80,000) helps to support our goal of relieving 20,000 undernourished families living below the poverty line.</Text>
                </View>

                <Image style={programsStyle.picture} source={group} />
                <View>
                    <Text style={programsStyle.body}>Above: Solidarity engineers assess damage from the explosion. </Text>
                    <Text style={programsStyle.subtitle}>LEBANON NEEDS YOUR HELP</Text>
                    <Link to="/donate" style={{ textDecoration: 'none' }}>
                        <TouchableOpacity style={programsStyle.donateBtn}>DONATE NOW</TouchableOpacity>
                    </Link>

                </View>

                <View style={programsStyle.containerFooter}>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <Link to="/getInTouch" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={[programsStyle.footerBtn, { marginStart: 20, width: 98 }]}>GET IN TOUCH</TouchableOpacity>
                        </Link>
                        <Link to="/terms&Conditions" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={programsStyle.footerBtn}>TERMS & CONDITIONS</TouchableOpacity>
                        </Link>
                    </View>
                    <Link to="/privacyPolicy" style={{ textDecoration: 'none' }}>
                        <TouchableOpacity style={programsStyle.footerBtn}>PRIVACY POLICY</TouchableOpacity>
                    </Link>
                    <View
                        style={programsStyle.containerNewsletter}>
                        <TouchableOpacity style={programsStyle.newsletterBtn}>SUBSCRIBE TO OUR NEWSLETTER</TouchableOpacity>
                        <TextInput
                            style={programsStyle.emailInput}
                            onChangeText={(email) => setEmail(email)}
                            placeholder='YOUR EMAIL'
                        />
                    </View>
                </View>


                <Sticky disableCompensation>{({ style, }) => (
                    <header style={style}>
                        <View style={programsStyle.topBar}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Image style={programsStyle.logo} source={solidarityLogo} />
                            </Link>
                            <View style={programsStyle.containerTopBar}>
                                <Link to="/donate" style={{ textDecoration: 'none' }}>
                                    <TouchableOpacity style={programsStyle.topDonateBtn}>DONATE NOW</TouchableOpacity>
                                </Link>
                            </View>
                        </View>
                    </header>)}
                </Sticky>

            </StickyContainer>

        </View>
    );

}

export default ProgramsPagePhone;