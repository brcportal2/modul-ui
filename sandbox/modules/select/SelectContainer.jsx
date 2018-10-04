import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import Select from 'Select';


export default class SelectContainer extends Component {
	render() {
		return (
			<ExampleComponent name='Loader'>
				<div className="row">
					<div className='col-4'>
						<Select
							className='select w100'
							options={[
								{label: 'Не округлять', value: 'null'},
								{label: '0,01', value: 0.01},
								{label: '0,05', value: 0.05},
								{label: '0,10', value: 0.10}
							]}
						/>
					</div>
					<div className='col-8'>
                        <pre className='light_block small'>
{`<Select
    className='select w100'
    options={[
        {label: 'Не округлять', value: 'null'},
        {label: '0,01', value: 0.01},
        {label: '0,05', value: 0.05},
        {label: '0,10', value: 0.10}
    ]}
/>`}
                        </pre>
					</div>
				</div>

			</ExampleComponent>
		);
	}
}