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
						Tab 1
					</Tabs.TabPane>
					<Tabs.TabPane tab="Спринт" key="Sprint">
						Tab 2
					</Tabs.TabPane>
				</Tabs>
			</StoryLayout>,

		{info: {text: `
		import {Tabs} from 'modul-ui';
		`}}
	);