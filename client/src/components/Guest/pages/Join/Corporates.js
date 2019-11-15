import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Corporates = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h1 text-center mb-4">Join Us</p>
            <p className="h3 text-center mb-4">Corporates</p>
            <label>Your name</label>
            <input type="text" id="name" />
            <br />
            <label>Your email</label>
            <input type="email" id="email" />
            <br />
            <label>Contact No.</label>
            <input type="text" id="contact" />
            <br />
            <label>Company Name</label>
            <input type="text" id="companyName" />
            <br />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit" id="registerButton">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Corporates;
