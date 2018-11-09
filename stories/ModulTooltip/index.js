import React from 'react';
import {storiesOf} from '@storybook/react';
import {ModulTooltip} from '../../source/ModulTooltip';
import StoryLayout from '../StoryLayout';

export default storiesOf('ModulTooltip', module)
	.add(
		'default',

		() =>
			<StoryLayout>
				<span data-mtip="tooltip-ref">
					Tooltip target
				</span>

				<ModulTooltip
					placement="bottom"
					content="Контент тултипа"
					dataFor="tooltip-ref"
				/>
			</StoryLayout>,

		{info: {text: `
		import {ModulTooltip} from 'modul-ui';
		`}}
	)

	.add(
		'with html',

		() =>
			<StoryLayout>
				<span data-mtip="tooltip-ref">
					Tooltip target
				</span>

				<ModulTooltip
					html
					placement="bottom"
					content="<i>Контент тултипа</i>"
					dataFor="tooltip-ref"
				/>
			</StoryLayout>,

		{info: {text: `
		import {ModulTooltip} from 'modul-ui';
		`}}
	);