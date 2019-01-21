import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {validateHelper} from 'modul-helpers';
import accounting from 'accounting';


const CurrencySymbol = ({value}) => {
	switch (value) {
		case 'USD':
			return <span className='cur dollar'><span>$</span></span>;
		case 'EUR':
			return <span className='cur euro'><span>€</span></span>;
		case 'CNY':
			return (<span class="cur cny"><span>¥</span></span>);
		default:
			return <span className='cur ruble'><span>р.</span></span>;
	}
};

export default class AmountFormat extends Component {
	static displayName = 'AmountFormat';

	static propTypes = {
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		currency: PropTypes.oneOf([
			'RUR',
			'USD',
			'EUR',
			'CNY',
		]),
		precision: PropTypes.number,
		def: PropTypes.string,
		className: PropTypes.string,
		whiteSpace: PropTypes.string,
	};

	static defaultProps = {
		currency: 'RUR',
		precision: 2,
		def: '',
		className: '',
		whiteSpace: '&nbsp;'
	};

	clear = value => {
		return value.replace
			? value.replace(/[^0-9.,]+/g, '').replace(',', '.')
			: value;
	};

	render() {
		const {
			value,
			def,
			currency,
			precision,
			whiteSpace,
			...props
		} = this.props;

		if (validateHelper.isEmpty(value))
			return def
				? <span {...props}>{def}</span>
				: null;

		const val = parseFloat(this.clear(value));
		const formatted = !isNaN(val)
			? accounting.formatNumber(val, precision, whiteSpace)
			: def;
		return (
			<span {...props}>
				<span dangerouslySetInnerHTML={{__html: formatted}} />&nbsp;
				{
					currency && <CurrencySymbol value={currency} />
				}
			</span>
		);
	}
}