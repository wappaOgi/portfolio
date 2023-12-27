"use client"
import Hero from '@/components/Hero';
import Hobbies from '@/components/Hobbies';
import Logowall from '@/components/Logowall';
import WorldMap from '@/components/Map';
import SideProjects from '@/components/SideProjects';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import Video from '@/components/Video';
import { Flex } from '@chakra-ui/react';

export default function Home() {
	return (
		<Flex overflow={'hidden'} flexDirection={'column'}>
			<Hero fontSize={150} background="white" />
			<Stats />
			{/* <Playfool /> */}
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
			<WorldMap />

			<Hero
				text="Free time projects"
				subtext={'I worked on in free time'}
				gradient={'linear(to-tr,#6ef195 20%, #00e3fd 50% )'}
				fontSize={40}
				animatedText={false}
			/>
			<SideProjects />

			<Video />
			<Hero
				text="My hobbies"
				subtext={'includes'}
				fontSize={40}
				animatedText={false}
			/>
			<Hobbies />
		</Flex>
	);
}
