import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '../../source/Button';
import {boolean} from '@storybook/addon-knobs';

export default storiesOf('Button', module)
	.add('default example', () =>
		<Button
			loading={boolean('loading', false)}
			disabled={boolean('disabled', false)}
		>
			Hello Button
		</Button>
	);