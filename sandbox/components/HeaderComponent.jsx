import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class HeaderComponent extends Component {
	static propTypes = {
		routes: PropTypes.array.isRequired
	};

	render() {
		const {
			routes
		} = this.props;

		return (
			<header>
				<div className="header_logo">
					<Link to="/">ModulUI Components</Link>
				</div>

				<div className="header_menu free_items">
					<div className="header_menu_inner">
						<ul>
							{routes.map((route, index) => route.link && (
								<li key={index}>
									<Link to={route.path}>
										<span>{route.link}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</header>
		);
	}
}