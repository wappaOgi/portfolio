import { Flex, keyframes, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { digital7, inter } from './utils/fonts';

type PaymentType = {
	amount?: string;
};

export default function Stats({}: PaymentType) {
	const [stats, setStats] = useState<any>();
	const pulse = keyframes({
		'0%': {
			backgroundPosition: '90% 0%',
		},
		'50%': {
			backgroundPosition: '100% 100%',
		},
		'100%': {
			backgroundPosition: '90% 0%',
		},
	});

	useEffect(() => {
		const myTimeout = setTimeout(() => {
			let statsObject = [
				{ number: 10, text: 'years of experience' },
				{ number: 150, text: 'finished projects' },
				{ number: 10, text: '3years of experience' },
			];

			const randomStat =
				statsObject[Math.floor(Math.random() * statsObject.length)];
			setStats(randomStat);
		}, 1000);

		return () => {
			clearTimeout(myTimeout);
		};
	}, [stats]);

	return (
		<Flex
			flexDirection={'column'}
			padding={'20px'}
			align={'center'}
			justify={'center'}
			background={'dark'}
			// h={'60vh'}
			h={'500px'}
			backgroundSize={'100%'}
			backgroundImage={'/images/mb2.jpg'}
			backgroundPosition={'0 -150px'}
		>
			<Flex
				letterSpacing={'20px'}
				fontSize={'306px'}
				fontWeight={'bold'}
				color={'white'}
				className={digital7.className}
			>
				{stats?.number}
			</Flex>

			<Text
				className={inter.className}
				color={'white'}
				fontSize={'50px'}
				letterSpacing={'10px'}
			>
				{stats?.text}
			</Text>
		</Flex>
	);
}
