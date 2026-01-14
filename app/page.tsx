'use client';
import { inter, roboto } from '@/components/utils/fonts';
import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
	return (
		<Flex
			minH="100vh"
			direction="column"
			align="center"
			justify="center"
			bgGradient="radial(circle at center, #1a1a2e, #0c0e15, #000000)"
			padding={{ base: 4, md: 8 }}
		>
			<Container maxW="1200px" centerContent>
				{/* Logo */}
				<Box>
					<Image
						src="/images/logos/motusbig.png"
						alt="MotusBig Logo"
						maxW={{ base: '200px', md: '300px' }}
					/>
				</Box>

				{/* Company Name */}
				<Heading
					as="h1"
					size="2xl"
					color="white"
					textAlign="center"
					mb={4}
					fontWeight="bold"
					className={roboto.className}
				>
					MotusBig
				</Heading>

				{/* Company Description/Parole */}
				<Text
					fontSize={{ base: 'xl', md: '2xl' }}
					color="white"
					textAlign="center"
					mb={12}
					maxW="800px"
					fontWeight="medium"
					className={inter.className}
				>
					Every movement we make needs to be big.
				</Text>

				{/* Project Links Grid */}
				<SimpleGrid
					columns={{ base: 1, md: 2, lg: 3 }}
					spacing={6}
					width="100%"
					maxW="900px"
				>
					<Link href="/cv" style={{ textDecoration: 'none' }}>
						<Box
							bg="transparent"
							borderRadius="50px"
							p={8}
							height="200px"
							display="flex"
							alignItems="center"
							justifyContent="center"
							border="2px solid white"
							_hover={{
								borderColor: '#be22ff',
								boxShadow: '0 10px 30px rgba(190, 34, 255, 0.3)',
								transform: 'translateY(-5px)',
							}}
							transition="all 0.3s"
						>
							<Text
								fontSize="2xl"
								fontWeight="bold"
								color="white"
								className={roboto.className}
							>
								CV
							</Text>
						</Box>
					</Link>

					{/* Placeholder boxes for other projects - you can add more as needed */}
					<Link
						href="https://clubmeter.motusbig.com/"
						target="_blank"
						style={{ textDecoration: 'none' }}
					>
						<Box
							bg="transparent"
							borderRadius="50px"
							p={8}
							height="200px"
							display="flex"
							alignItems="center"
							justifyContent="center"
							border="2px solid white"
							_hover={{
								borderColor: '#ff279c',
								boxShadow: '0 10px 30px rgba(255, 39, 156, 0.3)',
								transform: 'translateY(-5px)',
							}}
							transition="all 0.3s"
						>
							<Text
								fontSize="2xl"
								fontWeight="bold"
								color="white"
								className={roboto.className}
							>
								Clubmeter{' '}
							</Text>
						</Box>
					</Link>

					<Link
						href="https://boutiquebudgeting.motusbig.com/"
						style={{ textDecoration: 'none' }}
					>
						<Box
							bg="transparent"
							borderRadius="50px"
							p={8}
							height="200px"
							display="flex"
							alignItems="center"
							justifyContent="center"
							border="2px solid white"
							_hover={{
								borderColor: '#ff981f',
								boxShadow: '0 10px 30px rgba(255, 152, 31, 0.3)',
								transform: 'translateY(-5px)',
							}}
							transition="all 0.3s"
						>
							<Text
								fontSize="2xl"
								fontWeight="bold"
								color="white"
								className={roboto.className}
							>
								Boutique Budgeting
							</Text>
						</Box>
					</Link>
				</SimpleGrid>
			</Container>
		</Flex>
	);
}
