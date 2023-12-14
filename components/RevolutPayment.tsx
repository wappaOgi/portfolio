import RevolutCheckout from '@revolut/checkout';

const { revolutPay } = await RevolutCheckout.payments({
	publicToken: '<yourPublicApiKey>', // merchant public API key
});

const paymentOptions = {
	currency: 'USD',
	totalAmount: 1000,
	redirectUrls: {
		success: 'https://www.example.com/success',
		failure: 'https://www.example.com/failure',
		cancel: 'https://www.example.com/cancel',
	},

	createOrder: async () => {
		// Call your backend here to create an order
		// For more information, see: https://developer.revolut.com/docs/merchant/create-order
		const order = await yourServerSideCall();
		return { publicId: order.token };
	},

	// You can put other optional parameters here
};

revolutPay.mount(document.getElementById('revolut-pay'), paymentOptions);
