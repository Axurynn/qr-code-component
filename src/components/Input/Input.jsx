import s from './Input.module.scss';

const Input = ({ text = '', callback = () => {} }) => {
	return (
		<>
			<div className={s.inputContainer}>
				<label className={s.label} htmlFor='input'>
					Enter a website URL to obtain the associated QR Code
				</label>
				<input
					className={s.input}
					id='input'
					type='text'
					placeholder='Enter here a website url'
					value={text}
					onChange={e => callback(e.target.value)}
				/>
			</div>
		</>
	);
};

export default Input;
