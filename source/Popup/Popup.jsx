import React from 'react';
import PropTypes from 'prop-types';
import BaseModal from './BaseModal';

/**
 * Попап для показа кастомного компонента в children
 */
class Popup extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isOpen: !!props.isOpen
		};
	}

	static getDerivedStateFromProps(nextProps) {
		if ('isOpen' in nextProps) {
			return {isOpen: nextProps.isOpen};
		}
		return null;
	}

	/**
	 * открыть попап
	 */
	open = () => {
		this.handleVisibleChange(true);
	};

	/**
	 * закрыть попап
	 */
	close = () => {
		this.handleVisibleChange(false);
	};

	isOpen = () => {
		return this.state.isOpen;
	};


	/**
	 * Вкл/выкл попап
	 * @param isOpen
	 */
	handleVisibleChange = isOpen => {
		//если нет в пропсах то состояние внутреннее
		if (!('isOpen' in this.props)) {
			this.setState({isOpen});
		}
	};

	handleRequestClose = () => {
		this.handleVisibleChange(false);
		const {onRequestClose} = this.props;
		onRequestClose && onRequestClose();
	};

	render() {
		const {
			children,
			appElement = document.getElementsByTagName('body')[0],
			onAfterOpen,
			shouldCloseOnOverlayClick,
			disableClose,
			layerClassName,
		} = this.props;

		const classNames = ['popup_layer popup_action_default', layerClassName || ''].join(' ');

		return (
			<BaseModal
				isOpen={this.state.isOpen}
				appElement={appElement}
				onAfterOpen={onAfterOpen}
				shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
				onRequestClose={this.handleRequestClose}>
				<div className={classNames}>
					{!disableClose && <a className="popup_close icon-close" onClick={::this.handleRequestClose} />}
					{children}
				</div>
			</BaseModal>
		);
	}
}

Popup.propTypes = {
	parentSelector: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	appElement: PropTypes.object,
	onAfterOpen: PropTypes.func,
	onRequestClose: PropTypes.func,
	shouldCloseOnOverlayClick: PropTypes.bool,
	isOpen: PropTypes.bool,
	layerClassName: PropTypes.string,
	disableClose: PropTypes.bool
};

export default Popup;