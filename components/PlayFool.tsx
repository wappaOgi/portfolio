import { Flex, keyframes, Text } from '@chakra-ui/react';
import { digital7, inter } from './utils/fonts';

type PaymentType = {
	amount?: string;
};

export default function Playfool({ amount }: PaymentType) {
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
			background={'dark'}
			h={'30vh'}
			backgroundSize={'contain'}
			backgroundImage={'/images/bgr1.png'}
		>
			<Flex
				animation={`${pulse} 8s cubic-bezier(0.3,0,0.7,1) infinite;`}
				letterSpacing={'20px'}
				fontSize={'306px'}
				fontWeight={'bold'}
				color={'transparent'}
				backgroundClip={'text'}
				backgroundSize={'190%'}
				backgroundImage={'/images/light.png'}
				className={digital7.className}
			>
				8
			</Flex>
			<Text
				className={inter.className}
				color={'white'}
				fontWeight={'bold'}
				fontSize={'50px'}
				letterSpacing={'20px'}
			>
				years of experience
			</Text>
		</Flex>
	);
}
