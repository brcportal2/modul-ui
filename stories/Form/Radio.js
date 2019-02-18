import React from 'react';
import {Radio} from '../../source/Radio';
import {boolean, select} from '@storybook/addon-knobs';
import StoryLayout from '../StoryLayout';

export default [
	'Radio',

	() => <StoryLayout>
		<Radio.Group
			defaultValue="radio2"
			size={select(
				'size',
				[
					'large', 'default', 'small',
				]
			)}
			buttonStyle={select(
				'buttonStyle',
				[
					'outline', 'solid',
				]
			)}
		>
			<Radio
				autoFocus={boolean('autoFocus', false)}
				checked={boolean('checked', false)}
				disabled={boolean('disabled', false)}
				defaultChecked={boolean('defaultChecked', false)}
				value="radio1"
			>
				Radio 1
			</Radio>
			<Radio
				value="radio2"
			>
				Radio 2
			</Radio>
		</Radio.Group>
	</StoryLayout>,

	{info: {text: `
	import {Radio} from 'modul-ui';
	`}}
];
