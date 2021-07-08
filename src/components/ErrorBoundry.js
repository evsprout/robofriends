import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! This is not good... an error has been encountered!</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundry;