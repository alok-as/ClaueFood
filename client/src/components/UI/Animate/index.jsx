import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

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

export default Animate;
