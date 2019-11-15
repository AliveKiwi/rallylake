import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: ""
    };
  }

  handleSubmitUser = e => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post("/api/users/login", formData).then(response => {
      if (response.data.errors) {
        this.setState(() => ({
          errors: response.data.errors,
          password: ""
        }));
      } else {
        // write this to localStorage
        const tokenData = jwt_decode(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", tokenData.roles);
        // redirect to contacts page
        // console.log(this);
        this.props.history.push("/");
        // change the navigation links = update the state of isAuthenticated in the parent component
        this.props.handleAuthentication(true, tokenData.roles);
      }
    });
  };

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  render() {
    // console.log(this.props)
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 offset-5">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <form onSubmit={this.handleSubmitUser.bind(this)}>
              <div className="row">
                <h2>Login </h2>
              </div>
              {this.state.errors && (
                <p className="alert alert-danger">{this.state.errors}</p>
              )}
              <div className="form-group row">
                <label>
                  Email
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Email"
                  />
                </label>
              </div>

              <div className="form-group row">
                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Password"
                  />
                </label>
              </div>

              <div className="row">
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

// import React from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

// const Login = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <form>
//             <p align="center">Note : For Admin use only!!!!!</p>
//             <h2 align="center">Login</h2>
//             <br />
//             <br />
//             <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
//               Your email
//             </label>
//             <input
//               type="email"
//               id="defaultFormLoginEmailEx"
//               className="form-control"
//             />
//             <br />
//             <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
//               Your password
//             </label>
//             <input
//               type="password"
//               id="defaultFormLoginPasswordEx"
//               className="form-control"
//             />
//             <div className="text-center mt-4">
//               <MDBBtn color="indigo" type="submit">
//                 Login
//               </MDBBtn>
//             </div>
//           </form>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default Login;
