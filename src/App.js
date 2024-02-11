import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const NUMS = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
	];
	const onClickBtn = (e) => {
		e.preventDefault();
		if (!operator) {
			setOperand1(operand1 + e.target.textContent);
		} else {
			setOperand2(operand2 + e.target.textContent);
		}
	};

	const onClickOperatorC = () => {
		setOperand1('');
		setOperator('');
		setOperand2('');
		isResult
			? setIsResult(!isResult)
			: setIsResult(isResult);
	};

	const onClickOperatorPlus = () => {
		setOperator('+');
		isResult
			? setIsResult(!isResult)
			: setIsResult(isResult);
	};

	const onClickOperatorMinus = () => {
		setOperator('-');
		isResult
			? setIsResult(!isResult)
			: setIsResult(isResult);
	};

	const onClickOperatorRavno = () => {
		if (operand2) {
			if (operator === '+') {
				setOperand1(Number(operand1) + Number(operand2));
				setOperator('');
				setOperand2('');
				setIsResult(!isResult);
			} else if (operator === '-') {
				setOperand1(Number(operand1) - Number(operand2));
				setOperator('');
				setOperand2('');
				setIsResult(!isResult);
			}
		}
	};

	const numberBtn = NUMS.map((num) => {
		return (
			<button
				key={num}
				onClick={onClickBtn}
				className={styles.btn}
			>
				{num}
			</button>
		);
	});

	return (
		<div className={styles.app}>
			<div className={styles.display}>
				<h3
					className={
						isResult ? styles.green : styles.white
					}
				>
					{operand1 + operator + operand2}{' '}
				</h3>
			</div>
			<div className={styles.button}>
				<div>
					<form>{numberBtn}</form>
				</div>
				<div className={styles.buttons}>
					<button
						className={styles.bgOrange}
						key="C"
						onClick={onClickOperatorC}
					>
						C
					</button>
					<button
						className={styles.bgOrange}
						key="+"
						onClick={onClickOperatorPlus}
					>
						+
					</button>
					<button
						className={styles.bgOrange}
						key="-"
						onClick={onClickOperatorMinus}
					>
						-
					</button>
					<button
						className={styles.bgOrange}
						key="="
						onClick={onClickOperatorRavno}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
};
