import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ErrorBoundary extends React.Component {
  state = {
    error: false,
  };

  goToHome = () => {
    window.location.href = "/";
  };

  //lifecycle method triggered whenever an error is produced
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>
            Folder or Note ID does not exist- Please go back to the Home page.
          </h2>
          <button onClick={this.goToHome}>
            <FontAwesomeIcon icon="home" /> <br />
            Home
          </button>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
