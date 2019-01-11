import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

/**
 * В этот компонент завернут react-modal, здес указаны все css-классы которые должны быть в модале, чтобы все нормально отрендерилось
 * @param children
 * @param isOpen
 * @param parentSelector
 * @param onAfterOpen
 * @param onRequestClose
 * @param shouldCloseOnOverlayClick
 * @returns {XML}
 * @constructor
 */
const BaseModal = ({shouldCloseOnOverlayClick = true, children, isOpen, appElement, onAfterOpen, onRequestClose, portalClassName='poss' , overlayClassName}) => {
	const handleOverlayOnClick = event => {
		if (shouldCloseOnOverlayClick) {
			onRequestClose && onRequestClose(event);
		}
	};

	// из-за portalCreate у нас события клика всплывают с модального окна в компонент где он был замуонтин
	const preventEvents = e => {
		// e.preventDefault();
		e.stopPropagation();
	};

	return (<Modal isOpen={isOpen}
		portalClassName={portalClassName}
		contentLabel=""
		appElement={appElement}
		onRequestClose={onRequestClose}
		shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
		onAfterOpen={onAfterOpen}
		className="popup_table"
		overlayClassName={'popup_overlay ' + (overlayClassName?overlayClassName:'')}>
		<div className="popup_cell" onClick={preventEvents}>
			{children}
			<div className="popup_backdrop" onClick={handleOverlayOnClick} />
		</div>

	</Modal>);
};

BaseModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	appElement: PropTypes.object,
	onAfterOpen: PropTypes.func,
	onRequestClose: PropTypes.func,
	shouldCloseOnOverlayClick: PropTypes.bool,
	portalClassName: PropTypes.string,
	overlayClassName: PropTypes.string,
};

export default BaseModal;