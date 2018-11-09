import React from 'react';
import {storiesOf} from '@storybook/react';
import {Drop} from '../../source/Drop';
import {ButtonWithRef} from '../../source/Button';
import StoryLayout from '../StoryLayout';

export default storiesOf('Drop', module)
	.add(
		'default',

		() => <StoryLayout>
			<Drop drop={{position: 'bottom left'}}>
				<ButtonWithRef className="drop-target">button</ButtonWithRef>

				<div className="drop-content">
					<div className="drop-content-inner">
						<ul className="drop-menu">
							<li>target 1</li>
							<li>target 2</li>
							<li>target 3</li>
							<li>target 4</li>
						</ul>
					</div>
				</div>
			</Drop>
		</StoryLayout>,

		{info: {
			propTablesExclude: [ButtonWithRef, StoryLayout],

			text: `
			import {DatePicker} from 'modul-ui';
			`
		}}
	);