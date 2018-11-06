import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Button';

const MassOperationsPanel = props => <div className={classnames('mass-operations-panel', props.className)}>
	<div className="item-selected">
		{props.caption}
		<span>{props.numberSelectedItems}</span>
	</div>

	<a className="reset" onClick={props.onResetClick}>Сбросить</a>

	{props.buttons.map(button => <Button
		key={button.key}
		icon={button.icon}
		mdStyle="clean"
		mdSize="small"
		onClick={button.onClick}
		className={button.className}
	>
		{button.title}
	</Button>)}
</div>;

MassOperationsPanel.propTypes = {
	className: PropTypes.string,
	caption: PropTypes.string.isRequired,
	numberSelectedItems: PropTypes.number.isRequired,
	onResetClick: PropTypes.func.isRequired,

	buttons: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.string.isRequired,
		title: PropTypes.string,
		onClick: PropTypes.func.isRequired,
		className: PropTypes.string,
		icon: PropTypes.string,
	})).isRequired
};

export default MassOperationsPanel;
