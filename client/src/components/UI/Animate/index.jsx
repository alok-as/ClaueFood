import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Animate = ({
	isVisible,
	timeout,
	enter,
	enterActive,
	exit,
	exitActive,
	mountOnEnter,
	unmountOnExit,
	children,
}) => {
	return (
		<CSSTransition
			in={isVisible}
			timeout={timeout}
			classNames={{
				enter: enter,
				enterActive: enterActive,
				exit: exit,
				exitActive: exitActive,
			}}
			mountOnEnter={mountOnEnter}
			unmountOnExit={unmountOnExit}
		>
			{children}
		</CSSTransition>
	);
};

Animate.defaultProps = {
	isVisible: false,
	timeout: 300,
	mountOnEnter: false,
	unmountOnExit: false,
};

Animate.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	timeout: PropTypes.number,
	mountOnEnter: PropTypes.bool,
	unmountOnExit: PropTypes.bool,
	enter: PropTypes.string,
	enterActive: PropTypes.string,
	exit: PropTypes.string,
	exitActive: PropTypes.string,
};

export default Animate;
