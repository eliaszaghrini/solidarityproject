import React, { useState, Component } from 'react';
import { Image, ImageBackground, Text, Linking, thankYouStyleheet, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { Link } from 'react-router-dom';
import Modal from "modal-enhanced-react-native-web";
import { thankYouStyle } from '../globalStyles/desktopThankYou';
import { Sticky, StickyContainer } from 'react-sticky';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import YoutubeVideo from './YoutubeVideo';
import backgroundImage from '../assets/images/photos/home_page_cover.jpg';
import twitterLogo from '../assets/images/socialMedia/logoTwitter@3x.png';
import twitterLogo2 from '../assets/images/socialMedia/logoTwitter2@3x.png';
import facebookLogo from '../assets/images/socialMedia/logoFacebook@3x.png';
import facebookLogo2 from '../assets/images/socialMedia/logoFacebook2@3x.png';
import instagramLogo from '../assets/images/socialMedia/insta@3x.png';
import instagramLogo2 from '../assets/images/socialMedia/insta2@3x.png';
import mailLogo from '../assets/images/socialMedia/email@3x.png';
import solidarityLogo from '../assets/images/solidarityLogo/solidarityLogo3x.jpg';
import backArrow from '../assets/images/other/backArrowWhite@3x.png';
import maroniteLogo from '../assets/images/other/ovalCopy@3x.jpg';
import maroniteOrderLogo from '../assets/images/other/ovalCopy3@3x.jpg';
import gilbertLogo from '../assets/images/other/group8@3x.jpg';
import { Link as MyLink } from 'react-scroll';
import * as Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;

function ThankYouPageDesktop() {
    const [email, setEmail] = useState('MyMail');

    return (
        <View>

            <StickyContainer>

                <View style={thankYouStyle.topBar}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Image style={thankYouStyle.logo} source={solidarityLogo} />
                    </Link>
                    <View style={thankYouStyle.containerTopBar}>
                        <TouchableOpacity style={[thankYouStyle.topOptionsBtn, { marginEnd: 80, width: 122 }]}>
                            <Link to="/" style={{ textDecoration: 'none', color: colors.midnight }}>RETURN TO HOME</Link>
                        </TouchableOpacity>
                    </View>
                </View>

                <ImageBackground
                    style={thankYouStyle.coverBackground}
                    source={backgroundImage}>
                    <View style={thankYouStyle.windowDonate}>
                        <Text style={thankYouStyle.titleWindowDonate}>HELP REBUILD BEIRUT & FEED FAMILIES </Text>
                        <Text style={thankYouStyle.descriptionWindowDonate}>Could provide a week of food boxes for one family.</Text>
                        <Text style={thankYouStyle.latestDonationWindowDonate}>
                            <Text style={{ color: colors.emerald }}>$125</Text>・Toufic M・Boston・23 mins ago <br />
                            <Text style={{ fontFamily: 'futura' }}>Praying for all those affected.</Text>
                        </Text>
                    </View>
                </ImageBackground>

                <View style={thankYouStyle.containerShare}>
                    <Text style={[thankYouStyle.subtitle, { color: "white" }]}>SHARE THE APPEAL</Text>
                    <Text style={[thankYouStyle.body, { width: "60%", color: "white" }]}>Sharing with friends and family could help Solidarity raise the money it needs to help those in need in Lebanon.</Text>
                    <View style={thankYouStyle.containerSocialMedia}>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://twitter.com/solidaritylb?lang=en') }} style={thankYouStyle.socialMediaBtn}>
                            <Image source={twitterLogo} style={thankYouStyle.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/solidaritylebanon/') }} style={thankYouStyle.socialMediaBtn}>
                            <Image source={facebookLogo} style={thankYouStyle.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/solidaritylebanon/') }} style={thankYouStyle.socialMediaBtn}>
                            <Image source={instagramLogo} style={thankYouStyle.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('mailto:INFO@SOLIDARITY.ORG.LB') }} style={thankYouStyle.socialMediaBtn}>
                            <Image source={mailLogo} style={thankYouStyle.socialMediaIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={thankYouStyle.containerFooter}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Link to="/getInTouch" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={[thankYouStyle.footerBtn, { marginStart: 80, width: 132, }]}>GET IN TOUCH</TouchableOpacity>
                        </Link>
                        <Link to="/terms&Conditions" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={thankYouStyle.footerBtn}>TERMS & CONDITIONS</TouchableOpacity>
                        </Link>
                        <Link to="/privacyPolicy" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={thankYouStyle.footerBtn}>PRIVACY POLICY</TouchableOpacity>
                        </Link>
                    </View>
                    <View
                        style={thankYouStyle.containerNewsletter}>
                        <TouchableOpacity style={thankYouStyle.newsletterBtn}>SUBSCRIBE TO OUR NEWSLETTER</TouchableOpacity>
                        <TextInput
                            style={thankYouStyle.emailInput}
                            onChangeText={(email) => setEmail(email)}
                            placeholder='YOUR EMAIL'
                        />
                    </View>
                </View>

                <Sticky disableCompensation>{({ style, }) => (
                    <header style={style}>
                        <View style={thankYouStyle.topBar}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Image style={thankYouStyle.logo} source={solidarityLogo} />
                            </Link>
                            <View style={thankYouStyle.containerTopBar}>
                                <TouchableOpacity style={[thankYouStyle.topOptionsBtn, { marginEnd: 80, width: 122 }]}>
                                    <Link to="/" style={{ textDecoration: 'none', color: colors.midnight }}>RETURN TO HOME</Link>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </header>)}
                </Sticky>

            </StickyContainer>

        </View>
    );

}

export default ThankYouPageDesktop;