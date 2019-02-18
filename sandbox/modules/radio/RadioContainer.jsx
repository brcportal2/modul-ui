import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';
import Radio from 'Radio';

export default class RadioContainer extends Component {
	render() {
		return (
			<ExampleComponent name="Radio">
				<div className="row">
					<div className="col-4">
						<Radio.Group defaultValue="b">
							<Radio.Button value="a">Уфа</Radio.Button>
							<Radio.Button value="b">Marcané</Radio.Button>
							<Radio.Button value="c">Mayarí</Radio.Button>
						</Radio.Group>
					</div>
				</div>
			</ExampleComponent>
		);
	}
}
