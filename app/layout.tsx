"use client"
import './globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { usePathname } from 'next/navigation';

import SmallWithSocial from '@/components/Footer';
import WithSubnavigation from '@/components/Navbar';

function LayoutContent({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isHomePage = pathname === '/';

	return (
		<>
			{!isHomePage && <WithSubnavigation />}
			{children}
			{!isHomePage && <SmallWithSocial />}
		</>
	);
}

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

			<body className="font-sans antialiased">
				<PayPalScriptProvider options={initialOptions}>
					<ChakraProvider>
						<LayoutContent>{children}</LayoutContent>
					</ChakraProvider>
					{/* <PayPalButtons style={{ layout: 'horizontal' }} /> */}
				</PayPalScriptProvider>
			</body>
		</html>
	);
}
