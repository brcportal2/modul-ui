import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';
import Tabs from 'Tabs';

export default class TabsContainer extends Component {
	render() {
		return (
			<ExampleComponent name="Tabs">
				<div className="row">
					<div className="col-4">
						<Tabs>
							<Tabs.TabPane tab="Сегодня" key="Day">
								tab content
							</Tabs.TabPane>
							<Tabs.TabPane tab="Спринт" key="Sprint">
								tab content
							</Tabs.TabPane>
							<Tabs.TabPane tab="Месяц" key="Month">
								tab content
							</Tabs.TabPane>
							<Tabs.TabPane tab="Всё время" key="All">
								tab content
							</Tabs.TabPane>
						</Tabs>
					</div>
				</div>
			</ExampleComponent>
		);
	}
}
