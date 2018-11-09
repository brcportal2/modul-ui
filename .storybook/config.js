import React from 'react';
import PropTable from '@storybook/addon-info/dist/components/PropTable';
import {addDecorator, configure} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withOptions} from '@storybook/addon-options';
import {withInfo} from '@storybook/addon-info';
import StoryLayout from '../stories/StoryLayout';

addDecorator(withKnobs);

addDecorator(withInfo({
	inline: true,
	header: false,
	maxPropStringLength: 10000000,
	propTablesExclude: [StoryLayout]
}));

addDecorator(withOptions({
	addonPanelInRight: true
}));

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);