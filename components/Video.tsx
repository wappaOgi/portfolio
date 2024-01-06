import {
	Box,
	Flex,
	FormControl,
	FormLabel,
	Image,
	Select,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

type PaymentType = {
	amount?: string;
};

export default function Video({ amount }: PaymentType) {
	const vidRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const [videoSrc, setVideoSrc] = useState('/images/ucl.mp4');
	const handlePlayVideo = () => {
		if (!isPlaying) {
			(vidRef.current as any)?.play();
			setIsPlaying(true);
		}
		if (isPlaying) {
			(vidRef.current as any)?.pause();
			setIsPlaying(false);
		}
	};

	return (
		<Flex flexDirection={{ base: 'column', xl: 'row' }} background={'#0c0e15'}>
			<Flex
				flexDirection={'column'}
				align={'flex-start'}
				justify={'flex-start'}
				background={'#0c0e15'}
				position={'relative'}
				overflow={'hidden'}
				h={'1000px'}
				// background={{
				// 	base: 'red', // 0px
				// 	sm: 'blue', // ~480px. em is a relative unit and is dependant on the font size.
				// 	md: 'violet', // ~768px
				// 	lg: 'pink',
				// 	xl: 'gold',
				// 	'2xl': 'cyan',
				// }}
			>
				<Flex
					position={'absolute'}
					transform={{ base: 'rotate(0deg)', xl: 'rotate(7.25deg)' }}
					top={{ base: '35%', xl: '15%' }}
					left={'3%'}
					maxW={{ base: '400px', xl: '700px' }}
					zIndex={5}
					overflow={'hidden'}
				>
					<Box
						ref={vidRef}
						as="video"
						// controls
						autoPlay={false}
						src={videoSrc}
						objectFit="contain"
						sx={{
							aspectRatio: '16/9',
						}}
					/>
				</Flex>

				<Image
					src={'/images/tv.png'}
					h={'900px'}
					zIndex={10}
					objectFit={'cover'}
					display={{ base: 'none', xl: 'flex' }}
				/>
				<Image
					src={'/images/oldtv.png'}
					h={'900px'}
					zIndex={10}
					objectFit={'cover'}
					display={{ base: 'flex', xl: 'none' }}
				/>
			</Flex>
			<Flex
				flex={1}
				background={'transparent'}
				justify={'center'}
				align={'center'}
				flexDirection={'column'}
				gap={5}
			>
				<Box
					_hover={{
						background: 'transparent',
						color: 'white',
					}}
					cursor={'pointer'}
					boxShadow="2xl"
					p="6"
					rounded="lg"
					bg="white"
					onClick={handlePlayVideo}
				>
					{isPlaying ? <FaPause /> : <FaPlay />}
				</Box>
				<FormControl color={'white'} maxW={'40%'}>
					<FormLabel>Meet me through videos</FormLabel>
					<Select
						onChange={(x) => {
							(vidRef.current as any)?.pause();
							setVideoSrc(x?.target?.value);
							setIsPlaying(false);
						}}
						bg={'#0c0e15'}
						sx={{
							'> option': {
								background: '#0c0e15',
								color: 'white',
							},
						}}
					>
						<option value={'/images/ucl.mp4'}>What I watch on TV</option>
						<option value={'/images/marko.mp4'}>About Me</option>
					</Select>
				</FormControl>
			</Flex>
		</Flex>
	);
}
