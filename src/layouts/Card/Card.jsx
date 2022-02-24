import { useState } from 'react';
import s from './Card.module.scss';
import Input from '../../components/Input/Input';

import QRCode from 'react-qr-code';
import InputColor from '../../components/InputColor/InputColor';

const Card = () => {
	const [value, setValue] = useState('');

	const [bgColor, setBgColor] = useState('#2b7dfa');
	const [fgColor, setFgColor] = useState('#ffffff');

	return (
		<>
			<div className={s.container}>
				<div className={s.content}>
					<div className={s.QRCode} style={{ backgroundColor: bgColor }}>
						<QRCode
							value={value}
							fgColor={fgColor}
							bgColor={bgColor}
							size={150}
							level='H'
						/>
					</div>
					<h1 className={s.title}>
						Improve your front-end skills by building projects with Frontend
						Mentor
					</h1>
					<p className={s.text}>
						Scan the QR code to visit Frontend Mentor (or the URL of your choice
						by filling the input below)
					</p>
				</div>
				<div className={s.custom}>
					<h2 className={s.title}>Custom your own QR code</h2>
					<Input type='text' text={value} callback={setValue} />
					<InputColor
						label='Change the background color'
						text={bgColor}
						callback={setBgColor}
					/>
					<InputColor
						label='Change the QR color'
						text={fgColor}
						callback={setFgColor}
					/>
				</div>
			</div>
		</>
	);
};

export default Card;
