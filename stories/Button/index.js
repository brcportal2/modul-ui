import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '../../source/Button';
import {boolean, select, text} from '@storybook/addon-knobs';
import StoryLayout from '../StoryLayout';

export default storiesOf('Button', module)
	.add(
		'default',

		() =>
			<StoryLayout>
				<Button
					loading={boolean('loading', false)}
					disabled={boolean('disabled', false)}
					wide={boolean('wide', false)}

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
						],

						undefined
					)}

					icon={text('icon', undefined)}
				>
					Hello Button
				</Button>
			</StoryLayout>,

		{info: {text: `
		import {Button} from 'modul-ui';
		`}}
	);