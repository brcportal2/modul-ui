import React from 'react';
import {Radio} from '../../source/Radio';
import {boolean} from '@storybook/addon-knobs';
import StoryLayout from '../StoryLayout';

export default [
	'Radio',

	() => <StoryLayout>
		<Radio
			id="checkbox-id"
			checked={boolean('checked', false)}
			disabled={boolean('disabled', false)}
			value="radio-value"
		>
			Radio
		</Radio>
	</StoryLayout>,

	{info: {text: `
	import {Radio} from 'modul-ui';
	`}}
];
