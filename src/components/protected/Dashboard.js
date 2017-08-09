import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: ''
    };
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = (progress) => this.setState({ progress });
  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  }
  handleUploadSuccess = (filename) => {
    this.setState({ avatar: filename, isUploading: false, progress: 100 });
    // Firebase Storage
    firebase.storage().ref('images').child(filename).getDownloadURL()
      .then((url) => {
        this.addImageReference(url);
        this.setState({ avatarURL: url });
      });
  };

  // Add image path to database
  addImageReference(itemElement) {
    firebase.database().ref().child('imageRef').child('url').push(itemElement, (res) => {
      return this.setState({ data: res });
    });
  }

  render () {
    return (
      <div className="container">
        <div className="row text-center">
          <h3>Dashboard. This is a protected route. You can only see this if you're authed.</h3>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3 upload-container">
            <div className="progress">
              <div className="progress-bar progress-bar-success progress-bar-striped"
                   role="progressbar"
                   aria-valuenow={this.state.progress}
                   aria-valuemin="0"
                   aria-valuemax="100"
                   style={{ width: `${this.state.progress}%` }}
              >
                {/* {this.state.isUploading &&
                  <span>{ this.state.progress }% Complete</span>
                } */}
                <span>{ this.state.progress }% Complete</span>
              </div>
            </div>

            <div className="chose-file-container">
              <FileUploader
                accept="image/*"
                name="avatar"
                randomizeFilename
                storageRef={firebase.storage().ref('images')}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
            </div>
          </div>

          <div className="col-md-6 col-md-offset-3">
            { this.state.avatarURL &&
              <img src={ this.state.avatarURL } alt="" className="uploaded-image" />
            }
          </div>
        </div>
      </div>
    )
  }
}
