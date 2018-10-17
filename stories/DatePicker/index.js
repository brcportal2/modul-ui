import React from 'react';
import {storiesOf} from '@storybook/react';
import {DatePicker} from '../../source/DatePicker';

export default storiesOf('DatePicker', module)
	.add('default', () =>
		<DatePicker />
	);