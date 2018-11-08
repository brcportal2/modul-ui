import React from 'react';
import {storiesOf} from '@storybook/react';
import {DatePicker} from '../../source/DatePicker';
import StoryLayout from '../StoryLayout';

export default storiesOf('DatePicker', module)
	.add(
		'default',

		() =>
			<StoryLayout>
				<DatePicker />
			</StoryLayout>,

		{info: {text: `
		import {DatePicker} from 'modul-ui';
		`}}
	);