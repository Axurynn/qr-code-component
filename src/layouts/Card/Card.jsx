import { useState } from 'react';
import s from './Card.module.scss';
import Input from '../../components/Input/Input';

import QRCode from 'react-qr-code';

const Card = () => {
	const [value, setValue] = useState('');

	return (
		<>
			<div className={s.container}>
				<Input text={value} callback={setValue} />
				<div className={s.content}>
					<div className={s.QRCode}>
						<QRCode value={value} fgColor='#fff' bgColor='#2b7dfa' size={150} />
					</div>
					<h1 className={s.title}>
						Improve your front-end skills by building projects
					</h1>
					<p className={s.text}>
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</p>
				</div>
			</div>
		</>
	);
};

export default Card;
