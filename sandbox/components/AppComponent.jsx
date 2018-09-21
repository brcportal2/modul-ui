import React, {Component} from 'react';
import PropTypes from 'prop-types';

import HeaderComponent from './HeaderComponent';
import LayerComponent from './LayerComponent';


export default class AppComponent extends Component {
	static propTypes = {
		routes: PropTypes.array.isRequired
	};

	render() {
		const {
			routes
		} = this.props;

		return (
			<div className="poss">
				<HeaderComponent
					routes={routes}
				/>
				<LayerComponent
					routes={routes}
				/>
			</div>
		);
	}
}