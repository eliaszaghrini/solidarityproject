import React, { useState, Component, useEffect, useCallback } from 'react';
import { Image, ImageBackground, Text, Linking, Button, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { Link } from 'react-router-dom';
import Modal from "modal-enhanced-react-native-web";
import { frontStyle } from '../globalStyles/desktopFront';
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

const money=[125,23,600,2,20,12,25,75,130,200,10,1000];
    const names = ['Toufic M', 'John M', 'Charbel S','Francois R','Mike A','Ahmed Y','Benjamin J','Dimitri Y','Mariane D','Jean A','Craig F','Michael J'];
    const region=['Boston','New York','Beirut','Lyon','Boston','Cairo','San Francisco','Montreal','Paris','Nantes','Big Sur','Dallas'];
    const minutes=['29','40','52','12','67','2','56','9','36','45','66','80'];
    const message=['Praying for all those affected.','For Beirut','Giving some hope',"De beaux jours vous attendent.",'','Li Beirut','For the people of Lebanon','','Nous sommes a vos cotes','','Sending some Love!']
        
function FrontPageDesktop() {
    const [myString, setMyString] = useState("hello");
    const [modalOpen, setModalOpen] = useState(false);
    const [btn1Donate, setBtn1Donate] = useState(false);
    const [btn2Donate, setBtn2Donate] = useState(false);
    const [btn3Donate, setBtn3Donate] = useState(false);
    const [email, setEmail] = useState('MyMail');
    const [otherAmmount, setOtherAmmount] = useState('');
    const [btn1Style, setBtn1Style] = useState(frontStyle.donateBtnUnselected);
    const [btn2Style, setBtn2Style] = useState(frontStyle.donateBtnUnselected);
    const [btn3Style, setBtn3Style] = useState(frontStyle.donateBtnUnselected);
    const btn1PressHandler = () => {
        if (btn1Donate === false) {
            setBtn1Style(frontStyle.donateBtnSelected);
            setBtn2Style(frontStyle.donateBtnUnselected);
            setBtn3Style(frontStyle.donateBtnUnselected);
            setBtn1Donate(true);
            setBtn2Donate(false);
            setBtn3Donate(false);
            setOtherAmmount(25);
        }
        else {
            setBtn1Style(frontStyle.donateBtnUnselected);
            setBtn1Donate(false);
            setOtherAmmount('');
        }
    }
    const btn2PressHandler = () => {
        if (btn2Donate === false) {
            setBtn2Style(frontStyle.donateBtnSelected);
            setBtn1Style(frontStyle.donateBtnUnselected);
            setBtn3Style(frontStyle.donateBtnUnselected);
            setBtn2Donate(true);
            setBtn1Donate(false);
            setBtn3Donate(false);
            setOtherAmmount(75);
        }
        else {
            setBtn2Style(frontStyle.donateBtnUnselected);
            setBtn2Donate(false);
            setOtherAmmount('');
        }
    }
    const btn3PressHandler = () => {
        if (btn3Donate === false) {
            setBtn3Style(frontStyle.donateBtnSelected);
            setBtn2Style(frontStyle.donateBtnUnselected);
            setBtn1Style(frontStyle.donateBtnUnselected);
            setBtn3Donate(true);
            setBtn2Donate(false);
            setBtn1Donate(false);
            setOtherAmmount(125);
        }
        else {
            setBtn3Style(frontStyle.donateBtnUnselected);
            setBtn3Donate(false);
            setOtherAmmount('');
        }
    }


    const [newMoney, setNewMoney] = useState("3000");
    const [newName, setnewName] = useState("Carmen S");
    const [newRegion, setNewRegion] = useState("UAE");
    const [newMinutes, setNewMinutes] = useState("17");
    const [newMessage, setNewMessage] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
        setNewMessage(message[index]);
        setNewMoney(money[index]);
        setNewRegion(region[index]);
        setNewMinutes(minutes[index]);
    }, []);

    useEffect(() => {
        if (increment === 0) {
            setTimeout(() => { setModalOpen(true) }, 10000);
            setIncrement(1);
        }
        const intervalID = setInterval(shuffle, 7000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    const [increment, setIncrement] = useState(0)

    return (
        <View>

            <Modal
                isVisible={modalOpen}
                onBackdropPress={() => setModalOpen(false)}>
                <View style={frontStyle.containerModal}>
                    <Text style={frontStyle.modalTitle}>HELP LEBANON, SHARE THE APPEAL</Text>
                    <Text style={frontStyle.modalBody}>Sharing with friends and family could help Solidarity raise the money it needs to help those in need in Lebanon.</Text>
                    <View style={frontStyle.modalIconContainer}>
                        <TouchableOpacity style={frontStyle.socialMediaBtn}>
                            <TwitterShareButton
                                title={"Help Lebanon, share the appeal"}
                                url={'https://twitter.com/solidaritylb?lang=en'}
                                hashtags={["SolidarityLebanon", "Beirut"]}>
                                <Image source={twitterLogo2} style={frontStyle.socialMediaIcon} />
                            </TwitterShareButton>
                        </TouchableOpacity>
                        <TouchableOpacity style={frontStyle.socialMediaBtn}>
                            <FacebookShareButton
                                url={'https://www.facebook.com/solidaritylebanon/'}
                                hashtag={"#SolidarityLebanon"}>
                                <Image source={facebookLogo2} style={frontStyle.socialMediaIcon} />
                            </FacebookShareButton>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/solidaritylebanon/') }} style={frontStyle.socialMediaBtn}>
                            <Image source={instagramLogo2} style={frontStyle.socialMediaIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <StickyContainer >
                <View style={frontStyle.topBar} >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Image style={frontStyle.logo} source={solidarityLogo} />
                    </Link>
                    <View style={frontStyle.containerTopBar}>
                        <Link to="/donate" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={frontStyle.topDonateBtn}>DONATE NOW</TouchableOpacity>
                        </Link>
                        <TouchableOpacity style={frontStyle.topOptionsBtn}>
                            <MyLink to="whatWeAreDoing" smooth={true} style={{ textDecoration: 'none', color: colors.midnight }}>WHAT WE’RE DOING</MyLink>
                        </TouchableOpacity>
                        <TouchableOpacity style={[frontStyle.topOptionsBtn, { marginEnd: 80, width: 122 }]}>
                            <MyLink to="whoWeAre" smooth={true} style={{ textDecoration: 'none', color: colors.midnight }}>WHO WE ARE</MyLink>
                        </TouchableOpacity>
                    </View>
                </View>

                <ImageBackground
                    style={frontStyle.coverBackground}
                    source={backgroundImage}>
                    <View style={frontStyle.windowDonate}>
                        <Text style={frontStyle.titleWindowDonate}>HELP REBUILD BEIRUT & FEED FAMILIES </Text>
                        <View style={frontStyle.buttonContainerWindowDonate}>
                            <TouchableOpacity
                                onPress={() => btn1PressHandler()}
                                style={btn1Style}>
                                $25
                                </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => btn2PressHandler()}
                                style={btn2Style}>
                                $75
                                </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => btn3PressHandler()}
                                style={btn3Style}>
                                $125
                            </TouchableOpacity>
                        </View>
                        <Text style={frontStyle.descriptionWindowDonate}>Could provide a week of food boxes for one family.</Text>
                        <TextInput
                            style={frontStyle.ammountWindowDonate}
                            onChangeText={(otherAmmount) => setOtherAmmount(otherAmmount)}
                            placeholder='$ - OTHER AMOUNT'
                            value={otherAmmount} />
                        <TouchableOpacity style={frontStyle.donateBtnWindowDonate}>
                            <Link to={{
                                pathname: "/donate",
                                state: { ammount: otherAmmount }
                            }}
                                style={{ textDecoration: 'none' }}>
                                <Text style={{ fontFamily: 'futura-condensed-bold', fontSize: 40, color: "white", alignSelf: 'center', marginStart: 20 }}>
                                    DONATE NOW
                                </Text>
                            </Link>
                        </TouchableOpacity>
                        <Text style={frontStyle.latestDonationWindowDonate}>
                        <Text style={{ color: colors.emerald }}>${newMoney}</Text>・{newName}・{newRegion}・{newMinutes} mins ago <br />
                        <Text style={{ fontFamily: 'futura' }}>{newMessage}</Text>
                        </Text>
                    </View>
                    <View style={frontStyle.backgroundGraphicCover}>
                        <Text style={frontStyle.textGraphicCover}>CRISIS APPEAL</Text>
                    </View>
                </ImageBackground>

                <View style={frontStyle.containerSection2} >
                    <Text style={frontStyle.subtitle}>LEBANON NEEDS YOUR HELP</Text>
                    <Text style={frontStyle.body}>The terrible explosion of 4th August 2020 hit Lebanon when it was already on its knees. Since the 2019 financial crisis, 300,000 jobs have been lost and more than 1.2m families are in urgent need for food. The Covid–19 pandemic has only intensified the state of emergency, adding a serious health crisis to the country’s troubles.
                        <br /><br /><b style={{ fontFamily: 'futura-condensed-bold' }}>Solidarity</b> is on the ground ensuring families get the food they need to survive and coordinating the reconstruction of their homes. We are also providing assistance to health authorities in the fight against Covid–19.
                        <br /><br />This multi-layered human crisis calls for the solidarity of the entire Lebanese diaspora. Please donate today to support our work.
                        <br /><br /><b style={{ fontFamily: 'futura-condensed-bold' }}>Watch a video of the situation in Lebanon below.</b></Text>
                    <View style={frontStyle.youtubeVideo}>
                        <YoutubeVideo link={"https://youtu.be/08YHVMGcWNk"} />
                    </View>
                </View>

                <View>
                    <div style={{ marginTop: -128 }} id={'whatWeAreDoing'} name="whatWeAreDoing" ></div>
                </View>

                <View style={frontStyle.containerSection3}>
                    <Text style={[frontStyle.subtitle, { color: "white" }]}>WHAT WE’RE DOING</Text>
                    <Text style={[frontStyle.body, { width: "75%", color: "white" }]}>
                        Since our foundation six months ago, Solidarity has raised <b style={{ fontFamily: 'futura-condensed-bold' }}>$1.5m</b> to help more than <b style={{ fontFamily: 'futura-condensed-bold' }}>10,000 Lebanese families</b> in need. But we want to go further than this. Over the next year we hope to raise $7.2m to help an additional <b style={{ fontFamily: 'futura-condensed-bold' }}>20,000 families</b>. This money will support the following 3 key activities:
                            <br /><br /><Text style={{ color: "white", fontFamily: 'futura-condensed-bold', fontSize: 25 }}>• Supporting underprivileged families meet their daily needs.</Text>
                        <br /><br /><Text style={{ color: "white", fontFamily: 'futura-condensed-bold', fontSize: 25 }}>• Reconstructing hundreds of homes damaged by the Beirut blast. </Text>
                        <br /><br /><Text style={{ color: "white", fontFamily: 'futura-condensed-bold', fontSize: 25 }}>• Assisting key healthcare professionals and institutions that are fighting the Covid–19 pandemic.</Text>
                    </Text>
                    <TouchableOpacity style={[frontStyle.learnMoreBtn, { alignItems: "center", justifyContent: "center" }]}>
                        <Link to="/programs" style={{ textDecoration: 'none', }}>
                            <Text style={{ fontFamily: 'futura-condensed-bold', fontSize: 25, color: colors.emerald, alignSelf: 'center', marginStart: 20 }}>LEARN MORE</Text>
                        </Link>
                        <Image source={backArrow} style={{ width: 11, height: 18, resizeMode: 'contain', alignSelf: 'center', marginStart: 20 }} />
                    </TouchableOpacity>
                </View>

                <View>
                    <div style={{ marginTop: -128 }} id={'whoWeAre'} name="me" />
                </View>

                <View style={frontStyle.containerSection4} >
                    <Text style={frontStyle.subtitle}>WHO WE ARE</Text>
                    <Text style={frontStyle.body}>Founded in March 2020, Solidarity has established a more transparent donation ecosystem to provide relief, reconstruction and social justice programs to Lebanon. Solidarity was founded by Lebanese philanthropists as well as <b style={{ fontFamily: 'futura-condensed-bold' }}>The Maronite Foundation in the World</b>, the <b style={{ fontFamily: 'futura-condensed-bold' }}>Lebanese Maronite Order</b> and the <b style={{ fontFamily: 'futura-condensed-bold' }}>Gilbert and Rose-Marie Chaghoury Foundation</b>.</Text>
                    <View style={frontStyle.containerAssociations}>
                        <View style={frontStyle.containerLogo}>
                            <Image source={maroniteLogo} style={frontStyle.associationLogo} />
                            <Text style={frontStyle.textLogo}>The Maronite Foundation in the World</Text>
                        </View>
                        <View style={frontStyle.containerLogo}>
                            <Image source={maroniteOrderLogo} style={frontStyle.associationLogo} />
                            <Text style={frontStyle.textLogo}>Lebanese Maronite Order</Text>
                        </View>
                        <View style={frontStyle.containerLogo}>
                            <Image source={gilbertLogo} style={frontStyle.associationLogo} />
                            <Text style={frontStyle.textLogo}>Gilbert and Rose-Marie Chaghoury Foundation</Text>
                        </View>
                    </View>
                </View>

                <View style={frontStyle.containerSection5}>
                    <Text style={[frontStyle.subtitle, { color: "white" }]}>SHARE THE APPEAL</Text>
                    <Text style={[frontStyle.body, { width: "60%", color: "white" }]}>Sharing with friends and family could help Solidarity raise the money it needs to help those in need in Lebanon.</Text>
                    <View style={frontStyle.containerSocialMedia}>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://twitter.com/solidaritylb?lang=en') }} style={frontStyle.socialMediaBtn}>
                            <Image source={twitterLogo} style={frontStyle.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/solidaritylebanon/') }} style={frontStyle.socialMediaBtn}>
                            <Image source={facebookLogo} style={frontStyle.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/solidaritylebanon/') }} style={frontStyle.socialMediaBtn}>
                            <Image source={instagramLogo} style={frontStyle.socialMediaIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Linking.openURL('mailto:INFO@SOLIDARITY.ORG.LB') }} style={frontStyle.socialMediaBtn}>
                            <Image source={mailLogo} style={frontStyle.socialMediaIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={frontStyle.containerSection6}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Link to="/getInTouch" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={[frontStyle.footerBtn, { marginStart: 80, width: 132, }]}>GET IN TOUCH</TouchableOpacity>
                        </Link>
                        <Link to="/terms&Conditions" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={frontStyle.footerBtn}>TERMS & CONDITIONS</TouchableOpacity>
                        </Link>
                        <Link to="/privacyPolicy" style={{ textDecoration: 'none' }}>
                            <TouchableOpacity style={frontStyle.footerBtn}>PRIVACY POLICY</TouchableOpacity>
                        </Link>
                    </View>
                    <View
                        style={frontStyle.containerNewsletter}>
                        <TouchableOpacity style={frontStyle.newsletterBtn}>SUBSCRIBE TO OUR NEWSLETTER</TouchableOpacity>
                        <TextInput
                            style={frontStyle.emailInput}
                            onChangeText={(email) => setEmail(email)}
                            placeholder='YOUR EMAIL'
                        />
                    </View>
                </View>

                <Sticky disableCompensation>{({ style, }) => (
                    <header style={style}>
                        <View style={frontStyle.topBar}>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <Image style={frontStyle.logo} source={solidarityLogo} />
                            </Link>
                            <View style={frontStyle.containerTopBar}>
                                <Link to="donate" smooth={true} style={{ textDecoration: 'none' }}>
                                    <TouchableOpacity style={frontStyle.topDonateBtn}>DONATE NOW</TouchableOpacity>
                                </Link>
                                <TouchableOpacity style={frontStyle.topOptionsBtn}>
                                    <MyLink to="whatWeAreDoing" smooth={true} style={{ textDecoration: 'none', color: colors.midnight }}>WHAT WE’RE DOING</MyLink>
                                </TouchableOpacity>
                                <TouchableOpacity style={[frontStyle.topOptionsBtn, { marginEnd: 80, width: 122 }]}>
                                    <MyLink to="whoWeAre" smooth={true} style={{ textDecoration: 'none', color: colors.midnight }}>WHO WE ARE</MyLink>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </header>)}
                </Sticky>

            </StickyContainer>

        </View>
    );

}

export default FrontPageDesktop;