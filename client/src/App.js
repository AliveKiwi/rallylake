import React from "react";
import axios from "axios";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import GuestHeader from "./components/Guest/Header/GuestHeader";
import AdminHeader from "./components/Admin/Header/AdminHeader";
import Footer from "./components/Footer";
import About from "./components/Guest/pages/About/About";
import Events from "./components/Guest/pages/Event/Events";
import Volunteer from "./components/Guest/pages/Join/Volunteer";
import Corporates from "./components/Guest/pages/Join/Corporates";
import Contact from "./components/Guest/pages/Contact/Contact";
import Home from "./components/Guest/pages/Home/Home";
import Login from "./components/Admin/Login";
import Lakes from "./components/Guest/pages/Lakes/Lakes";
import LakeForm from "./components/Admin/LakeForm";
import EventForm from "./components/Admin/EventForm";
import ViewComplaints from "./components/Admin/ViewComplaints";
import ViewContact from "./components/Admin/ViewContact";
import ViewCorporates from "./components/Admin/ViewCorporates";
import ViewLakes from "./components/Admin/ViewLakes";
import ViewVolunteers from "./components/Admin/ViewVolunteers";
import ViewZones from "./components/Admin/ViewZones";
import ViewEvents from "./components/Admin/ViewEvents";
import ZoneForm from "./components/Admin/ZoneForm";

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
    if (localStorage.getItem("token")) {
      this.setState({
        isAuthenticated: true,
        role: localStorage.getItem("role")
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
          {this.state.isAuthenticated && this.state.role === "admin" ? (
            <AdminHeader />
          ) : (
            <GuestHeader />
          )}
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/contact" component={Contact} />
            <Route exact={true} path="/volunteer" component={Volunteer} />
            <Route exact={true} path="/corporates" component={Corporates} />
            <Route exact={true} path="/events" component={Events} />
            <Route exact={true} path="/lakes" component={Lakes} />
            <Route exact={true} path="/lakeForm" component={LakeForm} />
            <Route exact={true} path="/eventForm" component={EventForm} />
            <Route
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
            <Route
              exact={true}
              path="/viewVolunteers"
              component={ViewVolunteers}
            />
            <Route exact={true} path="/viewZones" component={ViewZones} />
            <Route exact={true} path="/zoneForm" component={ZoneForm} />
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
                  .delete("/api/users/logoutALL", {
                    headers: {
                      "x-auth": localStorage.getItem("token")
                    }
                  })
                  .then(response => {
                    props.history.push("/");

                    this.setState(() => ({
                      isAuthenticated: false
                    }));

                    localStorage.clear();
                  });
              }}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
