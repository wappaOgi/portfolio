'use client';
import SimpleThreeColumns from '@/components/Features';
import Hero from '@/components/Hero';
import CallToActionWithAnnotation from '@/components/HeroSection';
import Payment from '@/components/Payment';
import SplitWithImage from '@/components/Testimonials';

export default function Home() {
	return (
		<>
			<Hero />
			<CallToActionWithAnnotation />
			<SimpleThreeColumns />
			<SplitWithImage />
			<Payment amount="66" />
		</>
	);
}
