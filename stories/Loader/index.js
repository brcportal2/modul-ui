import React from 'react';
import {storiesOf} from '@storybook/react';
import {Loader} from '../../source/Loader';
import {boolean} from '@storybook/addon-knobs';

export default storiesOf('Loader', module)
	.add('default', () =>
		<Loader loading={boolean('loading', false)}>
			<div style={{
				'height': '100px',
				'display': 'flex',
				'alignItems': 'center',
				'justifyContent': 'center',
				'border': '1px solid black'
			}}>
				content
			</div>
		</Loader>
	);