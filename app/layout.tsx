"use client"
import { ChakraProvider } from '@chakra-ui/react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import SmallWithSocial from '@/components/Footer';
import WithSubnavigation from '@/components/Navbar';
import { Inter, Roboto_Mono } from '@next/font/google';
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const initialOptions = {
		clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test',
		// clientId: 'test',
		'enable-funding': 'paylater,venmo,card',
		currency: 'USD',
		intent: 'capture',
	};
	console.log('initialOptions: ', initialOptions);
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />

			<body>
				<PayPalScriptProvider options={initialOptions}>
					<ChakraProvider>
						<div>
							<WithSubnavigation />
							{children}
							<SmallWithSocial />
						</div>
					</ChakraProvider>
					{/* <PayPalButtons style={{ layout: 'horizontal' }} /> */}
				</PayPalScriptProvider>
			</body>
		</html>
	);
}
