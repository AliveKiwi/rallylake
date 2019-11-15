import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const EventForm = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h1 text-center mb-4">Events</p>
            <p className="h3 text-center mb-4">Add / Update Events</p>
            <label>Event Name</label>
            <input type="text" id="name" />
            <br />
            <label>Event Date From</label>
            <input type="date" id="fromDate" />
            <br />
            <label>Event Date To</label>
            <input type="date" id="toDate" />
            <br />
            <label>Timings From</label>
            <input type="time" id="fromTime" />
            <br />
            <label>Timings To</label>
            <input type="time" id="toTime" />
            <br />
            <label>Location</label>
            <input type="text" id="location" />
            <br />
            <label>Event Banner</label>
            <br />
            <br />
            <input type="file" id="eventImg" />
            <br />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit" id="addEvent">
                Add Event
              </MDBBtn>
              <MDBBtn color="indigo" type="submit" id="updateEvent">
                Update Event
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default EventForm;
