import s from './InputColor.module.scss';

const InputColor = ({
	label = '',
	text = '',
	id = '',
	callback = () => {},
}) => {
	return (
		<>
			<div className={s.inputContainer}>
				<label className={s.label} htmlFor={id}>
					{label}
				</label>
				<input
					className={s.input}
					id={id}
					type='color'
					value={text}
					onChange={e => callback(e.target.value)}
				/>
			</div>
		</>
	);
};

export default InputColor;
