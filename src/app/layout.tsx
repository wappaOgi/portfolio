import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import type React from 'react';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const playfair = Playfair_Display({
	subsets: ['latin'],
	variable: '--font-playfair',
});

export const metadata: Metadata = {
	title: 'Wide Wings | Creative Production Studio',
	description:
		'We prove how outstanding you are. Creative production studio crafting authentic visual stories.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${playfair.variable} font-sans`}>
				{children}
			</body>
		</html>
	);
}
