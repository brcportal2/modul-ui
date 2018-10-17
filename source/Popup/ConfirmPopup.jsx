import React from 'react';
import PropTypes from 'prop-types';
import ModalPopup from './ModalPopup';
import q from 'q';
/**
 * Попап для подтверждения операции
 */
class ConfirmPopup extends React.Component {
	static displayName = 'ConfirmPopup';

	open({title, text}={}) {
		this.setState({
			title, text
		});
		this.dialog._open();
		this.defer = q.defer();
		return this.defer.promise;
	}

	close() {
		this.dialog._close();
		this.defer && this.defer.resolve();
	}

	isOpen() {
		return this.dialog && this.dialog.isOpen();
	}

	handleOkClick() {
		this.close();
	}

	handleCancelClick() {
		this.dialog._close();
		this.defer && this.defer.reject({close: false});
	}

	handleCloseClick() {
		this.dialog._close();
		this.defer && this.defer.reject({close: true});
	}

	render() {
		const {
			title: stateTitle,
			text: stateText
		}=this.state || {};
		const {
			parentSelector,
			onAfterOpen,
			shouldCloseOnOverlayClick = false,
			title: propTitle,
			okName = 'Подтвердить',
			cancelName,
			disableClose = false,
			text: propText,
			className = ''
		}=this.props;

		const title = stateTitle || propTitle;
		const text = stateText || propText;

		const classNames = ['popup_layer small', className].join(' ');
		return (
			<ModalPopup parentSelector={parentSelector}
				onAfterOpen={onAfterOpen}
				shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
				onRequestClose={::this.handleCloseClick}
				ref={dialog => this.dialog = dialog}>
				<div className={classNames}>
					{!disableClose && <a className="popup_close icon-close" onClick={::this.handleCloseClick} />}
					<div>
						{title && <h1>{title}</h1>}
						{text && <p>{text}</p>}
						<div className="popup_panel">
							<button className="button" onClick={::this.handleOkClick}>{okName}</button>
							{cancelName && <a className="button_clean" onClick={::this.handleCancelClick}>{cancelName}</a>}
						</div>
					</div>
				</div>
			</ModalPopup>);
	}
}

ConfirmPopup.propTypes = {
	parentSelector: PropTypes.func,
	shouldCloseOnOverlayClick: PropTypes.bool,
	title: PropTypes.string,
	onAfterOpen: PropTypes.func,
	okName: PropTypes.string,
	cancelName: PropTypes.string,
	disableClose: PropTypes.bool,
	text: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
};

export default ConfirmPopup;