import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TetherDrop from 'tether-drop';

const checkTargetOrTargetParentHasCloseAttribute = target => {
	if (target && target.hasAttribute('data-close')) {
		return true;
	}

	if (target.parentElement)
		return checkTargetOrTargetParentHasCloseAttribute(target.parentElement);

	return false;
};

class Drop extends React.Component {
	static displayName = 'Drop';

	constructor() {
		super();
		this.container = document.createElement('div');
		this.state = {
			isOpened: false
		};
	}

	static defaultProps = {
		drop: {
			position: 'bottom left',
			openOn: 'click',
			constrainToWindow: true,
			constrainToScrollParent: true,
			classes: 'drop-theme-basic',
			hoverOpenDelay: 0,
			hoverCloseDelay: 50,
			focusDelay: 0,
			blurDelay: 50,
			tetherOptions: {},
		}
	};

	reposition() {
		if (this.drop) {
			this.drop.position();
		}
	}

	componentDidMount() {
		this.initDrop();
		this.props.setInstance && this.props.setInstance(this);
	}

	isOpen() {
		return this.drop && this.drop.isOpened();
	}

	close() {
		return this.drop && this.drop.close();
	}

	open() {
		return this.drop && this.drop.open();
	}

	componentWillUnmount() {
		this.destroyDrop();
		this.props.setInstance && this.props.setInstance(null);
	}

	getDropContent() {
		const {children} = this.props;
		const dropContent = React.Children.map(children, child => {
			if (child.props.className.indexOf('drop-content') > -1) {
				return child;
			}
		})[0];
		if (!dropContent) {
			throw new Error('Child element with class drop-content must be specified');
		}

		return React.cloneElement(dropContent, {onClick: this.dropContentClickHandler});
	}

	dropContentClickHandler = event => {
		if (event && event.target && checkTargetOrTargetParentHasCloseAttribute(event.target))
			this.close();
	}

	initDrop() {
		const outOptions = this.props.drop;
		const opts = Object.assign({
			target: this.dropRef,
		}, outOptions);
		opts.content = () => this.container;
		this.drop = new TetherDrop(opts);
	}

	destroyDrop() {
		if (this.drop) {
			this.drop.close();
			this.drop.destroy();
		}
	}

	setRef(ref) {
		this.dropRef = ref;
	}

	render() {
		let targetLink = null;
		React.Children.forEach(this.props.children, child => {
			if (child.props.className.indexOf('drop-target') > -1) {
				targetLink = child;
			}
		});

		return <React.Fragment>
			{React.cloneElement(targetLink, {ref: ::this.setRef})}
			{ReactDOM.createPortal(this.getDropContent(), this.container)}
		</React.Fragment>;
	}
}

Drop.propTypes = {
	drop: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	onClose: PropTypes.func,
	setInstance: PropTypes.func,
};

export default Drop;
