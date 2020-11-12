import React, { useState, useEffect } from 'react';
import { Platform, Dimensions } from 'react-native';
import FrontPageDesktop from './app/screens/FrontPageDesktop';
import DonatePageDesktop from './app/screens/DonatePageDesktop';
import ProgramsPage from './app/screens/ProgramsPage';
import FrontPageTablet from './app/screens/FrontPageTablet';
import NotFound from './app/screens/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import FrontPagePhone from './app/screens/FrontPagePhone';
import futuraCondensedBold from './app/assets/fonts/FuturaLT-CondensedBold.woff';
import futuraLight from './app/assets/fonts/FuturaLT-Light.woff';
import futura from './app/assets/fonts/FuturaLT.woff';

const getFonts = () => Font.loadAsync({
  'futura-condensed-bold': futuraCondensedBold,
  'futura-light': futuraLight,
  'futura': futura,
});

function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);


    useEffect(() => {
      const updateSize = () => {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;

}

function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  const windowWidth = useWindowSize();
  if (fontsLoaded) {
    if (windowWidth < 650) {
      return (
        <Router>
          <div>
            <div>
              <Switch>
                <Route exact path="/" component={FrontPagePhone} exact />
                <Route path="/programs" component={ProgramsPage} />
                <Route component={NotFound} /></Switch>
            </div>
          </div>
        </Router>);
    }
    else if (windowWidth < 1200) {
      return(
      <Router>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={FrontPageTablet} exact />
            <Route path="/programs" component={ProgramsPage} />
            <Route path="/donate" component={ProgramsPage} />
            <Route component={NotFound} /></Switch>
        </div>
      </div>
    </Router>);
    }
    else {

      return (
        <Router>
          <div>
            <div>
              <Switch>
                <Route exact path="/" component={FrontPageDesktop} exact />
                <Route path="/programs" component={ProgramsPage} />
                <Route path="/donate" component={DonatePageDesktop} />
                <Route component={NotFound} /></Switch>
            </div>
          </div>
        </Router>);

    }
  } else {

    return (<AppLoading startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />)

  }
}

export default App;