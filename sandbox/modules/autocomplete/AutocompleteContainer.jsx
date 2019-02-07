import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';
import {CompleteSimple} from "./CompleteSimple";


export default class AutocompleteContainer extends Component {
	render() {
		return (
			<ExampleComponent name='Autocomplete'>
				<div className="row">
					<div className='col-4'>
						<CompleteSimple />
					</div>
				</div>

			</ExampleComponent>
		);
	}
}



