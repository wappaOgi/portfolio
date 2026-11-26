'use client';

import { Manrope, Newsreader } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import styles from './ParticleHero.module.css';

const manrope = Manrope({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-hero-body',
	display: 'swap',
});

const newsreader = Newsreader({
	subsets: ['latin'],
	weight: ['400', '500'],
	style: ['normal', 'italic'],
	variable: '--font-hero-display',
	display: 'swap',
});

const BUBBLE_COUNT = 10;
const BUBBLE_SIZE: [number, number] = [1.2, 2.2];
const BUBBLE_ORBIT = 14;
const BUBBLE_LINK_DISTANCE = 22;
const REVEAL_RADIUS = 52;

type ParticleHeroProps = {
	/** Looping video — when set, plays on hover instead of revealing the poster image */
	videoSrc?: string;
	/** Still image background (default). Also used as the video poster when videoSrc is set */
	posterSrc?: string;
	posterAlt?: string;
};

/**
 * Particle hover hero.
 *
 * Uses posterSrc as the background by default. To switch to looping video:
 *   <ParticleHero videoSrc="/images/hero.mp4" />
 */
export default function ParticleHero({
	videoSrc,
	posterSrc = '/images/hero.png',
	posterAlt = 'MotusBig',
}: ParticleHeroProps) {
	const heroRef = useRef<HTMLElement>(null);
	const mediaRef = useRef<HTMLDivElement | HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const mouseRef = useRef({ x: -9999, y: -9999, active: false });
	const frameRef = useRef<number>(0);
	const timeRef = useRef(0);
	const reduceMotionRef = useRef(false);

	const updateReveal = (x: number, y: number, active: boolean) => {
		const media = mediaRef.current;
		if (!media) return;

		media.style.setProperty('--reveal-x', `${x}px`);
		media.style.setProperty('--reveal-y', `${y}px`);
		media.style.setProperty(
			'--reveal-radius',
			active ? `${REVEAL_RADIUS}px` : '0px',
		);
	};

	const trackPointer = (clientX: number, clientY: number) => {
		const hero = heroRef.current;
		if (!hero) return;

		const rect = hero.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		mouseRef.current.x = x;
		mouseRef.current.y = y;
		mouseRef.current.active = true;
		updateReveal(x, y, true);
		videoRef.current?.play().catch(() => {});
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
		trackPointer(e.clientX, e.clientY);
	};

	const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
		trackPointer(e.clientX, e.clientY);
	};

	const handleMouseLeave = () => {
		mouseRef.current.active = false;
		updateReveal(-9999, -9999, false);
	};

	const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
		const touch = e.touches[0];
		if (!touch) return;
		trackPointer(touch.clientX, touch.clientY);
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
		const touch = e.touches[0];
		if (!touch) return;
		trackPointer(touch.clientX, touch.clientY);
	};

	const handleTouchEnd = () => {
		mouseRef.current.active = false;
		updateReveal(-9999, -9999, false);
	};

	useEffect(() => {
		const hero = heroRef.current;
		const canvas = canvasRef.current;
		if (!hero || !canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		reduceMotionRef.current = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches;

		const getParticleColor = () =>
			getComputedStyle(hero).getPropertyValue('--hero-particle').trim() ||
			'#f4f1e9';

		const getParticleLineColor = () =>
			getComputedStyle(hero).getPropertyValue('--hero-particle-line').trim() ||
			'rgba(244,241,233,0.14)';

		const resize = () => {
			const rect = hero.getBoundingClientRect();
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			canvas.style.width = `${rect.width}px`;
			canvas.style.height = `${rect.height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};

		const getCursorBubbles = (mx: number, my: number, time: number) => {
			return Array.from({ length: BUBBLE_COUNT }, (_, i) => {
				const phase = (i / BUBBLE_COUNT) * Math.PI * 2;
				const wobble = Math.sin(time * 0.003 + i * 1.7) * 3;
				const dist = BUBBLE_ORBIT + wobble;
				const angle = phase + time * 0.0015;
				return {
					x: mx + Math.cos(angle) * dist,
					y: my + Math.sin(angle) * dist,
					r:
						BUBBLE_SIZE[0] +
						(i % 3) * ((BUBBLE_SIZE[1] - BUBBLE_SIZE[0]) / 2),
				};
			});
		};

		const step = (time: number) => {
			timeRef.current = time;
			const w = canvas.width / dpr;
			const h = canvas.height / dpr;
			ctx.clearRect(0, 0, w, h);

			const mouse = mouseRef.current;
			if (!mouse.active) {
				if (!reduceMotionRef.current) {
					frameRef.current = requestAnimationFrame(step);
				}
				return;
			}

			const bubbles = getCursorBubbles(mouse.x, mouse.y, time);

			for (const bubble of bubbles) {
				ctx.beginPath();
				ctx.arc(bubble.x, bubble.y, bubble.r, 0, Math.PI * 2);
				ctx.fillStyle = getParticleColor();
				ctx.fill();
			}

			ctx.strokeStyle = getParticleLineColor();
			ctx.lineWidth = 1;
			for (let i = 0; i < bubbles.length; i++) {
				for (let j = i + 1; j < bubbles.length; j++) {
					const a = bubbles[i];
					const b = bubbles[j];
					const d = Math.hypot(a.x - b.x, a.y - b.y);
					if (d < BUBBLE_LINK_DISTANCE) {
						ctx.globalAlpha = 1 - d / BUBBLE_LINK_DISTANCE;
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
			}
			ctx.globalAlpha = 1;

			if (!reduceMotionRef.current) {
				frameRef.current = requestAnimationFrame(step);
			}
		};

		window.addEventListener('resize', resize);
		resize();
		frameRef.current = requestAnimationFrame(step);

		return () => {
			cancelAnimationFrame(frameRef.current);
			window.removeEventListener('resize', resize);
		};
	}, []);

	const mediaClassName = `${styles.heroMedia} ${videoSrc ? styles.heroMediaVideo : ''}`;

	const setMediaRef = (node: HTMLDivElement | HTMLVideoElement | null) => {
		mediaRef.current = node;
		if (videoSrc && node instanceof HTMLVideoElement) {
			videoRef.current = node;
		}
	};

	return (
		<section
			ref={heroRef}
			className={`${styles.hero} ${manrope.variable} ${newsreader.variable}`}
			aria-label="Hero"
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{videoSrc ? (
				<video
					ref={setMediaRef}
					className={mediaClassName}
					src={videoSrc}
					poster={posterSrc}
					muted
					loop
					playsInline
					preload="auto"
				/>
			) : (
				<div ref={setMediaRef} className={mediaClassName}>
					<div className={styles.heroMediaPoster}>
						<Image
							src={posterSrc}
							alt={posterAlt}
							fill
							className="object-cover"
							priority
							sizes="100vw"
						/>
					</div>
				</div>
			)}

			<canvas ref={canvasRef} className={styles.particles} aria-hidden />

			<div className={styles.content}>
				<p className={styles.eyebrow}>MotusBig</p>
				<h1 className={styles.title}>
					Build faster,
					<br />
					<em>move bigger</em>
				</h1>
				<p className={styles.sub}>
					Every movement we make needs to be big. Simple, powerful tools built
					for teams that move quick.
				</p>
				<div className={styles.actions}>
					<Link href="/cv" className={styles.ctaPrimary}>
						Start
					</Link>
					<a href="#projects" className={styles.ctaSecondary}>
						Learn
					</a>
				</div>
			</div>

			<div className={styles.hint}>Move your cursor to reveal</div>
		</section>
	);
}
