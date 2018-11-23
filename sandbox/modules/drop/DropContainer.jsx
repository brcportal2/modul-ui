/* eslint-disable */
import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';
import Popover, {ClosablePopover} from 'Popover';
import Drop from "Drop";

const QuickActions = () => (<div>
	<ul className="drop-menu">
		<li><a>target 1</a></li>
		<li><a data-close>Закрыть</a></li>
		<li><a>target 3</a></li>
		<li><a>target 4</a></li>
	</ul>
</div>);


export default class DropContainer extends Component {
	constructor(props) {
		super(props);
		// setInterval(() => {
		// 	this.setState({
		// 		...this.state,
		// 		data: new Date(),
		// 	});
		// }, 1000);
	}

	state = {
		data: new Date(),
		visible: false
	};

	render() {
		//const data = ;
		const time = this.state.data.toLocaleTimeString();
		const {visible}=this.state;
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

				<ExampleComponent name='Popover'>
					<Popover trigger="click"
							 content={(<ul className="drop-menu">
								 <li><a data-close>{time}</a></li>
								 <li><a>target 2</a></li>
								 <li><a>target 3</a></li>
								 <li><a>target 4</a></li>
							 </ul>)}>
						<button className="button small icon-plus" type="primary">Click me</button>
					</Popover>
				</ExampleComponent>

				<ExampleComponent name='Popover internal state'>
					<ClosablePopover trigger="click"
									 content={<QuickActions/>}>
						<button className="button small icon-plus" type="primary">Click me</button>
					</ClosablePopover>
				</ExampleComponent>

				<ExampleComponent name='Popover internal state (zone click)'>
					<ClosablePopover trigger="click"
									 content={<ul data-close className="drop-menu">
										 <li><a>{time}</a></li>
										 <li><a>target 2</a></li>
										 <li><a>target 3</a></li>
										 <li><a>target 4</a></li>
									 </ul>}>
						<button className="button small icon-plus" type="primary">Click me</button>
					</ClosablePopover>
				</ExampleComponent>

				<ExampleComponent name='Popover external state'>
					<ClosablePopover trigger="click"
									 onVisibleChange={visible => this.setState({visible})}
									 visible={this.state.visible}
									 content={(<ul className="drop-menu">
										 <li><a data-close>{time}</a></li>
										 <li><a data-close="1">target 2</a></li>
										 <li><a>target 3</a></li>
										 <li><a>target 4</a></li>
										 <QuickActions/>
									 </ul>)}>
						<button className="button small icon-plus" type="primary">Click me</button>
					</ClosablePopover>

					<button className="button small icon-close"
							onClick={() => this.setState({visible:false})}>hide
					</button>

				</ExampleComponent>
			</div>
		);
	}
}