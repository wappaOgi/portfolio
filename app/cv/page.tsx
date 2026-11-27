'use client';

import Hero from '@/components/Hero';
import Hobbies from '@/components/Hobbies';
import Logowall from '@/components/Logowall';
import WorldMap from '@/components/Map';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import Video from '@/components/Video';
import { Box, Flex } from '@chakra-ui/react';

const CV_BACKGROUND = '/images/cv-background.png';

export default function CV() {
	return (
		<Box
			position={'relative'}
			width={'100%'}
			minH={'100vh'}
			backgroundImage={`url(${CV_BACKGROUND})`}
			backgroundSize={'cover'}
			backgroundPosition={'center top'}
			backgroundRepeat={'no-repeat'}
		>
			<Flex
				position={'relative'}
				zIndex={1}
				overflowX={'hidden'}
				flexDirection={'column'}
				align={'center'}
				width={'100%'}
				maxW={'100vw'}
			>
				<Box
					width={'100%'}
					maxW={'7xl'}
					minW={0}
					mx={'auto'}
					px={{ base: 3, md: 8 }}
					display={'flex'}
					flexDirection={'column'}
					overflowX={'hidden'}
				>
				<Hero fontSize={150} background="white" />
				<Stats />
				<Hero
					text="My tech stack"
					subtext={'includes'}
					fontSize={40}
					animatedText={false}
				/>
				<Skills />
				<Hero
					text="Happy Clients"
					subtext={'I helped'}
					fontSize={40}
					animatedText={false}
				/>
				<Logowall />
				<Hero
					text="Location of my clients"
					subtext={'Contries they are coming from'}
					gradient={'linear(to-r,#C6FFDD 20%, #FBD786, #f7797d  )'}
					fontSize={40}
					animatedText={false}
				/>
				<Box
					width={{ base: 'calc(100% + 1.5rem)', md: '100%' }}
					maxW={{ base: '100vw', md: '100%' }}
					mx={{ base: '-0.75rem', md: 0 }}
					minW={0}
				>
					<WorldMap />
				</Box>
				<Video />
				<Hero
					text="My hobbies"
					subtext={'includes'}
					fontSize={40}
					animatedText={false}
				/>
				<Hobbies />
				</Box>
			</Flex>
		</Box>
	);
}