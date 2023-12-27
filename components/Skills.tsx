import { Flex, Image, keyframes } from '@chakra-ui/react';
import Ticker, { FinancialTicker } from 'nice-react-ticker';

type PaymentType = {
	amount?: string;
};

export default function Skills({ amount }: PaymentType) {
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
			align={'center'}
			justify={'center'}
			background={'#0c0e15'}
			position={'relative'}
			overflow={'hidden'}
		>
			<Flex
				position={'absolute'}
				transform={'rotate(0deg)'}
				top={'10%'}
				left={'40%'}
				maxW={'700px'}
				zIndex={5}
			>
				<Ticker slideSpeed={25}>
					<FinancialTicker
						id={1}
						change={true}
						symbol="REACT"
						lastPrice="3372.2"
						percentage="2.38%"
						currentPrice="9.9"
					/>
					<FinancialTicker
						id={2}
						change={true}
						symbol="Next.js"
						lastPrice="3372.2"
						percentage="1.38%"
						currentPrice="9.6"
					/>
					<FinancialTicker
						id={3}
						change={true}
						symbol="NODE.js"
						lastPrice="3372.2"
						percentage="0.98%"
						currentPrice="8.9"
					/>
					<FinancialTicker
						id={4}
						change={true}
						symbol="Kubernetes"
						lastPrice="3372.2"
						percentage="0.38%"
						currentPrice="5.9"
					/>
					<FinancialTicker
						id={5}
						change={true}
						symbol="Figma"
						lastPrice="3372.2"
						percentage="-0.18%"
						currentPrice="1.9"
					/>
					<FinancialTicker
						id={6}
						change={true}
						symbol="Open AI tools"
						lastPrice="3372.2"
						percentage="6.38%"
						currentPrice="3.9"
					/>
				</Ticker>
			</Flex>
			<Flex
				position={'absolute'}
				transform={'rotate(0deg)'}
				top={'19%'}
				left={'40%'}
				maxW={'700px'}
				zIndex={5}
			>
				<Ticker slideSpeed={9}>
					<FinancialTicker
						id={1}
						change={true}
						symbol="Java"
						lastPrice="3372.2"
						percentage="1.38%"
						currentPrice="7.9"
					/>
					<FinancialTicker
						id={2}
						change={true}
						symbol="Linux"
						lastPrice="3372.2"
						percentage="-0.38%"
						currentPrice="8.9"
					/>
					<FinancialTicker
						id={3}
						change={true}
						symbol="AWS"
						lastPrice="3372.2"
						percentage="1.38%"
						currentPrice="5.9"
					/>
					<FinancialTicker
						id={4}
						change={true}
						symbol="Mongo"
						lastPrice="3372.2"
						percentage="0.38%"
						currentPrice="6.9"
					/>
					<FinancialTicker
						id={5}
						change={true}
						symbol="Oracle"
						lastPrice="3372.2"
						percentage="-0.38%"
						currentPrice="6.9"
					/>
				</Ticker>
			</Flex>
			<Image
				src={'/images/tradingMask.png'}
				h={'900px'}
				zIndex={10}
				objectFit={'cover'}
			/>
		</Flex>
	);
}
