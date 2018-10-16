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
					undefined,
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

				undefined
			)}

			mdSize={select(
				'mdSize',

				[
					undefined,
					'xxsmall',
					'xsmall',
					'small',
					'middle',
					'full',
					'wide',
				],

				undefined
			)}

			icon={text('icon', undefined)}
		>
			Hello Button
		</Button>
	);