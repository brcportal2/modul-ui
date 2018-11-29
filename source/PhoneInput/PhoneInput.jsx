import React from 'react';
import PropTypes from 'prop-types';

const symbol = '+7';
const getPlainNumber = value => {
	if (value === undefined || value === null)
		return '';
	const tempNumber = value.replace ? value : value.toString();
	return tempNumber.replace(symbol, '').replace(/[^0-9]+/g, '').substring(0, 10);
};


class PhoneInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewValue: ''
		};
	}

	static defaultProps = {
		onChange: () => {
		}, /*no-op*/
		type: 'tel'
	};

	setFocus() {
		this.el && this.el.focus();
	}

	componentDidMount() {
		this.setState({viewValue: this.parseValue(this.props.value)});
	}

	componentWillReceiveProps(props) {
		const newValue = this.parseValue(props.value);
		if (props && newValue != this.state.viewValue) {
			this.setState({viewValue: newValue});
		}
	}

	calculateStartCaret(start, value) {
		const lastLength = (this.state.viewValue || '').length;
		const plain = getPlainNumber(value);
		let delta;
		switch (start) {
			case 4:
			case 8:
			case 11:
				delta = lastLength > value.length ? 0 : 1;
				return start + delta;
			default:
				if (lastLength == 0 && plain.length > 8)
					return start + 3;
				return start;
		}
	}

	parseValue(value) {
		var plainNumber = getPlainNumber(value);
		if (plainNumber.length === 0)
			return '';
		var number = plainNumber;
		if (plainNumber.length > 3)
			number = plainNumber.substring(0, 3) + '-' + plainNumber.substring(3, 6);
		if (plainNumber.length > 6)
			number = number + '-' + plainNumber.substring(6, 8);
		if (plainNumber.length > 8)
			number = number + '-' + plainNumber.substring(8, 10);
		return number;
	}

	handleChange(event) {
		let val = event.target.value;
		const viewValue = this.parseValue(val);
		const startPos = this.calculateStartCaret(this.el.selectionStart, viewValue);

		this.setState({viewValue}, () => {
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
		delete props.value;

		return (
			<input
				{...props}
				maxLength="13"
				ref={input => this.el = input}
				value={this.state.viewValue}
				onChange={::this.handleChange} />
		);
	}
}

PhoneInput.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired
};

export default PhoneInput;