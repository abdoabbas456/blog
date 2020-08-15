import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";
class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      redirect: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    if (this.state.hasError) {
      console.error("errorboundery catch error ", error, info);
    }
  }
  componentDidUpdate() {
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          there was an error with this listing <Link to="/">gotohome</Link>
          {""}
          or waith 5 secand.
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundaries;
