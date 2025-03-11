'use client';

import type React from 'react';

import { VideoModal } from '@component/components/video-modal';
import { Menu, Play, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
	const [showCookies, setShowCookies] = useState(false);
	const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Refs for scroll sections
	const portfolioRef = useRef<HTMLElement>(null);
	const servicesRef = useRef<HTMLElement>(null);
	const aboutRef = useRef<HTMLElement>(null);
	const testimonialsRef = useRef<HTMLElement>(null);
	const contactRef = useRef<HTMLElement>(null);

	useEffect(() => {
		// Show cookie banner after a short delay
		const timer = setTimeout(() => {
			setShowCookies(true);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	// Handle smooth scrolling
	const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
		setMobileMenuOpen(false); // Close mobile menu when a link is clicked

		if (ref.current) {
			window.scrollTo({
				top: ref.current.offsetTop - 100, // Offset to account for navbar height
				behavior: 'smooth',
			});
		}
	};

	const openVideoModal = (videoId: string) => {
		setSelectedVideo(videoId);
	};

	const closeVideoModal = () => {
		setSelectedVideo(null);
	};

	// YouTube video IDs
	const featuredVideos = [
		'h95CYiGUXC8',
		'8njKPw4Dwtc',
		'BKBtCu7hLZw',
		'6vxgA2zuQ-4',
		'bd_9A5qd3ZE',
	];

	// Testimonial data - easily editable
	const testimonials = [
		{
			id: 1,
			quote:
				'Panoramogi transformed our property listings with breathtaking aerial footage. The quality and creativity of their work helped us sell properties 30% faster than before.',
			name: 'Sarah Johnson',
			position: 'Marketing Director, Luxury Estates',
			img: '/placeholder.svg?height=100&width=100&text=SJ',
		},
		{
			id: 2,
			quote:
				"The team at Panoramogi captured our destination wedding perfectly. Their drone footage gave us perspectives we never imagined possible and created memories we'll cherish forever.",
			name: 'Michael & Emma Chen',
			position: 'Wedding Clients',
			img: '/placeholder.svg?height=100&width=100&text=MC',
		},
		{
			id: 3,
			quote:
				'As a tourism board, we needed to showcase our region in a completely new light. Panoramogi delivered stunning aerial cinematography that increased visitor interest by 45% year-over-year.',
			name: 'Thomas Weber',
			position: 'Head of Tourism, Coastal Region',
			img: '/placeholder.svg?height=100&width=100&text=TW',
		},
	];

	return (
		<div className="min-h-screen bg-[#f8f8f8] text-black">
			{/* Fixed Navigation */}
			<header className="fixed top-0 left-0 right-0 bg-[#f8f8f8]/90 backdrop-blur-sm z-50 shadow-sm">
				<div className="container mx-auto px-4 py-6">
					<nav className="flex items-center justify-between relative">
						{/* Mobile menu button */}
						<button
							className="lg:hidden z-20"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							aria-label="Toggle menu"
						>
							{mobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>

						{/* Left menu - desktop */}
						<div className="hidden lg:flex space-x-8">
							<button
								onClick={() => scrollToSection(portfolioRef)}
								className="text-sm hover:underline"
							>
								Portfolio
							</button>
							<button
								onClick={() => scrollToSection(servicesRef)}
								className="text-sm hover:underline"
							>
								Services
							</button>
						</div>

						{/* Center logo - always centered */}
						<div className="absolute left-1/2 -translate-x-1/2 lg:text-xl tracking-[0.5em] font-light whitespace-nowrap text-[12px]">
							P A N O R A M O G I
						</div>

						{/* Right menu - desktop */}

						{/* Language toggle - always visible */}
						<div className="lg:ml-8">
							<div className="hidden lg:flex space-x-8">
								<button
									onClick={() => scrollToSection(aboutRef)}
									className="text-sm hover:underline"
								>
									About
								</button>
								<button
									onClick={() => scrollToSection(testimonialsRef)}
									className="text-sm hover:underline"
								>
									Testimonials
								</button>
								<button
									onClick={() => scrollToSection(contactRef)}
									className="text-sm hover:underline"
								>
									Contact
								</button>
							</div>
						</div>
					</nav>
				</div>

				{/* Mobile menu */}
				{mobileMenuOpen && (
					<div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md z-10 py-4">
						<div className="container mx-auto px-4 flex flex-col space-y-4">
							<button
								onClick={() => scrollToSection(portfolioRef)}
								className="text-sm py-2 hover:bg-gray-100 px-4"
							>
								Portfolio
							</button>
							<button
								onClick={() => scrollToSection(servicesRef)}
								className="text-sm py-2 hover:bg-gray-100 px-4"
							>
								Services
							</button>
							<button
								onClick={() => scrollToSection(aboutRef)}
								className="text-sm py-2 hover:bg-gray-100 px-4"
							>
								About
							</button>
							<button
								onClick={() => scrollToSection(testimonialsRef)}
								className="text-sm py-2 hover:bg-gray-100 px-4"
							>
								Testimonials
							</button>
							<button
								onClick={() => scrollToSection(contactRef)}
								className="text-sm py-2 hover:bg-gray-100 px-4"
							>
								Contact
							</button>
						</div>
					</div>
				)}
			</header>

			{/* Spacer for fixed header */}
			<div className="h-20"></div>

			{/* Hero Section */}
			<section className="container mx-auto px-4 mt-16 mb-20">
				<div className="grid grid-cols-1 md:grid-cols-1 gap-8">
					{/* <div className="flex flex-col justify-center">
						<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif">
							We Prove
							<div className="font-serif italic text-5xl md:text-6xl mt-2">
								How
							</div>
						</h1>
					</div> */}
					<div className="flex flex-col justify-center items-end mt-16 md:mt-0">
						<h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-right">
							Panoramic Videos
							<div className="font-serif italic text-5xl md:text-6xl mt-2">
								which turn Views into Value
							</div>
						</h1>
					</div>
				</div>
			</section>

			{/* Hero Video */}
			<section className="w-full mt-8 relative">
				<div
					className="aspect-video w-full relative cursor-pointer"
					onClick={() => openVideoModal('h95CYiGUXC8')}
				>
					<div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
						<button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
							<Play className="w-8 h-8 text-white" />
						</button>
					</div>
					<img
						src="/toscana.jpeg"
						alt="Hero video thumbnail"
						width={1920}
						height={1080}
						className="object-cover w-full h-full"
					/>
				</div>
			</section>

			{/* Featured Work */}
			<section ref={portfolioRef} className="container mx-auto px-4 py-24">
				<h2 className="text-4xl font-serif mb-12">Our Films</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredVideos.map((videoId) => (
						<div
							key={videoId}
							className="group cursor-pointer"
							onClick={() => openVideoModal(videoId)}
						>
							<div className="aspect-video relative overflow-hidden">
								<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center z-10 transition-opacity">
									<Play className="w-12 h-12 text-white" />
								</div>
								<img
									src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
									alt={`Project ${videoId}`}
									width={1280}
									height={720}
									className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							{/* <h3 className="text-xl font-serif mt-4">Project</h3> */}
							<p className="text-sm text-gray-600 mt-1">
								Panoramic video • 2023
							</p>
						</div>
					))}
				</div>
				{/* <div className="mt-12 text-center">
					<button className="inline-block border-b border-black pb-1 hover:pb-2 transition-all">
						View All Projects
					</button>
				</div> */}
			</section>

			{/* Services */}
			<section ref={servicesRef} className="bg-black text-white py-24">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-serif mb-16">Our Services</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
						<div className="border-t border-white/20 pt-6">
							<h3 className="text-2xl font-serif">Real Estate & Property</h3>
							<p className="mt-4 text-white/70">
								Showcase homes, commercial properties, and landscapes with
								stunning aerial views.
							</p>
						</div>
						<div className="border-t border-white/20 pt-6">
							<h3 className="text-2xl font-serif">Hotels & Resorts</h3>
							<p className="mt-4 text-white/70">
								Highlight breathtaking locations and amenities with immersive
								panoramic videos.
							</p>
						</div>
						<div className="border-t border-white/20 pt-6">
							<h3 className="text-2xl font-serif">Tourism & Travel</h3>
							<p className="mt-4 text-white/70">
								Promote destinations with cinematic aerial storytelling.
							</p>
						</div>
						<div className="border-t border-white/20 pt-6">
							<h3 className="text-2xl font-serif">Event Coverage</h3>
							<p className="mt-4 text-white/70">
								Capture the full scale and energy of weddings, festivals, and
								concerts.
							</p>
						</div>
						<div className="border-t border-white/20 pt-6">
							<h3 className="text-2xl font-serif">
								Construction & Infrastructure
							</h3>
							<p className="mt-4 text-white/70">
								Monitor progress and provide visual updates to stakeholders.
							</p>
						</div>
						<div className="border-t border-white/20 pt-6">
							<h3 className="text-2xl font-serif">
								Agriculture & Land Surveying
							</h3>
							<p className="mt-4 text-white/70">
								Analyze land, crops, and topography with precision.
							</p>
						</div>
						<div className="border-t border-white/20 pt-6">
							<h3 className="text-2xl font-serif">
								Sports & Outdoor Adventures
							</h3>
							<p className="mt-4 text-white/70">
								Film action-packed moments from the sky.
							</p>
						</div>
						<div className="border-t border-white/20 pt-6">
							<h3 className="text-2xl font-serif">Marketing & Advertising</h3>
							<p className="mt-4 text-white/70">
								Create eye-catching campaigns with aerial visuals.
							</p>
						</div>
						<div className="border-t border-white/20 pt-6">
							<h3 className="text-2xl font-serif">
								Government & Municipalities
							</h3>
							<p className="mt-4 text-white/70">
								Urban planning, traffic monitoring, and promotional content.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* About */}
			<section ref={aboutRef} className="container mx-auto px-4 py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					<div>
						<h2 className="text-4xl font-serif mb-8">About Us</h2>
						<p className="text-lg mb-6">
							Panoramogi is a creative production studio specializing in
							crafting authentic visual stories that resonate with audiences.
						</p>
						<p className="text-lg mb-6">
							Founded in 2022, we've collaborated with brands and agencies
							worldwide to create content that stands out and makes an impact.
						</p>
						<p className="text-lg">
							Our team of directors, cinematographers, and editors brings a
							unique perspective to every project, ensuring exceptional results.
						</p>
					</div>
					<div className="relative aspect-square">
						<img
							src="/tim.avif"
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
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 items-center">
						{['bg.png', 'figc.png', 'logi.png'].map((client) => (
              
							<div key={client} className="flex justify-center">
								<img
									src={`/${client}`}
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

			{/* Testimonials */}
			<section ref={testimonialsRef} className=" bg-black px-4 py-24 ">
				<h2 className="text-4xl font-serif mb-16 text-center text-white">
					Client Testimonials
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
						>
							{/* <div className="flex mb-6">
								{[1, 2, 3, 4, 5].map((star) => (
									<Star
										key={star}
										className="w-5 h-5 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div> */}
							<blockquote className="text-lg italic mb-6">
								"{testimonial.quote}"
							</blockquote>
							<div className="flex items-center">
								{/* <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
									<img
										src={testimonial.img || '/placeholder.svg'}
										alt={testimonial.name}
										width={48}
										height={48}
										className="object-cover w-full h-full"
									/>
								</div> */}
								<div>
									<div className="font-semibold">{testimonial.name}</div>
									<div className="text-sm text-gray-600">
										{testimonial.position}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Contact */}
			<section ref={contactRef} className="container mx-auto px-4 py-24">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="text-4xl font-serif mb-8">Let's Create Together</h2>
					<p className="text-lg mb-12">
						Ready to bring your vision to life? We'd love to hear about your
						project and explore how we can help.
					</p>
					<a
						className="inline-block px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors"
						href="mailto:mark.ogie.1991@gmail.com?Subject=Panoramic video"
					>
						Contact Us
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-black text-white py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div>
							<h3 className="text-xl font-serif mb-6">PANORAMOGI</h3>
							<p className="text-white/70">
								Creative production studio crafting authentic visual stories.
							</p>
						</div>
						{/* <div>
							<h3 className="text-xl font-serif mb-6">Contact</h3>
							<p className="text-white/70 mb-2">hello@panoramogi.com</p>
							<p className="text-white/70">+370 123 45678</p>
						</div> */}
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
							© 2025 PANORAMOGI. All rights reserved.
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

			{/* Video Modal */}
			{selectedVideo && (
				<VideoModal
					videoId={selectedVideo}
					isOpen={!!selectedVideo}
					onClose={closeVideoModal}
				/>
			)}
		</div>
	);
}
