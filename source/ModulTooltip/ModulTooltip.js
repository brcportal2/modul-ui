import React from 'react';
import PropTypes from 'prop-types';
import TooltipModel from './TooltipModel';
import 'ModulTooltip/bootstrap.tooltip';

class ModulTooltip extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		preventHideOnFocus: PropTypes.bool,
		getContent: PropTypes.func,
		content: PropTypes.string,
		dataFor: PropTypes.string.isRequired,
		delay: PropTypes.number,
		placement: validatePlacementProp,
		trigger: PropTypes.string,
		container: PropTypes.string,
		autoShow: PropTypes.number,
		autoHide: PropTypes.number,
		hideOnClickOutside: PropTypes.bool,
		showInitial: PropTypes.bool,
		offset: PropTypes.object
	};

	static defaultProps = {
		trigger: 'hover',
		placement: 'right',
		html: false,
		className: '',
		preventHideOnFocus: false,
		container: '',
		autoShow: 0,
		autoHide: 0,
		showInitial: false,
		hideOnClickOutside: false,
		offset: {
			top: 0,
			left: 0
		}
	};

	constructor(props) {
		super(props);

		this.handlerClickOutside = ::this.actionClickOutside;
	}


	componentDidMount() {
		this.tooltip = new TooltipModel(this.props);
		if (this.props.hideOnClickOutside) {
			document.addEventListener('click', this.handlerClickOutside);
		}
	}

	actionClickOutside(e) {
		// console.log('dom click');
		if (!this.tooltip)
			return;

		if (this.tooltip.equalDataFor(e.target)) //клик по элементу к которому привязан тултип
			return;

		if (this.props.hideOnClickOutside && !this.tooltip.containNode(e.target)) //не клик по тултипу
		{
			this.tooltip.hide();
		}
	}

	componentWillReceiveProps(props) {
		this.tooltip.update(props);
	}

	render() {
		return null;
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handlerClickOutside);
		this.tooltip.destroy();
	}

	show() {
		this.tooltip.show();
	}

	hide() {
		this.tooltip.hide();
	}
}

export default ModulTooltip;

function validatePlacementProp(props, propName) {
	// может быть функцией или одно из значений
	if (!(
		typeof props[propName] === 'function'
		|| ['top', 'bottom', 'right', 'left'].indexOf(props[propName]) !== -1
	)) {
		return new Error(propName + ' - value must be a function or string one of the values "top", "left", "bottom", "right"');
	}
}
