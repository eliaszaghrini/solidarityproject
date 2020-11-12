import React, { useState, Component } from 'react';
import { Image, ImageBackground, Text, Button, programsStyleheet, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import colors from '../config/colors';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Modal from "modal-enhanced-react-native-web";
import { programsStyle } from '../globalStyles/desktop';
import { Sticky, StickyContainer } from 'react-sticky';
import { Dimensions } from 'react-native';
import FrontPageDesktop from './FrontPageDesktop';
import ProgramsPage from './ProgramsPage';
import ReactDOM from 'react-dom';
import FrontPagePhone from './FrontPagePhone';


function DonatePageDesktop() {

    const [email, setEmail] = useState('MyMail');

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
                </div>
            </StickyContainer>

        </View>
    );

}
export default DonatePageDesktop;