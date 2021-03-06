export const calculateCartItemsCount = (items) => {
	const count = items.reduce((acc, item) => acc + item.quantity, 0);
	return count;
};

export const calculateTotalCartPrice = (items, toFixed = 2) => {
	const totalPrice = items.reduce((acc, item) => {
		if (item?.product?.discountedPrice) {
			return acc + item.quantity * item.product.discountedPrice;
		} else {
			return acc + item.quantity * item.product.price;
		}
	}, 0);

	return totalPrice;
};

export const setValueInSessionStorage = (key, value) => {
	const valueType = typeof value;

	if (valueType === "string") {
		sessionStorage.setItem(key, value);
	} else {
		sessionStorage.setItem(key, JSON.stringify(value));
	}
};

export const removeValueFromsessionStorage = (key) => {
	sessionStorage.removeItem(key);
};

export const extractValueFromSessionStorage = (key) => {
	return JSON.parse(sessionStorage.getItem(key));
};

export const extractAllValuesFromsessionStorage = () => {
	const keys = Object.keys(sessionStorage);
	const length = keys.length;

	const cache = keys.reduce((obj, key) => {
		obj[key] = extractValueFromSessionStorage(key);
		return obj;
	}, {});

	return [cache, length];
};

export const resetAllValuesInsessionStorage = () => {
	Object.keys(sessionStorage).forEach((key) =>
		removeValueFromsessionStorage(key)
	);
};

export const setupBrowserBackFunctionality = () => {
	window.history.pushState(
		{ page: "browserBack" },
		"on browser back click",
		window.location.href
	);
	window.history.pushState(
		{ page: "browserBack" },
		"on browser back click",
		window.location.href
	);

	console.log("Checking State Value", window.history.state);
};

export const onBrowserBackClick = (fn) => {
	window.addEventListener(
		"popstate",
		(event) => {
			if (event.state) {
				fn();
			}
		},
		false
	);
};

export const deepClone = (obj) => {
	if (obj === null || typeof obj !== "object") {
		return obj;
	}

	const clone = {};
	for (let key in obj) {
		clone[key] = deepClone(obj);
	}

	return clone;
};

export const combineClasses = (classes) => {
	return classes.join(" ");
};

export const generateQueryStringForCategory = (category) => {
	switch (category) {
		default:
			break;
	}
};

export const generateQueryString = (params = {}) => {
	let queryString = "";
	const queryParams = [];

	for (let key in params) {
		if (params.hasOwnProperty(key)) {
			queryParams.push(
				`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
			);
		}
	}

	if (queryParams.length) {
		queryString = `?${queryParams.join("&")}`;
	}

	return queryString;
};

export const parseQueryParams = (searchString) => {
	const queryParams = {};
	const searchParams = new URLSearchParams(searchString);

	for (let [key, value] of searchParams.entries()) {
		queryParams[key] = value;
	}

	return queryParams;
};

export const injectAndLoadScript = (src) => {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = src;

		script.onload = () => {
			resolve(true);
		};

		script.onerror = () => {
			reject(false);
		};

		document.body.appendChild(script);
	});
};
