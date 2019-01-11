import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import {ModalPopup, ContentPopup, ConfirmPopup, Popup} from "Popup";

export default class PopupsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {isOpen: false};
	}

	_confirmPopupRef = () => this.confirmPopupRef.open();
	_modalPopupRef = () => this.modalPopupRef._open();
	_contentPopupRef = () => this.contentPopupRef.open();
	_openPopupWithState = () => this.setState({isOpen: true});
	_openPopupWithoutState = () => this.popupRef.open();


	render() {
		return (
			<ExampleComponent name='Popup'>
				<div>
					<div className="row mb12">
						<div className='col-4'>
							<button className='button small w140px' onClick={this._confirmPopupRef}>ConfirmPopup
							</button>
							<ConfirmPopup
								ref={e => this.confirmPopupRef = e}
								title="Вы действительно хотите отключить сервис?"
								text="При отключении сервиса связка логина и пароля будут удалены"
								cancelName="Отмена"
							/>
						</div>
					</div>

					<div className="row mb12">
						<div className='col-4'>
							<button className='button small w140px' onClick={this._contentPopupRef}>ContentPopup
							</button>
							<ContentPopup ref={e => this.contentPopupRef = e} className='small'>
								<h1>this is "ContentPopup"</h1>
							</ContentPopup>
						</div>
					</div>

					<div className="row mb12">
						<div className='col-4'>
							<button className='button small w140px' onClick={this._modalPopupRef}>ModalPopup</button>
							<ModalPopup ref={e => this.modalPopupRef = e}>
								<h1>this is "ModalPopup"</h1>

							</ModalPopup>
						</div>
					</div>

					<div className="row mb12">
						<div className='col-4'>
							<button className='button small w140px' onClick={this._openPopupWithState}>Popup with state</button>
							<Popup isOpen={this.state.isOpen} onRequestClose={() => this.setState({isOpen: false})}>
								<h1>this is "Popup with external state"</h1>
							</Popup>
						</div>
					</div>

					<div className="row mb12">
						<div className='col-4'>
							<button className='button small w140px' onClick={this._openPopupWithoutState}>Popup without state</button>
							<Popup ref={e => this.popupRef = e} overlayClassName="modal example">
								<h1>this is "Popup without state"</h1>
							</Popup>
						</div>
					</div>
				</div>

			</ExampleComponent>
		);
	}
}