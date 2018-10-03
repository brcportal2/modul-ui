import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import Drop from "Drop";

export default class DropContainer extends Component {
	render() {
		return (
			<ExampleComponent name='Drop'>
				<flex className="row">
					<div className='col-4'>
						<Drop>
							<a className="drop-target">target</a>
							<div className="drop-content">
								<div className="drop-content-inner">
									content
								</div>
							</div>
						</Drop>
					</div>
					<div className='col-8'>
						<pre className='light_block small'>
							{`<Drop>
							<a className="drop-target">123</a>
							<div className="drop-content">
								<div className="drop-content-inner">
									4321
								</div>
							</div>
						</Drop>`}
						</pre>
					</div>
				</flex>
			</ExampleComponent>
		);
	}
}