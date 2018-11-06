import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Checkbox = props => <span>
	<input
		type="checkbox"
		checked={props.checked}
		name={props.name}
		id={props.id}
		onChange={props.onChange}
		value={props.value}
		onBlur={props.onBlur}
		onFocus={props.onFocus}
		disabled={props.disabled}
	/>

	<label
		htmlFor={props.id}
		className={classnames('label_check', props.labelClassName, {switcher: props.switcher})}
		onClick={props.onClick}
		data-checked={props.checked}
	>
		<i className="icon" id={props.iconId} />

		{Boolean(props.children) && <span className={props.childrenWrapperClassName}>
			{props.children}
		</span>}
	</label>
</span>;

Checkbox.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	value: PropTypes.string,
	switcher: PropTypes.bool,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	iconId: PropTypes.string,
	children: PropTypes.any,
	childrenWrapperClassName: PropTypes.string,
	labelClassName: PropTypes.string,
	disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
	value: 'on'
};

export default Checkbox;