import { Flex, keyframes } from '@chakra-ui/react';
import { inter, marketDeco, roboto } from './utils/fonts';

type PaymentType = {
	text?: string;
	subtext?: string;
	gradient?: string;
	background?: string;
	fontSize?: number;
	animatedText?: boolean;
};

export default function Hero({
	text,
	subtext,
	fontSize = 16,
	animatedText = true,
	background,
	gradient,
}: PaymentType) {
	const pulse = keyframes({
		'0%': {
			backgroundPosition: '0% 0%',
		},
		'50%': {
			backgroundPosition: '100% 100%',
		},
		'100%': {
			backgroundPosition: '0% 0%',
		},
	});
	return (
		<Flex
			flexDirection={'column'}
			padding={'20px'}
			align={'center'}
			justify={'center'}
			background={background || '#0c0e15'}
			h={'40vh'}
		>
			{animatedText && (
				<Flex
					animation={`${pulse} 30s cubic-bezier(0.3,0,0.7,1) infinite;`}
					// letterSpacing={'10px'}
					fontSize={'9.2vw'}
					fontWeight={'bold'}
					color={'transparent'}
					backgroundClip={'text'}
					backgroundSize={'190%'}
					backgroundImage={'/images/violetMotherBoard.png'}
					className={marketDeco.className}
				>
					{text || 'Welcome'}
				</Flex>
			)}
			{!animatedText && (
				<>
					<Flex
						fontSize={fontSize || '136px'}
						fontWeight={'bold'}
						color={'#0c0e15'}
						className={roboto.className}
						backgroundClip={'text'}
						bgGradient={
							gradient || 'linear(to-r,#be22ff 20%, #ff279c 50%, #ff981f 80%)'
						}
						textAlign={'center'}
					>
						{text || 'Welcome'}
					</Flex>
					<Flex
						fontSize={`${fontSize / 2}px` || '136px'}
						fontWeight={'bold'}
						color={'white'}
						className={inter.className}
					>
						{subtext || 'Welcome'}
					</Flex>
				</>
			)}
		</Flex>
	);
}
