import React from 'react';
import {storiesOf} from '@storybook/react';
import {Tabs} from '../../source/Tabs';
import {boolean, select} from '@storybook/addon-knobs';
import StoryLayout from '../StoryLayout';

export default storiesOf('Tabs', module)
	.add(
		'default',

		() =>
			<StoryLayout>
				<Tabs
					size={select(
						'size',

						[
							'large', 'default', 'small'
						]
					)}

					type={select(
						'type',

						[
							'line', 'card', 'editable-card'
						]
					)}

					hideAdd={boolean('hideAdd', false)}
				>
					<Tabs.TabPane tab="Сегодня" key="Day">
						tab content
					</Tabs.TabPane>
					<Tabs.TabPane tab="Спринт" key="Sprint">
						tab content
					</Tabs.TabPane>
				</Tabs>
			</StoryLayout>,

		{info: {text: `
		import {Tabs} from 'modul-ui';
		`}}
	);