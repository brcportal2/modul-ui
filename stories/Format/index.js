import React from 'react';
import {storiesOf} from '@storybook/react';
import {AmountFormat} from '../../source/AmountFormat';
import {NumberFormat} from '../../source/NumberFormat';
import {DateFormat} from '../../source/DateFormat';
import {select, text, number, date} from '@storybook/addon-knobs';
import StoryLayout from '../StoryLayout';

const defaultDateValue = new Date('Jan 20 2017');

function myDateKnob(name, defaultValue) {
	const stringTimestamp = date(name, defaultValue);
	return new Date(stringTimestamp);
}

export default storiesOf('Format', module)
	.add('AmountFormat', () =>
		<StoryLayout>
			<AmountFormat
				value={text('value', '123456')}

				currency={select(
					'currency',

					[
						undefined,
						'RUR',
						'USD',
						'EUR'
					],

					undefined
				)}

				precision={number('precision', 2)}
				def={text('def', 'empty message')}
			/>
		</StoryLayout>
	)

	.add('NumberFormat', () =>
		<StoryLayout>
			<NumberFormat
				value={text('value', '123456')}
				def={text('def', 'empty message')}
			/>
		</StoryLayout>
	)

	.add('DateFormat', () =>
		<StoryLayout>
			<DateFormat
				value={myDateKnob('value', defaultDateValue)}
				format={text('format', '')}
				def={text('def', 'empty message')}
			/>
		</StoryLayout>
	);