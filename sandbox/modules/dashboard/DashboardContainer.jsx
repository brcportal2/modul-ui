import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class DashboardContainer extends Component {
	render() {
		return (
			<div className=''>
                <ul>
                    <li><Link to='/button'>Button</Link></li>
                    <li><Link to='/input'>Input</Link></li>
                    <li><Link to='/format'>Format</Link></li>
                    <li><Link to='/date'>Date</Link></li>
                    <li><Link to='/loader'>Loader</Link></li>
                    <li><Link to='/select'>Select</Link></li>
				</ul>
			</div>
		);
	}
}