import { Inter, Lora, Roboto, Source_Sans_3 } from '@next/font/google';
import localFont from '@next/font/local';
// define your variable fonts
const inter = Inter({ subsets: ['latin'], weight: '100' });

const roboto = Roboto({
	weight: '700',
	subsets: ['latin'],
});
const lora = Lora({ subsets: ['latin'] });
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_3({ weight: '400', subsets: ['latin'] });
const sourceCodePro700 = Source_Sans_3({ weight: '700', subsets: ['latin'] });
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' });
const coffeShow = localFont({ src: './fonts/Coffee Show.ttf' });
const digital7 = localFont({ src: './fonts/digital-7.ttf' });
const marketDeco = localFont({ src: './fonts/Market_Deco.ttf' });
const augustus = localFont({ src: './fonts/AUGUSTUS.ttf' });
const corleone = localFont({ src: './fonts/Corleone.ttf' });

export {
	augustus,
	coffeShow,
	corleone,
	digital7,
	inter,
	lora,
	marketDeco,
	roboto,
	sourceCodePro400,
	sourceCodePro700,
};
