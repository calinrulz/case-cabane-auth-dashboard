import React, { Component } from 'react';

export default class Dashboard extends Component {
  // constructor() {
  //   // Get Elements
  //   let uploader = document.getElementById('upload');
  //   let fileButton = document.getElementById('fileButton');

  //   // Listen for file selection
  //   fileButton.addEventListener('change', (e) => {
  //     // Get File


  //     // Create a Storage ref


  //     // Upload File


  //     // Update Progress Bar


  //     super();
  //   });
  // }

  render () {
    return (
      <div className="container">
        <div className="row">
          <h3>Dashboard. This is a protected route. You can only see this if you're authed.</h3>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3 upload-container">
            <div className="progress">
              <div id="uploader" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                <span className="sr-only">0% Complete</span>
              </div>
            </div>

            <input type="file" defaultValue="upload" id="fileButton" />
          </div>
        </div>
      </div>
    )
  }
}