import { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container, Content, Row } from './styles';

export function App() {
	const [currentNumber, setCurrentNumber] = useState('0');
	const [firstNumber, setFirstNumber] = useState(null);
	const [operation, setOperation] = useState(null);

	const handleClearInput = () => {
		setCurrentNumber('0');
		setFirstNumber(null);
		setOperation(null);
	};

	const handleAddNumber = (number) => {
		setCurrentNumber((prev) => (prev === '0' ? String(number) : prev + number));
	};

	const handleOperation = (operator) => {
		if (currentNumber !== '0') {
			setFirstNumber(currentNumber);
			setCurrentNumber('0');
			setOperation(operator);
		}
	};

	const handleEqual = () => {
		if (firstNumber && operation) {
			const num1 = Number(firstNumber);
			const num2 = Number(currentNumber);

			let result = 0;
			switch (operation) {
				case '+':
					result = num1 + num2;
					break;
				case '-':
					result = num1 - num2;
					break;
				case '*':
					result = num1 * num2;
					break;
				case '/':
					result = num2 !== 0 ? num1 / num2 : 'Error';
					break;
				default:
					break;
			}
			setCurrentNumber(String(result));
			setFirstNumber(null);
			setOperation(null);
		}
	};

	return (
		<Container>
			<Content>
				<Input value={currentNumber} />
				<Row>
					<Button
						label='C'
						onClick={handleClearInput}
					/>
					<Button
						label='CE'
						onClick={handleClearInput}
					/>

					<Button
						label='*'
						onClick={() => handleOperation('*')}
					/>
					<Button
						label='-'
						onClick={() => handleOperation('-')}
					/>
				</Row>
				<Row>
					<Button
						label='7'
						onClick={() => handleAddNumber('7')}
					/>
					<Button
						label='8'
						onClick={() => handleAddNumber('8')}
					/>
					<Button
						label='9'
						onClick={() => handleAddNumber('9')}
					/>
					<Button
						label='+'
						onClick={() => handleOperation('+')}
					/>
				</Row>
				<Row>
					<Button
						label='4'
						onClick={() => handleAddNumber('4')}
					/>
					<Button
						label='5'
						onClick={() => handleAddNumber('5')}
					/>
					<Button
						label='6'
						onClick={() => handleAddNumber('6')}
					/>
					<Button
						label='/'
						onClick={() => handleOperation('/')}
					/>
				</Row>
				<Row>
					<Button
						label='0'
						onClick={() => handleAddNumber('0')}
					/>
					<Button
						label='1'
						onClick={() => handleAddNumber('1')}
					/>
					<Button
						label='2'
						onClick={() => handleAddNumber('2')}
					/>
					<Button
						label='3'
						onClick={() => handleAddNumber('3')}
					/>
				</Row>
				<Row>
					<Button
						label='='
						onClick={handleEqual}
					/>
				</Row>
			</Content>
		</Container>
	);
}
