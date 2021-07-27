import { injectAndLoadScript } from "./index";

export const initiateRazorPayPayment = async ({
	currency,
	amount,
	orderId,
}) => {
	try {
		await injectAndLoadScript("https://checkout.razorpay.com/v1/checkout.js");

		const options = {
			key: process.env.REACT_APP_RAZOR_PAY_KEY_ID,
			amount: amount,
			currency,
			name: "Acme Corp",
			description: "Test Transaction",
			image: "https://example.com/your_logo",
			order_id: orderId,
			handler: (response) => {
				console.log("Checking Razorpay response", response);
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			prefill: {
				name: "Gaurav Kumar",
				email: "gaurav.kumar@example.com",
				contact: "9999999999",
			},
			notes: {
				address: "Razorpay Corporate Office",
			},
			theme: {
				color: "#3399cc",
			},
		};

		const rzp1 = new window.Razorpay(options);
		rzp1.on("payment.failed", (response) => {
			alert(response.error.code);
			alert(response.error.description);
			alert(response.error.source);
			alert(response.error.step);
			alert(response.error.reason);
			alert(response.error.metadata.order_id);
			alert(response.error.metadata.payment_id);
		});

		rzp1.open();
	} catch (error) {
		console.error("Error loading Razorpay script:", error.message);
	}
};
