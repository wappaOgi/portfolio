import localFont from '@next/font/local';

/** Runtime Google families — loaded via globals.css (no build-time fetch). */
export const inter = { className: 'font-inter' };
export const roboto = { className: 'font-roboto' };
export const lora = { className: 'font-lora' };
export const sourceCodePro400 = { className: 'font-source-sans' };
export const sourceCodePro700 = { className: 'font-source-sans' };

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
	marketDeco,
};