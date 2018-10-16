import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '../../source/Button';
import {boolean, select, text} from '@storybook/addon-knobs';

export default storiesOf('Button', module)
	.add('default', () =>
		<Button
			loading={boolean('loading', false)}
			disabled={boolean('disabled', false)}

			mdStyle={select(
				'mdStyle',

				[
					'',
					'second',
					'cancel',
					'dark',
					'white',
					'clean',
					'grey',
					'light',
					'light_primary',
					'light-white',
					'_gd-orange',
				],

				''
			)}

			mdSize={select(
				'mdSize',

				[
					'',
					'xxsmall',
					'xsmall',
					'small',
					'middle',
					'full',
					'wide',
				],

				''
			)}

			icon={text('icon', '')}
		>
			Hello Button
		</Button>
	);