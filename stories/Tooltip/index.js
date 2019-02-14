import React from 'react';
import {storiesOf} from '@storybook/react';
import {Tooltip} from '../../source/Tooltip';
import StoryLayout from '../StoryLayout';
import {select, text} from '@storybook/addon-knobs';

export default storiesOf('Tooltip', module)
	.add(
		'default',

		() =>
			<StoryLayout>
				<Tooltip
					title={text("title", "tooltip content")}

					mdStyle={select(
						'mdStyle',

						[
							undefined,
							'error',
							'white',
						],

						undefined
					)}

					mdSize={select(
						'mdSize',

						[
							undefined,
							'sm',
							'md',
							'lg',
							'xl',
						],

						undefined
					)}
				>
					Hover me
				</Tooltip>
			</StoryLayout>,

		{info: {
			text: `
~~~js
import {Tooltip} from 'modul-ui';
~~~

Документацию по остальным свойствам можно посмотреть на сайте ant.design
[https://ant.design/components/tooltip/](https://ant.design/components/tooltip/)
			`,
		}}
	);