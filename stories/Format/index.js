import React from 'react';
import {storiesOf} from '@storybook/react';
import {AmountFormat} from '../../source/AmountFormat';
import {NumberFormat} from '../../source/NumberFormat';
import {select, text, number} from '@storybook/addon-knobs';

export default storiesOf('Format', module)
	.add('AmountFormat', () =>
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
	)

	.add('NumberFormat', () =>
		<NumberFormat
			value={text('value', '123456')}
			def={text('def', 'empty message')}
		/>
	);