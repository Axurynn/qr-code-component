import s from './InputColor.module.scss';

const InputColor = ({ label = '', text = '', callback = () => {} }) => {
	return (
		<>
			<div className={s.inputContainer}>
				<label className={s.label} htmlFor='inputColor'>
					{label}
				</label>
				<input
					className={s.input}
					id='inputColor'
					type='color'
					value={text}
					onChange={e => callback(e.target.value)}
				/>
			</div>
		</>
	);
};

export default InputColor;
