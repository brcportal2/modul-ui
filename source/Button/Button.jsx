import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Button extends Component {
	static displayName = 'Button'

	static propTypes = {
		loading: PropTypes.bool,
		disabled: PropTypes.bool,
		className: PropTypes.string,
		icon: PropTypes.string,
		innerRef: PropTypes.any,

		mdStyle: PropTypes.oneOf([
			'second',
			'cancel',
			'dark',
			'white',
			'clean',
			'grey',
			'light',
			'light_primary',
			'light-white',
			'_gd-orange',
		]),

		mdSize: PropTypes.oneOf([
			'xxsmall',
			'xsmall',
			'small',
			'middle',
			'full',
		]),

		type: PropTypes.oneOf([
			'button',
			'reset',
			'submit'
		]),

		wide: PropTypes.bool,
	};

	static defaultProps = {
		type: 'button',
		loading: false,
		disabled: false,
		wide: false,
	};

	render() {
		const {
			className,
			loading,
			disabled,
			children,
			mdStyle,
			mdSize,
			icon,
			innerRef,
			wide,
			...props
		} = this.props;

		return (
			<button
				{...props}
				disabled={loading || disabled}

				className={classnames('button', className, mdStyle, mdSize, {
					loader: loading,
					[`icon-${icon}`]: Boolean(icon),
					wide: wide,
				})}

				ref={innerRef}
			>{children}</button>
		);
	}
}