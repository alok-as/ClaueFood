import { Component } from "React";

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <div>{this.props.errorMessage}</div>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
