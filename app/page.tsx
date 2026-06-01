import Image from 'next/image';
import Link from 'next/link';

function MotusBigLogo({ className = '' }: { className?: string }) {
	return (
		<span
			className={`font-display text-xl font-bold tracking-tight text-white ${className}`}
		>
			MotusBig
		</span>
	);
}

const projects = [
	{
		title: 'CV',
		description: 'Portfolio, experience, and projects from Marko Ogrizović.',
		href: '/cv',
		external: false,
		image: '/images/1.png',
		accent:
			'hover:border-[#be22ff] hover:shadow-[0_10px_30px_rgba(190,34,255,0.3)]',
	},
	{
		title: 'Clubmeter',
		description: 'Track club performance and member engagement metrics.',
		href: 'https://clubmeter.motusbig.com/',
		external: true,
		image: '/images/2.png',
		accent:
			'hover:border-[#ff279c] hover:shadow-[0_10px_30px_rgba(255,39,156,0.3)]',
	},
	{
		title: 'Boutique Budgeting',
		description: 'Simple budgeting tools built for small teams and boutiques.',
		href: 'https://boutiquebudgeting.motusbig.com/',
		external: true,
		image: '/images/3.png',
		accent:
			'hover:border-[#ff981f] hover:shadow-[0_10px_30px_rgba(255,152,31,0.3)]',
	},
	{
		title: 'Pingoo',
		description: 'Online cron job scheduling and monitoring.',
		href: 'https://pingoo.ma1l.space/',
		external: true,
		image: '/images/4.png',
		accent:
			'hover:border-[#00e3fd] hover:shadow-[0_10px_30px_rgba(0,227,253,0.3)]',
	},
];

function ProjectCard({
	title,
	description,
	href,
	external,
	image,
	accent,
}: (typeof projects)[number]) {
	const className = `group flex h-full flex-col rounded-2xl border-2 border-white/20 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 ${accent}`;

	const content = (
		<>
			<div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-motus-400/30 to-motus-700/40">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
				/>
			</div>
			<h3 className="font-display text-xl font-bold text-white">{title}</h3>
			<p className="mt-2 flex-1 text-sm text-white/70">{description}</p>
			<span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white/90 group-hover:text-white">
				{external ? 'Visit' : 'Open'}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
					<path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" />
				</svg>
			</span>
		</>
	);

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={className}
			>
				{content}
			</a>
		);
	}

	return (
		<Link href={href} className={className}>
			{content}
		</Link>
	);
}

export default function Home() {
	return (
		<div className="min-h-screen bg-motus-700 font-sans text-white">
			{/* Navbar */}
			<header className="border-b border-white/10 bg-motus-700">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-[5%] py-4">
					<Link href="/" className="flex items-center gap-3">
						<MotusBigLogo />
					</Link>
					<nav className="hidden items-center gap-8 md:flex">
						<a
							href="#projects"
							className="text-sm text-white/80 hover:text-white"
						>
							Projects
						</a>
						<Link href="/cv" className="text-sm text-white/80 hover:text-white">
							CV
						</Link>
					</nav>
					<Link
						href="/cv"
						className="rounded-md border border-white bg-white px-4 py-2 text-sm font-medium text-motus-700 transition hover:bg-white/90"
					>
						Start
					</Link>
				</div>
			</header>

			{/* Hero */}
			<section className="bg-motus-700 px-[5%] py-16 md:py-24">
				<div className="mx-auto max-w-7xl">
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
							Build faster with MotusBig
						</h1>
						<p className="mt-4 text-lg text-white/80 md:text-xl">
							Every movement we make needs to be big. Simple, powerful tools
							built for teams that move quick.
						</p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<Link
								href="/cv"
								className="rounded-md border border-white bg-white px-6 py-3 text-sm font-medium text-motus-700 transition hover:bg-white/90"
							>
								Start
							</Link>
							<a
								href="#projects"
								className="rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:border-white"
							>
								Learn
							</a>
						</div>
					</div>
					<div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-motus-600/50">
						<div className="relative aspect-video w-full">
							<Image
								src="/images/hero.png"
								alt="MotusBig"
								fill
								className="object-cover"
								priority
								sizes="(max-width: 1024px) 100vw, 1024px"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Projects (Relume layout239-style) */}
			<section id="projects" className="bg-motus-100 px-[5%] py-16 md:py-24">
				<div className="mx-auto max-w-7xl">
					<div className="mx-auto max-w-3xl text-center">
						<p className="text-sm font-semibold uppercase tracking-wide text-motus-600">
							Projects
						</p>
						<h2 className="mt-2 font-display text-3xl font-bold text-motus-900 md:text-4xl">
							What MotusBig brings to your business
						</h2>
						<p className="mt-4 text-motus-800/80">
							Explore our products — from portfolio and SaaS tools to automation
							utilities.
						</p>
					</div>

					<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
						{projects.map((project) => (
							<div key={project.title} className="rounded-2xl bg-motus-700 p-1">
								<ProjectCard {...project} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className="bg-white px-[5%] py-16 md:py-24">
				<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
					<div>
						<p className="text-sm font-semibold uppercase tracking-wide text-motus-600">
							Metrics
						</p>
						<h2 className="mt-2 font-display text-3xl font-bold text-motus-900 md:text-4xl">
							Numbers that speak for themselves
						</h2>
						<p className="mt-4 text-gray-600">
							MotusBig powers teams across industries. These aren&apos;t vanity
							metrics — they&apos;re proof that our software works.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-8">
						{[
							{ value: '4+', label: 'Live products' },
							{ value: '99.9%', label: 'Uptime' },
							{ value: '∞', label: 'Ideas in motion' },
							{ value: '1', label: 'Big movement' },
						].map((stat) => (
							<div key={stat.label} className="border-l border-motus-200 pl-6">
								<div className="font-display text-4xl font-bold text-motus-700 md:text-5xl">
									{stat.value}
								</div>
								<div className="mt-1 text-sm font-medium text-gray-600">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-motus-700 px-[5%] py-16 md:py-24">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-display text-3xl font-bold md:text-4xl">
						Start building with MotusBig
					</h2>
					<p className="mt-4 text-white/80">
						Explore our projects or dive into the portfolio. No credit card
						needed.
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
						<Link
							href="/cv"
							className="rounded-md border border-white bg-white px-6 py-3 text-sm font-medium text-motus-700 transition hover:bg-white/90"
						>
							Start
						</Link>
						<a
							href="#projects"
							className="rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
						>
							View projects
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-white/10 bg-motus-800 px-[5%] py-12">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
					<div className="flex items-center gap-3">
						<MotusBigLogo className="opacity-90" />
					</div>
					<nav className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
						<Link href="/cv" className="hover:text-white">
							CV
						</Link>
						<a
							href="https://clubmeter.motusbig.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							Clubmeter
						</a>
						<a
							href="https://boutiquebudgeting.motusbig.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							Boutique Budgeting
						</a>
						<a
							href="https://pingoo.ma1l.space/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							Pingoo
						</a>
					</nav>
					<p className="text-sm text-white/50">
						© {new Date().getFullYear()} MotusBig. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}
