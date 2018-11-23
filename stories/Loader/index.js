import React from 'react';
import {storiesOf} from '@storybook/react';
import {Loader} from '../../source/Loader';
import {boolean} from '@storybook/addon-knobs';
import StoryLayout from '../StoryLayout';

export default storiesOf('Loader', module)
	.add(
		'default',
		() =>
			<StoryLayout>
				<Loader loading={boolean('loading', false)}>
					<div style={{
						'height': '100px',
						'display': 'flex',
						'alignItems': 'center',
						'justifyContent': 'center',
						'border': '1px solid black',
						'width': '500px'
					}}>
						content
					</div>
				</Loader>
			</StoryLayout>,

		{info: {text: `
		import {Loader} from 'modul-ui';
		`}}
	);