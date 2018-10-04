import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import {ModalPopup, ContentPopup, ConfirmPopup} from "Popup";

export default class PopupsContainer extends Component {
	_confirmPopupRef = () => this.confirmPopupRef.open();
	_modalPopupRef = () => this.modalPopupRef._open();
	_contentPopupRef = () => this.contentPopupRef.open();

	render() {
		return (
			<ExampleComponent name='Popup'>
				<div>
					<div className="row mb12">
						<div className='col-4'>
							<button className='button small w140px' onClick={this._confirmPopupRef}>ConfirmPopup</button>
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
							<button className='button small w140px' onClick={this._contentPopupRef}>ContentPopup</button>
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
				</div>

			</ExampleComponent>
		);
	}
}