import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {validateHelper} from "modul-helpers";
import 'jquery-datetimepicker/build/jquery.datetimepicker.full.min';

const datePickerOptions = [
	'value',
	'lang',
	'format',
	'formatDate',
	'formatTime',
	'step',
	'closeOnDateSelect',
	'timepicker',
	'datepicker',
	'weeks',
	'minDate',
	'maxDate',
	'startDate',
	'defaultDate',
	'defaultTime',
	'todayButton',
	'defaultSelect',
	'yearStart',
	'yearEnd',
	'disabledDates',
	'allowDates',
	'allowDateRe',
	'disabledWeekDays',
	'id',
	'inline',
	'scrollMonth',
	'scrollInput',
	'scrollTime',
	'dayOfWeekStart',
	'mask'
];

export default class DatePicker extends Component {
	static displayName = 'DatePicker';

	static propTypes = {
		className: PropTypes.string,
		autoComplete: PropTypes.string,
		name: PropTypes.string,
		onChange: PropTypes.func,
		value: PropTypes.any,
		lang: PropTypes.string,
		format: PropTypes.string.isRequired,
		formatDate: PropTypes.string,
		formatTime: PropTypes.string,
		step: PropTypes.number,
		closeOnDateSelect: PropTypes.func,
		timepicker: PropTypes.bool,
		datepicker: PropTypes.bool,
		weeks: PropTypes.string,
		minDate: PropTypes.any,
		maxDate: PropTypes.any,
		startDate: PropTypes.any,
		defaultDate: PropTypes.any,
		defaultTime: PropTypes.any,
		todayButton: PropTypes.bool,
		defaultSelect: PropTypes.bool,
		yearStart: PropTypes.number,
		yearEnd: PropTypes.number,
		disabledDates: PropTypes.array,
		allowDates: PropTypes.array,
		allowDateRe: PropTypes.string,
		disabledWeekDays: PropTypes.bool,
		id: PropTypes.string,
		inline: PropTypes.bool
	};

	static defaultProps = {
		autoComplete: "on",
		formatDate: 'd.m.Y',
		format: 'd.m.Y',
		yearStart: 2000,
		lang: 'ru',
		scrollMonth: false,
		scrollInput: false,
		scrollTime: false,
		datepicker: true,
		timepicker: false,
		dayOfWeekStart: 1,	// смещения начала недели (с понедельника)
		disabled: false,
		value: null,
		onChange: () => {}, /*no-op*/ /*функция принимающая maskValue, value, event*/
	};

	constructor(props) {
		super(props);
		$.datetimepicker.setLocale('ru');
	}

	componentWillReceiveProps(props) {
		if (props) {
			if (!this.isEqualDates(props.value, this.getValue())) {
				if (this.$input) {
					if (props.value) {
						let valueToSet = props.value;

						// prevent mutation props
						if (valueToSet && valueToSet instanceof Date) {
							valueToSet = new Date(valueToSet);
						}

						this.$input.datetimepicker({value: valueToSet});
					} else {
						this.$input.datetimepicker('reset');
					}
				}
			}
		}
	}

	componentDidMount() {
		const $input = $(this.el);
		$input.datetimepicker('destroy');

		const self = this;
		const options = this.getDatePickerOptions();

		options.onChangeDateTime = dp => {
			if (!self.isEqualDates(dp, self.props.value))
				self.handleChange(dp);
		};

		// prevent mutation props
		if (options.value && options.value instanceof Date) {
			options.value = new Date(options.value);
		}

		this.$input = $input.datetimepicker(options);
	}

	componentDidUpdate(prevProps) {
		const update = datePickerOptions.find(key => {
			return key !== 'value' && prevProps[key] !== this.props[key];
		});
		if (this.$input && update) {
			this.$input.datetimepicker('setOptions', this.getDatePickerOptions());
		}
	}

	setFocus() {
		this.el && this.el.focus();
	}

	getValue() {
		return this.$input ? this.$input.datetimepicker('getValue') : null;
	}

	handleChange(date) {
		this.props.onChange && this.props.onChange(date);
	}


	isEqualDates(a, b) {
		return (a && b && a.getTime() === b.getTime())
			|| a === b
			|| (validateHelper.isEmpty(a) && validateHelper.isEmpty(b));
	}

	getDatePickerOptions() {
		return datePickerOptions
			.reduce((options, key) => {
				if (this.props.hasOwnProperty(key)) {
					options[key] = this.props[key];
				}
				return options;
			}, {});
	}

	excludePickerProps(props) {
		return Object
			.keys(props)
			.reduce((all, key) => {
				if (datePickerOptions.indexOf(key) === -1 || key === 'id') {
					all[key] = props[key];
				}

				return all;
			}, {});
	}

	render() {
		const {className, name = 'no', ...props} = this.props;
		const _className = [
			'datetimepicker',
			className || ''
		].join(' ');

		const notPickerProps = this.excludePickerProps(props);
		delete notPickerProps.onChange;

		return (
			<input
				ref={el => this.el = el}
				type='text'
				name={name}

				{...notPickerProps}

				id={this.props.id}
				className={_className}
			/>
		);
	}
}