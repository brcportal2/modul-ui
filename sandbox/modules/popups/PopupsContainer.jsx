import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import {ConfirmPopup} from "Popup";

export default class PopupsContainer extends Component {
	openConfirmPopup = () => {
		this.confirmPopupRef.open();
	};

	render() {
		return (
			<ExampleComponent name='Popup'>
				<flex className="row">
					<div className='col-4'>
						<button onClick={this.openConfirmPopup}>Open</button>
						<ConfirmPopup
							ref={e => this.confirmPopupRef = e}
							title="Вы действительно хотите отключить сервис?"
							text="При отключении сервиса связка логина и пароля будут удалены"
							cancelName="Отмена" />
					</div>
					<div className='col-8'>
						<pre className='light_block small'>
							{`123`}
						</pre>
					</div>
				</flex>

			</ExampleComponent>
		);
	}
}