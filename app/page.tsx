"use client"
import SimpleThreeColumns from '@/components/Features';
import CallToActionWithAnnotation from '@/components/HeroSection';
import Payment from '@/components/Payment';
import SplitWithImage from '@/components/Testimonials';

export default function Home() {
	return (
		<>
			{/* <PayPalButtons style={{ layout: 'horizontal' }} /> */}
			<Payment amount="66" />
			<CallToActionWithAnnotation />
			<SimpleThreeColumns />
			<SplitWithImage />
		</>
	);
}
