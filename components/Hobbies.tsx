import { Flex, Image, Link, Text } from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import { augustus, corleone, marketDeco } from './utils/fonts';
const ResponsiveRadar = dynamic(
	() => import('@nivo/radar').then((m) => m.ResponsiveRadar),
	{ ssr: false }
);
type PaymentType = {
	amount?: string;
};

export default function Hobbies({ amount }: PaymentType) {
	return (
		<Flex
			background={'#0c0e15'}
			flex={1}
			// width={'100%'}
			justify={'center'}
			align={'center'}
			color={'white'}
			paddingBottom={'250px'}
			flexDirection={'column'}
		>
			<Flex flex={1}>
				<Flex
					flex={0.5}
					justify={'center'}
					align={'center'}
					className={marketDeco.className}
					fontSize={'56px'}
				>
					{/* Marco */}
				</Flex>
				<Flex flex={0.5}>
					<Image src="/images/marcopink1.png" />
				</Flex>
			</Flex>

			{/* <Flex flex={1}>
				<Flex flex={0.5}>
					<Image src="/images/basket3.png" />
				</Flex>
				<Flex
					flex={0.5}
					justify={'center'}
					align={'center'}
					className={marketDeco.className}
					fontSize={'56px'}
				>
					I play
				</Flex>
			</Flex> */}
			<Flex
				flex={1}
				className={marketDeco.className}
				// mt={'30px'}
				pb={'60px'}
				gap={5}
			>
				<Flex fontSize={'36px'}>Let&apos;s see them on the chart </Flex>
			</Flex>
			<Flex
				className={marketDeco.className}
				// mt={'30px'}
				pb={'60px'}
				gap={5}
				bgGradient={'linear(to-r,#12c2e9 , #c471ed ,#f64f59 )'}
				width={'100%'}
				height={'500px'}
				color={'black'}
			>
				<ResponsiveRadar
					data={[
						{
							taste: 'Football',
							chardonay: 110,
						},
						{
							taste: 'Beach Volleyball',
							chardonay: 55,
						},
						{
							taste: 'Basketball',
							chardonay: 109,
						},
						{
							taste: 'Electronic music',
							chardonay: 71,
						},
						{
							taste: 'Playing guitar',
							chardonay: 114,
						},
					]}
					keys={['chardonay']}
					indexBy="taste"
					valueFormat=">-.2f"
					margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
					borderColor={{ from: 'color' }}
					gridLabelOffset={36}
					dotSize={10}
					dotColor={{ theme: 'background' }}
					dotBorderWidth={2}
					colors={{ scheme: 'nivo' }}
					blendMode="multiply"
					motionConfig="wobbly"
					legends={[
						{
							anchor: 'top-left',
							direction: 'column',
							translateX: -50,
							translateY: -40,
							itemWidth: 80,
							itemHeight: 20,
							itemTextColor: '#999',
							symbolSize: 12,
							symbolShape: 'circle',
							effects: [
								{
									on: 'hover',
									style: {
										itemTextColor: '#000',
									},
								},
							],
						},
					]}
				/>
			</Flex>
			<Flex flex={1} background={'white'} width={'100%'} paddingTop={'180px'}>
				<Flex flexDirection={'column'} paddingLeft={'20px'}>
					<Text className={augustus.className} fontSize={'2vw'} color={'black'}>
						What&apos;s next?
					</Text>
					<Text className={corleone.className} fontSize={'5vw'} color={'black'}>
						Give me an offer I can not{' '}
					</Text>
					<Link
						className={corleone.className}
						fontSize={'5vw'}
						color={'red'}
						href="mailto:marko.ognjenovich@gmail.com"
					>
						refuse
					</Link>
				</Flex>

				<Image src="/images/godfather.png" marginTop={'auto'} />
			</Flex>
		</Flex>
	);
}
