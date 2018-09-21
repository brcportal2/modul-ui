import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';


export default class LayerComponent extends Component {
	static propTypes = {
		routes: PropTypes.array.isRequired
	};

	render() {
		return (
            <section className="main">
                <div className="section_content full_width flex flex-column">

					<Switch>
						{this.props.routes.map((route, index) => (
							<Route
								key={index}
								exact={route.exact}
								path={route.path}
								component={route.component}
							/>
						))}
					</Switch>

				</div>
			</section>
		);
	}
}