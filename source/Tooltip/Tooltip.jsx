import React from 'react';
import PropTypes from 'prop-types';
import TooltipCreator from '../../node_modules/tooltip.js/dist/tooltip';

class Tooltip extends React.Component {
	static defaultProps = {
		placement: 'top',
		arrowSelector: '.tooltip-2-arrow',
		innerSelector: '.tooltip-2-inner',
		container: false,
		delay: 0,
		html: false,
		title: '',
		trigger: 'hover focus',
		closeOnClickOutside: false,
		boundariesElement: '',
		offset: 0,
		popperOptions: {},
		passRef: false,
		template: '<div class="tooltip-2" role="tooltip"><div class="tooltip-2-arrow"></div><div class="tooltip-2-inner"></div></div>'
	};

	elementRef;

	componentDidMount() {
		const options = {
			...this.props
		};
		delete options['passRef'];
		this.tooltip = new TooltipCreator(this.elementRef, options);
	}

	setElementRef = ref => {
		this.elementRef = ref;
	};

	componentWillReceiveProps(newProps) {	 // TODO перемоунтить Tooltip, если поменялись параметры
		if (this.props.title !== newProps.title) {
			this.tooltip.updateTitleContent(newProps.title);
		}
	}

	shouldComponentUpdate() {			// TODO убрать лишний перерендер
		return false;
	}

	show() {
		this.tooltip.show();
	}

	hide() {
		this.tooltip.hide();
	}

	dispose() {
		this.tooltip.dispose();
	}

	toogle() {
		this.tooltip.toogle();
	}

	updateTitleContent(title) {
		this.tooltip.updateTitleContent(title);
	}

	render() {
		const {passRef} = this.props;
		const type =  typeof this.props.children;
		if (type === 'string') {
			return <div ref={this.setElementRef}>{this.props.children}</div>;
		} else if (type === 'object' && !Array.isArray(this.props.children)) {
			const childProps = passRef ? {
				setTooltipRef: this.setElementRef,
			} : {
				ref: this.setElementRef
			};
			return React.cloneElement(this.props.children, childProps);
		} else {
			const childrens = this.props.children.map((item, i) => {
				if ((item.props.className && item.props.className.indexOf('tooltip-target') > -1) ||
					(i+1 === this.props.children.length)) {
					return React.cloneElement(item, {
						ref: this.setElementRef,
						key: i,
					});
				}
				return React.cloneElement(item, {
					key: i,
				});
			});
			return <React.Fragment>{childrens}</React.Fragment>;
		}
	}
}


Tooltip.propTypes = {
	placement: PropTypes.string,
	arrowSelector: PropTypes.string,
	innerSelector: PropTypes.string,
	container: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.bool,
	]),
	delay: PropTypes.number,
	html: PropTypes.bool,
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.func,
	]),
	trigger: PropTypes.string,
	closeOnClickOutside: PropTypes.bool,
	boundariesElement: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	offset: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	popperOptions: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	passRef: PropTypes.bool
};

export default Tooltip;
