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
		<Flex flexDirection={'row'} background={'#0c0e15'}>
			<Flex
				flexDirection={'column'}
				align={'flex-start'}
				justify={'flex-start'}
				background={'#0c0e15'}
				position={'relative'}
				overflow={'hidden'}
				h={'1000px'}
			>
				<Flex
					position={'absolute'}
					transform={'rotate(7.25deg)'}
					top={'15%'}
					left={'3%'}
					maxW={'700px'}
					zIndex={5}
					overflow={'hidden'}
					// background={'red'}
				>
					<Box
						ref={vidRef}
						as="video"
						// controls
						autoPlay={false}
						// src="https://file-examples.com/wp-content/storage/2017/04/file_example_MP4_480_1_5MG.mp4"
						src={videoSrc}
						// poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
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
							console.log('x: ', x.target.value);
							setVideoSrc(x?.target?.value);
							setIsPlaying(true);
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
