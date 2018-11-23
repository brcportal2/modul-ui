import React from 'react';
import {Checkbox} from '../../source/Checkbox';
import {boolean} from '@storybook/addon-knobs';
import StoryLayout from '../StoryLayout';

export default [
	'Checkbox',

	() => <StoryLayout>
		<Checkbox
			id="checkbox-id"
			checked={boolean('checked', false)}
			disabled={boolean('disabled', false)}
			switcher={boolean('switcher', false)}
		>
			Checkbox
		</Checkbox>
	</StoryLayout>,

	{info: {text: `
	import {Checkbox} from 'modul-ui';
	`}}
];
