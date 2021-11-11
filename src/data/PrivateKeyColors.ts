type PrivateKeyColor = {
	colorName: string;
	value: string;
};

const genColor = (colorName: string, value: string): PrivateKeyColor => ({ colorName, value });

export const PrivateKeyColors = [
	genColor('NAVY', 'hsl(202, 77%, 7%)'),
	genColor('RICH_BLUE_GREEN', 'hsl(175, 41%, 16%)'),
	genColor('RIFLE_GREEN', 'hsl(114, 15%, 28%)'),
	genColor('DARK_PURPLE', 'hsl(330, 29%, 20%)'),
	genColor('AMARANTH', 'hsl(324, 56%, 36%)'),
	genColor('BLUE_YONDER', 'hsl(219, 26%, 52%)'),
	genColor('AUBURN', 'hsl(357, 63%, 40%)'),
	genColor('MAHOGANY', 'hsl(22, 100%, 36%)')
];