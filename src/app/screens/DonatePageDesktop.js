import React, { useState, Component } from 'react';
import { Image, ImageBackground, Text, Button, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {} from 'react-router-dom';
import { donateStyle } from '../globalStyles/desktop';
import { Sticky, StickyContainer } from 'react-sticky';
import { Dimensions } from 'react-native';
import FrontPageDesktop from './FrontPageDesktop';
import ProgramsPage from './ProgramsPage';
import FrontPagePhone from './FrontPagePhone';
import amex from '../assets/images/payments/amex@3x.png';
import discover from '../assets/images/payments/discover@3x.png';
import mastercard from '../assets/images/payments/mastercard@3x.png';
import visadebit from '../assets/images/payments/visadebit@3x.png';
import lockClosed from '../assets/images/payments/lockClosedSharp@3x.png';
import backgroundImage from '../assets/images/photos/home_page_cover.jpg';
import solidarityLogo from '../assets/images/solidarityLogo/solidarityLogo3x.jpg';


function DonatePageDesktop() {

    const [email, setEmail] = useState('MyMail');

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
                                    <Image style={donateStyle.backgroundImage} source={backgroundImage}/>
                <View style={donateStyle.donationWindow}>
                    <Text>Hello dear</Text>
                </View>
                <View>
                    <Router>
                        <div>
                            <ul>
                                <li><Link to='/donate/myprograms'>programs</Link></li>
                                <li><Link to='/donate/my'>home</Link></li>
                            </ul>
                        </div>

                        <Route path="/donate/myprograms" component={ProgramsPage}></Route>
                        <Route path="/donate/my" component={FrontPageDesktop}></Route>
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