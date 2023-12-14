import { Container } from '@chakra-ui/react';
import { PayPalButtons } from '@paypal/react-paypal-js';

type PaymentType = {
	amount: string;
};

export default function Payment({ amount }: PaymentType) {
	return (
		<Container maxW={'5xl'} py={12}>
			ooo
			<PayPalButtons
				style={{
					layout: 'horizontal',
					color: 'blue',
					shape: 'pill',
					label: 'pay',
					height: 54,
				}}
				createOrder={async (data: any, actions: any) => {
					console.log('data: ', data);
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									// value: '19.00',
									value: amount,
								},
							},
						],
					});
				}}
				onApprove={async (data: any, actions: any) => {
					return actions.order.capture().then(function (orderData: any) {
						// Successful capture! For demo purposes:
						console.log(
							'Capture result',
							orderData,
							JSON.stringify(orderData, null, 2)
						);
						let transaction = orderData.purchase_units[0].payments.captures[0];
						alert(
							'Transaction ' +
								transaction.status +
								': ' +
								transaction.id +
								'\n\nSee console for all available details'
						);
					});
				}}
			/>
		</Container>
	);
}
