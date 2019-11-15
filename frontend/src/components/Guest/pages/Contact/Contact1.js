import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Contact = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <h1 align="center">Contact Us</h1>
            <br />
            <p>
              Get in touch and we'll get back to you as soon as we can. We look
              forward to hearing from you!
            </p>
            <h4>Write to us</h4>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
              Subject
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
              <input className="btn btn-primary" type="submit" value="Send" />
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      <div align="center">
        <br />
        <h4>You could contact us directly via email or phone :</h4>
        <br />
        <h6>Email : contact@rallyforlakes.com</h6>
        <h6>Phone : +919773736958</h6>
      </div>
    </MDBContainer>
  );
};

export default Contact;
