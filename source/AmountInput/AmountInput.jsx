/* eslint-disable */
// TODO бурать
import React from 'react';
import accounting from 'accounting';
import PropTypes from 'prop-types';
import {numberHelper} from 'modul-helpers';
const {parseNumber, noZero, trimValidLength}=numberHelper;

accounting.settings = {
	number: {
		decimal: ","
	}
};

// /**
//  * Отсекаем лишние символы после в дробной части, из 2.1121 -> 2.11
//  * @param str
//  * @param char
//  * @returns {*}
//  */
// function trimValidLength(str, char) {
//     let resultStr = str;
//     let lengthAfterChar = 0;
//     if (str.lastIndexOf(char) >= 0)
//         lengthAfterChar = str.length - str.lastIndexOf(char) - 1; //без учета точки
//
//     let trimLength = lengthAfterChar - 2; //сколько лишних символов нужно отрезать с конца
//     if (trimLength > 0) {
//         resultStr = str.substr(0, str.length - trimLength);
//     }
//
//     return resultStr;
// }

function cleanValue(val, ignoreSpace = true) {
	let res = ignoreSpace ? val.replace(/[^0-9\.,]+/g, '') : val.replace(/[^0-9\., ]+/g, '');
	res = res.replace(/,/g, '.').replace('-', '');
	const dotPos = res.indexOf('.');
	if (dotPos > -1) {
		const output = res.split('.');
		res = output.shift() + '.' + output.join('');
	}
	return res;
}


function calculateStart(start, originValue, formattedValue) {
	const substr = originValue.substring(0, start).replace(/ /g, '');
	let regex = '^';

	for (let i = 0, len = substr.length; i < len; i++) {
		regex += substr[i] + ' {0,1}';
	}
	const match = new RegExp(regex).exec(formattedValue);
	return match && match[0].length || 0;
}

function parseFloatOrNull(val) {
	const result = parseFloat(cleanValue(val));
	return isNaN(result) ? null : result;
}

class AmountInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewValue: ''
		};
	}

	static defaultProps = {
		onChange: () => {
		}, /*no-op*/
		type: 'text'
	};

	setFocus() {
		this.el && this.el.focus();
	}

	componentDidMount() {
		const {viewValue, startPos}=this.parseValue(this.props.value);
		this.setState({viewValue, startPos});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.startPos != this.state.startPos)
			this.setSelectionRange(this.state.startPos);
	}

	isEqualValues(oldValue, newValue) {
		const parseOld = parseNumber(oldValue);
		const parseNew = parseNumber(newValue);
		return parseNew == parseOld ||
			(parseOld && noZero(parseOld) && parseNew == 0);
	}

	componentWillReceiveProps(props) {
		if (props && !this.isEqualValues(this.state.viewValue, props.value)) {
			const {viewValue, startPos}=this.parseValue(props.value);
			this.setState({viewValue, startPos});
		}
	}

	handleKeyDown(e) {
		const el = this.el;
		let isDeleting = e.keyCode === 8;
		let value = (e.target.value || '');
		let prevCharValue = value[el.selectionStart - 1];

		let isDeletingWhiteSpace = false;
		if (isDeleting && el.selectionStart >= 2) {
			let prevSelectionStartChars = value.substring(0, el.selectionStart - 1);
			if (prevSelectionStartChars && /\w/.test(prevSelectionStartChars)) {
				isDeletingWhiteSpace = /\s/g.test(prevCharValue);
			}
		}

		let isDeletingDecimalSeparator = isDeleting && prevCharValue === ',';

		let startPos = null;
		if (isDeletingDecimalSeparator || isDeletingWhiteSpace) {
			e.preventDefault();
			startPos = el.selectionStart - 1;
		}

		this.setState({isDeleting, startPos});
		this.props.onKeyDown && this.props.onKeyDown(e);
	}

	parseValue(val) {
		const el = this.el;
		const {isDeleting} = this.state;

		if (val === undefined || val === null)
			val = '';

		if (!val.replace)
			val = val.toString();

		const clean = trimValidLength(cleanValue(val, false), '.',2);
		const value = parseFloatOrNull(clean);
		const formattedValue = value ? accounting.formatNumber(value, 2, " ") : '';

		let startPos = el.selectionStart;

		if (value && el && formattedValue.length != clean.length) {
			startPos = calculateStart(el.selectionStart, clean, formattedValue);
		}

		let viewValue = formattedValue;

		// if (!value) {
		// 	if (!(/^0[,.]?0*/.test(val))) {
		// 		viewValue = '';
		// 	} else {
		// 		if (isDeleting) {
		// 			if (val === '0' || val === '00')
		// 				viewValue = '';
		// 			else if (val === '0,') {
		// 				viewValue = '0';
		// 				startPos = 1;
		// 			}
		// 		}
		// 		else {
		// 			if (!val || val === '0') {
		// 				viewValue = '0';
		// 				startPos = 1;
		// 			} else if (val === '0,') {
		// 				viewValue = '0,';
		// 				startPos = 2;
		// 			}
		// 			else if (val === '0,0') {
		// 				viewValue = '0,0';
		// 				startPos = 3;
		// 			} else {
		// 				viewValue = '';
		// 			}
		// 		}
		// 	}
		// }

		if (!value) {
			if (!(/^0[,.]?0*/.test(clean))) {
				viewValue = '';
			} else {
				viewValue = clean.replace('.', ',');
				if (viewValue == '0' || viewValue == '0,' || viewValue == '0,0') {
					viewValue = '0,00';
					startPos = calculateStart(el.selectionStart, clean, viewValue);
				}
			}
		}

		return {startPos, viewValue};
	}

	handleChange(event) {
		let val = event.target.value;
		const {viewValue, startPos}=this.parseValue(val);
		this.setState({viewValue, startPos}, () => {
			this.setSelectionRange(startPos);
			this.props.onChange(viewValue, event);
		});
	}

	setSelectionRange(startPos) {
		if ((startPos || startPos === 0) && this.el.selectionStart != startPos) {
			this.el.setSelectionRange(startPos, startPos);
		}
	}


	render() {
		let props = {...this.props};
		delete props.onChange;
		delete props.onKeyDown;
		delete props.value;

		return (
			<input
				{...props}
				ref={input => this.el = input}
				value={this.state.viewValue}
				onKeyDown={::this.handleKeyDown}
				onChange={::this.handleChange} />
		);
	}
}

AmountInput.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired
};

export default AmountInput;