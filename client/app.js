import React from 'react';
import { render } from 'react-dom';
import css from './css/common.styl';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/ItemList';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { baseUrl} from './components/commonComponents/common';
import * as firebase from 'firebase';
var injectTapEventPlugin = require("react-tap-event-plugin");
import Login from './components/groww/login/index';
import Home from './components/groww/Home';
import AboutUs from './components/groww/Home/aboutus';
import Profile from './components/groww/Home/profile';
import ContactUs from './components/groww/Home/ contactUs';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAJTGYujHwuXt29bAikG8IPJlBEmSPcdhw",
    authDomain: "mock-project-99058.firebaseapp.com",
    databaseURL: "https://mock-project-99058.firebaseio.com",
    projectId: "mock-project-99058",
    storageBucket: "mock-project-99058.appspot.com",
    messagingSenderId: "1081845841143"
};
firebase.initializeApp(config);
const store = configureStore();
injectTapEventPlugin();

render(
    <Provider store={ store }>
      <Router history={hashHistory}>
        <Route path="/" component={ App }>
          {/* <IndexRoute component={ LoginComponent } />
          <Route path="/view/:id" component={ TraderMainComponent }/> */}
          <IndexRoute component={Login}/>
          <Route path="aboutus" component={Home}/>
          <Route path="aboutus/team" component={AboutUs}/>
          <Route path="aboutus/profile" component={Profile}/>
          <Route path="aboutus/contactus" component={ContactUs}/>
          
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);
