import {addDecorator, configure} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withOptions} from '@storybook/addon-options';

addDecorator(withKnobs);

addDecorator(withOptions({
	addonPanelInRight: true
}));

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);