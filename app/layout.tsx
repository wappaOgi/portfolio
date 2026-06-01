"use client"
import './globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { usePathname } from 'next/navigation';

import SmallWithSocial from '@/components/Footer';
import WithSubnavigation from '@/components/Navbar';
import { Inter, Roboto } from '@next/font/google';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	variable: '--font-roboto',
	display: 'swap',
});

function LayoutContent({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isHomePage = pathname === '/';

	return (
		<div className={`${inter.variable} ${roboto.variable}`}>
			{!isHomePage && <WithSubnavigation />}
			{children}
			{!isHomePage && <SmallWithSocial />}
		</div>
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

			<body>
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
