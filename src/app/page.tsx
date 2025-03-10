'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
	const [showCookies, setShowCookies] = useState(false);

	useEffect(() => {
		// Show cookie banner after a short delay
		const timer = setTimeout(() => {
			setShowCookies(true);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="min-h-screen bg-[#f8f8f8] text-black">
			{/* Navigation */}
			<header className="container mx-auto px-4 py-8">
				<nav className="flex items-center justify-between">
					<div className="flex space-x-8">
						<Link href="#portfolio" className="text-sm hover:underline">
							Portfolio
						</Link>
						<Link href="#services" className="text-sm hover:underline">
							Services
						</Link>
					</div>

					<Link
						href="/"
						className="absolute left-1/2 -translate-x-1/2 text-xl tracking-[0.5em] font-light"
					>
						P A N O R&nbsp;&nbsp;A M O G I
					</Link>

					<div className="flex space-x-8">
						<Link href="#about" className="text-sm hover:underline">
							About
						</Link>
						<Link href="#contact" className="text-sm hover:underline">
							Contact
						</Link>
						<Link href="#language" className="text-sm hover:underline">
							LT
						</Link>
					</div>
				</nav>
			</header>

			{/* Hero Section */}
			<section className="container mx-auto px-4 mt-16 mb-0">
				<div className="flex w-full gap-8 justify-center">
					<div className="flex flex-col justify-center">
						<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif">
							We Make
							<div className="font-serif italic text-5xl md:text-6xl mt-2">
								Panoramic
							</div>{' '}
							Videos
						</h1>
					</div>
					{/* <div className="flex flex-col justify-center items-end mt-16 md:mt-0">
						<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-right">
							Videos
							<div className="font-serif italic text-5xl md:text-6xl mt-2">
								Panoramic
							</div>
						</h1>
					</div> */}
				</div>
			</section>

			{/* Hero Video */}
			<section className="w-full mt-8 relative">
				<div className="aspect-video w-full relative">
					{/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
						<button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
							<Play className="w-8 h-8 text-white" />
						</button>
					</div> */}
					<div
						style={{
							position: 'relative',
							paddingBottom: '56.25%',
							height: 0,
							overflow: 'hidden',
							maxWidth: '100%',
							background: '#000',
						}}
					>
						<iframe
							src={'https://www.youtube.com/embed/h95CYiGUXC8?controls=0'}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
							}}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="YouTube Shorts"
						></iframe>
					</div>

					{/* <Image
						src="/placeholder.svg?height=1080&width=1920"
						alt="Hero video thumbnail"
						width={1920}
						height={1080}
						className="object-cover w-full h-full"
					/> */}
				</div>
			</section>

			{/* Featured Work */}
			<section className="container mx-auto px-4 py-24">
				<h2 className="text-4xl font-serif mb-12">Featured Work</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{['h95CYiGUXC8', '8njKPw4Dwtc', 'bd_9A5qd3ZE'].map((item) => (
						<div key={item} className="group cursor-pointer">
							<div className="aspect-video relative overflow-hidden">
								{/* <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center z-10 transition-opacity">
									<Play className="w-12 h-12 text-white" />
								</div> */}
								<iframe
									src={`https://www.youtube.com/embed/${item}?controls=0`}
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
									}}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									title="YouTube Shorts"
								></iframe>
							</div>
							<h3 className="text-xl font-serif mt-4">Project Title {item}</h3>
							<p className="text-sm text-gray-600 mt-1">Category • 2023</p>
						</div>
					))}
				</div>
				<div className="mt-12 text-center">
					<Link
						href="#portfolio"
						className="inline-block border-b border-black pb-1 hover:pb-2 transition-all"
					>
						View All Projects
					</Link>
				</div>
			</section>

			{/* Services */}
			<section className="bg-black text-white py-24">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-serif mb-16">
						Who needs panoramic videos?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
						{[
							'Aerial Video Production',
							'Unparalleled 360° Perspectives',
							'Interactive Virtual Tours',
							'Perfect for Marketing & Social Media',
							'Storytelling',
							'Elevate Real Estate & Hospitality Marketing',
						].map((service, index) => (
							<div key={index} className="border-t border-white/20 pt-6">
								<h3 className="text-2xl font-serif">{service}</h3>
								<p className="mt-4 text-white/70">
									{/* We create compelling visual stories that connect with your
									audience and elevate your brand. */}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About */}
			<section className="container mx-auto px-4 py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					<div>
						<h2 className="text-4xl font-serif mb-8">About Us</h2>
						<p className="text-lg mb-6">
							Wide Wings is a creative production studio specializing in
							crafting authentic visual stories that resonate with audiences.
						</p>
						<p className="text-lg mb-6">
							Founded in 2015, we ve collaborated with brands and agencies
							worldwide to create content that stands out and makes an impact.
						</p>
						<p className="text-lg">
							Our team of directors, cinematographers, and editors brings a
							unique perspective to every project, ensuring exceptional results.
						</p>
					</div>
					<div className="relative aspect-square">
						<Image
							src="/placeholder.svg?height=800&width=800&text=Team"
							alt="Our team"
							width={800}
							height={800}
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</section>

			{/* Clients */}
			<section className="bg-[#f0f0f0] py-24">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-serif mb-16 text-center">Trusted By</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
						{[1, 2, 3, 4, 5, 6].map((client) => (
							<div key={client} className="flex justify-center">
								<Image
									src={`/placeholder.svg?height=80&width=160&text=Client ${client}`}
									alt={`Client ${client}`}
									width={160}
									height={80}
									className="opacity-60 hover:opacity-100 transition-opacity"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact */}
			<section className="container mx-auto px-4 py-24">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-4xl font-serif mb-8">Lets Create Together</h2>
					<p className="text-lg mb-12">
						Ready to bring your vision to life? Wed love to hear about your
						project and explore how we can help.
					</p>
					<Link
						href="#contact"
						className="inline-block px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors"
					>
						Get in Touch
					</Link>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-black text-white py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div>
							<h3 className="text-xl font-serif mb-6">Wide Wings</h3>
							<p className="text-white/70">
								Creative production studio crafting authentic visual stories.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-serif mb-6">Contact</h3>
							<p className="text-white/70 mb-2">hello@widewings.eu</p>
							<p className="text-white/70">+370 123 45678</p>
						</div>
						<div>
							<h3 className="text-xl font-serif mb-6">Follow Us</h3>
							<div className="flex space-x-4">
								<Link href="#" className="text-white/70 hover:text-white">
									Instagram
								</Link>
								<Link href="#" className="text-white/70 hover:text-white">
									Vimeo
								</Link>
								<Link href="#" className="text-white/70 hover:text-white">
									LinkedIn
								</Link>
							</div>
						</div>
					</div>
					<div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-white/50 text-sm">
							© 2023 Wide Wings. All rights reserved.
						</p>
						<div className="flex space-x-8 mt-4 md:mt-0">
							<Link href="#" className="text-white/50 text-sm hover:text-white">
								Privacy Policy
							</Link>
							<Link href="#" className="text-white/50 text-sm hover:text-white">
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</footer>

			{/* Cookie Banner */}
			{showCookies && (
				<div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between z-50 max-w-md">
					<p className="text-sm mr-4">This website uses cookies</p>
					<button
						onClick={() => setShowCookies(false)}
						className="bg-black text-white text-sm px-4 py-1 rounded-full hover:bg-gray-800"
					>
						Accept
					</button>
				</div>
			)}
		</div>
	);
}
