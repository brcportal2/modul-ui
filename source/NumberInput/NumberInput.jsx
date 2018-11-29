import React from 'react';
import PropTypes from 'prop-types';
import {numberHelper} from 'modul-helpers';
const {parseNumber, cleanValue, noZero, trimValidLength} = numberHelper;

class NumberInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewValue: ''
		};
	}

	static defaultProps = {
		onChange: () => {
		}, /*no-op*/
		type: 'tel',
		mask: '',
		float: false,
		precision: null
	};

	setFocus() {
		this.el && this.el.focus();
	}

	componentDidMount() {
		this.setState({viewValue: this.parseValue({
			value: this.props.value,
			float: this.props.float,
			precision: this.props.precision
		})});
	}

	componentWillReceiveProps(nextProps) {
		if (
			!this.isEqualValues(this.state.viewValue, nextProps.value) ||
			this.props.float !== nextProps.float ||
			this.props.precision !== nextProps.precision
		) {
			this.setState({viewValue: this.parseValue({
				value: nextProps.value,
				float: nextProps.float,
				precision: nextProps.precision
			})});
		}
	}

	isEqualValues(oldValue, newValue) {
		const parseOld = parseNumber(oldValue);
		const parseNew = parseNumber(newValue);
		return parseNew == parseOld ||
			(parseOld && noZero(parseOld) && parseNew == 0);
	}

	// parseValue(val) {
	//     if (val === undefined || val === null)
	//         val = '';
	//
	//     if (!val.replace)
	//         val = val.toString();
	//     return cleanValue(val, this.props.float);
	// }

	parseValue({value, float, precision}) {
		if (value === undefined || value === null)
			value = '';

		if (!value.replace)
			value = value.toString();

		value = cleanValue(value, float);

		return float && precision
			? trimValidLength(value, ',', precision)
			: value;
	}

	parseMask(value) {
		const matrix = this.props.mask;
		const def = matrix.replace(/\D/g, "");
		let i = 0;
		let val = value.replace(/\D/g, "");

		if (def.length >= val.length)
			val = def;

		return matrix.replace(/./g, a => {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
		});
	}

	handleChange(event) {
		let val = event.target.value;

		let viewValue = this.parseValue({
			value: val,
			float: this.props.float,
			precision: this.props.precision
		});

		if (this.props.mask.length) {
			viewValue = this.parseMask(viewValue);
		}

		this.setState({viewValue}, () => {
			this.props.onChange(viewValue, event);
		});
	}

	render() {
		let props = {...this.props};

		if (props.mask.length && props.maxLength) {
			props.maxLength = props.mask.length;
		}

		delete props.onChange;
		delete props.value;
		delete props.float;
		delete props.precision;

		return (
			<input
				{...props}
				ref={input => this.el = input}
				value={this.state.viewValue}
				onChange={::this.handleChange} />
		);
	}
}

NumberInput.propTypes = {
	mask: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	float: PropTypes.bool, //с запятой или без
	precision: PropTypes.number
};

export default NumberInput;