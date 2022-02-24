import s from './InputColor.module.scss';

const InputColor = ({ label = '', text = '', callback = () => {} }) => {
	return (
		<>
			<div className={s.inputContainer}>
				<label className={s.label} htmlFor='input'>
					{label}
				</label>
				<input
					className={s.input}
					id='input'
					type='color'
					value={text}
					onChange={e => callback(e.target.value)}
				/>
			</div>
		</>
	);
};

export default InputColor;
