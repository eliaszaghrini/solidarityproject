import React, { useState, Component } from 'react';
import { Image, ImageBackground, Text, Button, programsStyleheet, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { Link } from 'react-router-dom';
import Modal from "modal-enhanced-react-native-web";
import { programsStyle } from '../globalStyles/desktop';
import { Sticky, StickyContainer } from 'react-sticky';
import { Dimensions } from 'react-native';
import FrontPageDesktop from './FrontPageDesktop';
import FrontPagePhone from './FrontPagePhone';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 1440;
const guidelineBaseHeight = 3005;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;



function DonatePageDesktop() {

    const [email, setEmail] = useState('MyMail');
const [tab,setTab]=useState('A');


const selectedTab = () => {
    switch(tab){
        case 'A':
            return <FrontPageDesktop />
        case 'B':
            return <FrontPagePhone />
        case 'C':
            return <FrontPageDesktop />
        default:
            return /* empty div maybe */
    }
}
    return (
        <View>

            <StickyContainer>

                <View style={programsStyle.topBar}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Image style={programsStyle.logo} source={require('../assets/images/solidarityLogo/solidarityLogo3x.jpg')} />
                    </Link>
                    <View style={programsStyle.containerTopBar}>
                        <Link to="/donate" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={programsStyle.topDonateBtn}>DONATE NOW</TouchableOpacity>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: colors.midnight }}>
                            <TouchableOpacity style={programsStyle.topOptionsBtn}>RETURN TO HOME</TouchableOpacity>
                        </Link>
                    </View>
                </View>
<div>
                <View>
                    <Button onClick={() => setTab('A')} />
                    <Button onClick={() => setTab('B')}  />
                    <Button onClick={() => setTab('C')}  />
                </View>
                {selectedTab()}
            </div>

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

                <Image style={programsStyle.picture} source={require('../assets/images/photos/home_page_cover.jpg')} />

                

                <View>
                    <Text style={programsStyle.body}>Above: Food relief is delivered by Solidarity volunteers. </Text>
                    <Text style={programsStyle.subtitle}>PEOPLE BELOW THE POVERTY LINE PROGRAM</Text>
                    <Text style={programsStyle.body}>Our poverty program is a hunger-relief initiative that addresses the human right to food, aiming at eradicating hunger throughout Lebanon.
                    <br /><br />Funded by your donations, we provide families in need, specifically suffering from food poverty, with assistance in the form of food boxes containing salt and sugar, rice, beans, hummus, burghul, lentils, spaghetti, vermicelli, tomato paste, cheese (in tins and powdered), jams, sardine, chocolate spread, sunflower oil, flour, and tea.
                    <br /><br />Each food box (costing USD 30 or LBP 80,000) helps to support our goal of relieving 20,000 undernourished families living below the poverty line.</Text>
                </View>

                <Image style={programsStyle.picture} source={require('../assets/images/photos/home_page_cover.jpg')} />
                <View>
                    <Text style={programsStyle.body}>Above: Solidarity engineers assess damage from the explosion. </Text>
                    <Text style={programsStyle.subtitle}>LEBANON NEEDS YOUR HELP</Text>
                    <Link to="/donate" style={{ textDecoration: 'none' }}>
                        <TouchableOpacity style={programsStyle.donateBtn}>DONATE NOW</TouchableOpacity>
                    </Link>

                </View>

                <View style={programsStyle.containerFooter}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Link to="/getInTouch" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={[programsStyle.footerBtn, { marginStart: scale(80), width: scale(132), }]}>GET IN TOUCH</TouchableOpacity>
                        </Link>
                        <Link to="/terms&Conditions" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={programsStyle.footerBtn}>TERMS & CONDITIONS</TouchableOpacity>
                        </Link>
                        <Link to="/privacyPolicy" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={programsStyle.footerBtn}>PRIVACY POLICY</TouchableOpacity>
                        </Link>
                    </View>
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
                                <Image style={programsStyle.logo} source={require('../assets/images/solidarityLogo/solidarityLogo3x.jpg')} />
                            </Link>
                            <View style={programsStyle.containerTopBar}>
                                <Link to="/donate" style={{ textDecoration: 'none' }}>
                                    <TouchableOpacity style={programsStyle.topDonateBtn}>DONATE NOW</TouchableOpacity>
                                </Link>
                                <Link to="/" style={{ textDecoration: 'none', color: colors.midnight }}>
                                    <TouchableOpacity style={programsStyle.topOptionsBtn}>RETURN TO HOME</TouchableOpacity>
                                </Link>
                            </View>
                        </View>
                    </header>)}
                </Sticky>

            </StickyContainer>

        </View>
    );

}

export default DonatePageDesktop;