import { Box, Flex, Image, SimpleGrid } from '@chakra-ui/react';

type PaymentType = {
	amount?: string;
};

export default function Logowall({ amount }: PaymentType) {
	return (
		<>
			<Flex
				background={'#0c0e15'}
				flex={1}
				// width={'100%'}
				justify={'center'}
				align={'center'}
			>
				<SimpleGrid
					width={'60%'}
					minChildWidth="100px"
					spacing="90px"
					// h={'30vh'}
					// marginInline={'5%'}
					background={'transparent'}
				>
					<Box
						borderRadius={'6px'}
						// bgGradient="linear(to top,#5738d1 , #9039d0 40%)"
						border={'1px solid white'}
						height="80px"
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Image src={'/images/logos/petrol.svg'} maxW={'50%'} />
					</Box>
					<Box
						borderRadius={'6px'}
						bg="white"
						height="80px"
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Image src={'/images/logos/ct.jpg'} maxW={'50%'} />
					</Box>
					<Box
						borderRadius={'6px'}
						// bgGradient="linear(to top,#5738d1 , #9039d0 40%)"
						border={'1px solid white'}
						height="80px"
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Image src={'/images/logos/pbz.svg'} maxW={'50%'} />
					</Box>
					<Box
						borderRadius={'6px'}
						bg="white"
						height="80px"
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Image src={'/images/logos/even.png'} maxW={'50%'} />
					</Box>
					<Box
						borderRadius={'6px'}
						height="80px"
						display={'flex'}
						justifyContent={'center'}
						alignItems={'center'}
						// bgGradient="linear(to top,#5738d1 , #9039d0 40%)"
						border={'1px solid white'}
					>
						<Image src={'/images/logos/tis.svg'} maxW={'50%'} />
					</Box>
				</SimpleGrid>
			</Flex>
		</>
	);
}
