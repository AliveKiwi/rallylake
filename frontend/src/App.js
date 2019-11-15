import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GuestHeader from './components/Guest/Header/GuestHeader';
import AdminHeader from './components/Admin/Header/AdminHeader';
import Footer from './components/Footer';
import Home from './components/Guest/pages/Home/Home';
import Lakes from './components/Guest/pages/Lakes/Lakes';
import About from './components/Guest/pages/About/About';
import Volunteer from './components/Guest/pages/Join/Volunteer';
import Corporates from './components/Guest/pages/Join/Corporates';
import Contact from './components/Guest/pages/Contact/Contact';

import Login from './components/Admin/pages/Login/Login';

// import Events from "./components/Guest/pages/Event/Events";
import LakeForm from './components/Admin/pages/LakeForm';

import Zone from './components/Admin/pages/Zones/Zone';
import ViewVolunteer from './components/Admin/pages/Volunteers/ViewVolunteer';
import ViewCorporate from './components/Admin/pages/Corporates/ViewCorporate';
import ViewContact from './components/Admin/pages/Contacts/ViewContact';
import EventForm from './components/Admin/pages/EventForm';
// import ZoneForm from './components/Admin/pages//ZoneForm';
// import ViewComplaints from "./components/Admin/ViewComplaints";
// import ViewCorporates from "./components/Admin/ViewCorporates";
// import ViewLakes from "./components/Admin/ViewLakes";
// import ViewEvents from "./components/Admin/ViewEvents";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      role: null
    };

    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        isAuthenticated: true,
        role: localStorage.getItem('role')
      });
    }
  }

  handleAuthentication = (boolean, string) => {
    this.setState({
      isAuthenticated: boolean,
      role: string
    });
  };
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          {this.state.isAuthenticated && this.state.role === 'admin' ? (
            <AdminHeader />
          ) : (
            <GuestHeader />
          )}
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/lakes" component={Lakes} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/volunteers" component={Volunteer} />
            <Route exact={true} path="/corporates" component={Corporates} />
            <Route exact={true} path="/contact" component={Contact} />

            <Route
              path="/login"
              render={props => {
                return (
                  <Login
                    {...props}
                    handleAuthentication={this.handleAuthentication}
                  />
                );
              }}
            />

            <Route
              path="/logout"
              render={props => {
                axios
                  .delete('/api/users/logoutALL', {
                    headers: {
                      'x-auth': localStorage.getItem('token')
                    }
                  })
                  .then(response => {
                    props.history.push('/');

                    this.setState(() => ({
                      isAuthenticated: false
                    }));

                    localStorage.clear();
                  });
              }}
            />

            <Route exact={true} path="/lakeForm" component={LakeForm} />

            <Route exact={true} path="/viewZones" component={Zone} />

            <Route
              exact={true}
              path="/viewVolunteers"
              component={ViewVolunteer}
            />
            <Route
              exact={true}
              path="/viewCorporates"
              component={ViewCorporate}
            />
            <Route exact={true} path="/viewContacts" component={ViewContact} />
            <Route exact={true} path="/eventForm" component={EventForm} />
            {/* <Route exact={true} path="/zoneForm" component={ZoneForm} /> */}

            {/* 
            <Route exact={true} path="/events" component={Events} />
         */}
            {/*
             */}
            {/* <Route
              exact={true}
              path="/viewComplaints"
              component={ViewComplaints}
            />
            <Route exact={true} path="/viewContact" component={ViewContact} />
            <Route
              exact={true}
              path="/viewCorporates"
              component={ViewCorporates}
            />
            <Route exact={true} path="/viewEvents" component={ViewEvents} />
            <Route exact={true} path="/viewLakes" component={ViewLakes} />
           
            
             */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
