import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import AppComponent from './AppComponent';
import {routes} from '../common/configureApp';


export default class RootComponent extends Component {
	render() {
		return (
			<BrowserRouter>
				<AppComponent
					routes={routes}
				/>
			</BrowserRouter>
		);
	}
}