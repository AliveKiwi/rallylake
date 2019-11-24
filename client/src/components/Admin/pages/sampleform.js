import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

export class Form extends Component {
  state = {
    title: '',
    message: '',
    file: '',
    filePath: ''
  };

  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //When the user starts filling the form, e.target.value will be empty. So seperate handler should be written for file handling.
  fileHanlde = e => {
    e.preventDefault();

    this.setState({
      file: e.target.files[0]
    });

    //This is for preview of file uploaded
    this.setState({
      filePath: URL.createObjectURL(e.target.files[0])
    });
  };

  onSubmitClick = e => {
    const formData = new FormData();

    formData.append('title', this.state.title);
    formData.append('message', this.state.message);

    //HTML 'name' attribute should match with first argument of append
    formData.append('image', this.state.file);
    e.preventDefault();

    console.log(this.state);

    //"Content-Type": "multipart/form-data" is compulsory. Multer has to be used for viewing the FormData.
    axios
      .post('http://localhost:5000/notify', formData, {
        headers: {
          'Access-Control-Allow-Origin': true,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        console.log('res', res);
      });
  };

  render() {
    return (
      <div className="mt-5 col-12">
        <form onSubmit={this.onSubmitClick} className="form mx-5 col-6">
          <div className="form-group pb-4">
            <h3>
              <label htmlFor="title">Notification Title</label>
            </h3>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <h3>
              <label htmlFor="message">Message</label>
            </h3>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              onChange={this.onChange}
            ></textarea>
          </div>

          <div className="mt-5">
            {/* <input
              className="form-control-file"
              type="file"
              name="image"
              onChange={this.fileHanlde}
            />
            {this.state.filePath ? (
              <img
                alt="Notify"
                src={this.state.filePath}
                className="img-thumbnail mt-3"
              />
            ) : null} */}
            <a href="https://imgbb.com">
              <h3>Upload Image</h3>
            </a>
          </div>

          <div>
            <input type="text" name="imageUrl" placeholder="Paste URL here" />
          </div>

          <div>
            <button type="submit" className="btn btn-outline-secondary mt-4">
              Announce
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
