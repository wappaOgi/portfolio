import { Flex, Image, Link, Text } from '@chakra-ui/react';
import { augustus, corleone, marketDeco } from './utils/fonts';

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
				<Flex>Basketball </Flex>
				<Flex>|</Flex>
				<Flex>Travel </Flex>
				<Flex>|</Flex>
				<Flex>DJ </Flex>
				<Flex>|</Flex>
				<Flex>Languages </Flex>
				<Flex>|</Flex>
				<Flex>Dog</Flex>
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
