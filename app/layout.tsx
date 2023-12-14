"use client"
import { ChakraProvider } from '@chakra-ui/react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import SmallWithSocial from '@/components/Footer';
import WithSubnavigation from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const initialOptions = {
		clientId: 'test',
		currency: 'USD',
		intent: 'capture',
	};
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
