'use client';

import Hero from '@/components/Hero';
import Logowall from '@/components/Logowall';

export default function HappyClientsSection() {
	return (
		<section className="bg-white">
			<Hero
				text="Happy Clients"
				subtext="I helped"
				fontSize={40}
				animatedText={false}
				background="white"
			/>
			<Logowall />
		</section>
	);
}