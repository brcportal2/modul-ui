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
								tab content 1
							</Tabs.TabPane>
							<Tabs.TabPane tab="Спринт" key="Sprint">
								tab content 2
							</Tabs.TabPane>
							<Tabs.TabPane tab="Месяц" key="Month">
								tab content 3
							</Tabs.TabPane>
							<Tabs.TabPane tab="Всё время" key="All">
								tab content 4
							</Tabs.TabPane>
						</Tabs>
					</div>
				</div>
			</ExampleComponent>
		);
	}
}
