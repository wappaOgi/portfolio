import {
	Divider,
	Flex,
	Link,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	UnorderedList,
	useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

type PaymentType = {
	amount?: string;
};

export default function SideProjects({ amount }: PaymentType) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [currentProject, setCurrentProject] = useState<any>();
	const [description, setDescription] = useState<any>();
	const [link, setLink] = useState<any>();

	useEffect(() => {
		console.log('currentProject: ', currentProject);
		switch (currentProject) {
			case 'spoortsky':
				setDescription(
					'Spoortsky is a sport news aggregator/portal. It is scraping news from popular sport websites and shows links to the original news articles. Only criteria is that news must be sport related.'
				);
				setLink('https://www.spoortsky.com/');
				break;
			case 'cvMacer':
				setDescription('Cv Macer is app for creating thematic CVs.');
				setLink('https://cv-macer.vercel.app/');
				break;
			case 'Fashionista':
				setDescription('Fashionista is app in Tinder style for rating style.');
				setLink('https://fashionista-kappa.vercel.app/');
				break;

			default:
				break;
		}
	}, [currentProject]);

	return (
		<Flex
			background={'#0c0e15'}
			flex={1}
			// width={'100%'}
			justify={'center'}
			align={'center'}
			color={'white'}
			paddingBottom={'250px'}
		>
			<UnorderedList
				spacing={1}
				position={'relative'}
				transform={'skewY(-15deg)'}
			>
				<ListItem
					onClick={() => {
						setCurrentProject('spoortsky');
						onOpen();
					}}
					position={'relative'}
					listStyleType={'none'}
					width={'100%'}
					bgGradient={'linear(to-br,#6ef195 20%, #00e3fd 50% )'}
					color={'black'}
					padding={'15px'}
					textTransform={'uppercase'}
					letterSpacing={'0.05em'}
					transition={'0.5s'}
					_hover={{
						transition: '0.5s',
						background: '#71C7EC',
						transform: 'translateX(-50px)',
						_before: {
							background: '#005073',
							transition: '0.5s',
						},
						_after: {
							background: '#107dac',
							transition: '0.5s',
						},
					}}
					_before={{
						content: '""',
						position: 'absolute',
						width: '40px',
						height: '100%',

						top: 0,
						left: '-40px',
						transformOrigin: 'right',
						transform: 'skewY(45deg)',
						transition: '0.5s',
						bgGradient: 'linear(to-tr,#6ef195 20%, #00e3fd 50% )',
					}}
					_after={{
						content: '""',
						position: 'absolute',
						left: 0,
						top: '-40px',
						width: '100%',
						height: '40px',

						transformOrigin: 'bottom',
						transform: 'skewX(45deg)',
						transition: '0.5s',
						bgGradient: 'linear(to-tr,#6ef195 20%, #00e3fd 50% )',
					}}
					zIndex={3}
					cursor={'pointer'}
				>
					sPORT NEWS PORTAL
				</ListItem>
				<ListItem
					onClick={() => {
						setCurrentProject('cvMacer');
						onOpen();
					}}
					position={'relative'}
					listStyleType={'none'}
					width={'80%'}
					bgGradient={'linear(to-br,#6ef195 20%, #00e3fd 50% )'}
					color={'black'}
					padding={'15px'}
					textTransform={'uppercase'}
					letterSpacing={'0.05em'}
					transition={'0.5s'}
					_hover={{
						transition: '0.5s',
						background: '#71C7EC',
						transform: 'translateX(-50px)',
						_before: {
							background: '#005073',
							transition: '0.5s',
						},
						_after: {
							background: '#107dac',
							transition: '0.5s',
						},
					}}
					_before={{
						content: '""',
						position: 'absolute',
						width: '40px',
						height: '100%',

						top: 0,
						left: '-40px',
						transformOrigin: 'right',
						transform: 'skewY(45deg)',
						transition: '0.5s',
						bgGradient: 'linear(to-tr,#6ef195 20%, #00e3fd 50% )',
					}}
					_after={{
						content: '""',
						position: 'absolute',
						left: 0,
						top: '-40px',
						width: '100%',
						height: '40px',

						transformOrigin: 'bottom',
						transform: 'skewX(45deg)',
						transition: '0.5s',
						bgGradient: 'linear(to-tr,#6ef195 20%, #00e3fd 50% )',
					}}
					zIndex={2}
					cursor={'pointer'}
				>
					cvMacer
				</ListItem>
				<ListItem
					onClick={() => {
						setCurrentProject('Fashionista');
						onOpen();
					}}
					position={'relative'}
					listStyleType={'none'}
					width={'70%'}
					bgGradient={'linear(to-br,#6ef195 20%, #00e3fd 50% )'}
					color={'black'}
					padding={'15px'}
					textTransform={'uppercase'}
					letterSpacing={'0.05em'}
					transition={'0.5s'}
					_hover={{
						transition: '0.5s',
						background: '#71C7EC',
						transform: 'translateX(-50px)',
						_before: {
							background: '#005073',
							transition: '0.5s',
						},
						_after: {
							background: '#107dac',
							transition: '0.5s',
						},
					}}
					_before={{
						content: '""',
						position: 'absolute',
						width: '40px',
						height: '100%',

						top: 0,
						left: '-40px',
						transformOrigin: 'right',
						transform: 'skewY(45deg)',
						transition: '0.5s',
						bgGradient: 'linear(to-tr,#6ef195 20%, #00e3fd 50% )',
					}}
					_after={{
						content: '""',
						position: 'absolute',
						left: 0,
						top: '-40px',
						width: '100%',
						height: '40px',

						transformOrigin: 'bottom',
						transform: 'skewX(45deg)',
						transition: '0.5s',
						bgGradient: 'linear(to-tr,#6ef195 20%, #00e3fd 50% )',
						boxShadow: '-120px 120px  20px rgba(256,250,250,0.25)',
					}}
					zIndex={1}
					cursor={'pointer'}
				>
					Fashionista
				</ListItem>
			</UnorderedList>
			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay bg="blackAlpha.300" backdropFilter="blur(20px)" />
				<ModalContent
					background={'transparent'}
					border={'1px solid'}
					borderColor={'white'}
					color={'white'}
					borderRadius={'12px'}
				>
					<ModalHeader>About {currentProject}</ModalHeader>
					<ModalCloseButton />
					<ModalBody background={'transparent'}>
						<Text>{currentProject}</Text>
						<br />
						<Text> {description}</Text>
						<br />
						{/* <Text> {link}</Text> */}
						<Divider />
					</ModalBody>
					<ModalFooter>
						<Link
							mt={'60px'}
							href={link}
							background={'white'}
							padding={'15px'}
							color={'black'}
							target="_blank"
							borderRadius={'12px'}
						>
							Visit the project
						</Link>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	);
}
