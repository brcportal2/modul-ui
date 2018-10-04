import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import Drop from "Drop";

export default class DropContainer extends Component {
	render() {
		return (
			<div>
				<ExampleComponent name='Drop'>
					<div className="row">
						<div className='col-4'>

							<Drop drop={{position: 'bottom left'}}>
								<a className="drop-target button small icon-plus">target</a>
								<div className="drop-content">
									<div className="drop-content-inner">
										<ul className="drop-menu">
											<li><a>target 1</a></li>
											<li><a>target 2</a></li>
											<li><a>target 3</a></li>
											<li><a>target 4</a></li>
										</ul>
									</div>
								</div>
							</Drop>

						</div>
					</div>
				</ExampleComponent>
			</div>
		);
	}
}