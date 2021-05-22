import React, { Component } from "react";

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return <div>{this.props.errorMessage}</div>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
