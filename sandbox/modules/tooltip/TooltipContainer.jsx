import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';
import PropTypes from 'prop-types';
import Tooltip from "Tooltip";

class Comp extends Component {
	render() {
		return <div>
			<div>Нет тултипа</div>
			<div  ref={this.props.setTooltipRef}>Тултип тут</div>
		</div>;
	}
	static propTypes = {
		setTooltipRef: PropTypes.node,
	}
}
export default class TooltipContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 1,
		};
	}
	plus = () => {
		this.setState({
			title: this.state.title + 1
		});
	}
	close = () => {
		this.tool.show('333');
	}
	render() {
		return (
			<ExampleComponent name='Drop'>
				<flex className="row">
					<div className='col-4'>
						<br /><br />
						<Tooltip title='Title'>
								333
						</Tooltip>
						<br /><br />
						<Tooltip ref={ref => this.tool = ref} title={this.state.title} trigger='click'>
								Tooltip
						</Tooltip>
						<button onClick={this.plus}>Plus</button>
						<button onClick={this.close}>Close</button>
						<br /><br />

						<Tooltip passRef title='Title'>
							<Comp />
						</Tooltip>
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
