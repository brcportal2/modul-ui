import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {dateHelper} from 'modul-helpers';

export default class DateFormat extends Component {
	static propTypes = {
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.instanceOf(Date)
		]),
		format: PropTypes.string,
		def: PropTypes.string,
		className: PropTypes.string,
	};

	static defaultProps = {
		format: 'clever',
		def: '',
		className: ''
	};

	render() {
		const {
			value,
			format,
			def,
			className
		} = this.props;

		let formatDate = value;

		if (value && typeof value === 'string') {
			formatDate = dateHelper.stringToDate(value);

			if (isNaN(formatDate.getTime()))
				formatDate = new Date(value);
		}

		if (formatDate && formatDate instanceof Date)
			return (
				<span className={className}>
					{dateHelper.dateFormat(formatDate, format)}
				</span>
			);

		return (
			<span>
				{def}
			</span>
		);
	}
}