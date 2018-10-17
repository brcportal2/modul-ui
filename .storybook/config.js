import React from 'react';
import PropTable from '@storybook/addon-info/dist/components/PropTable';
import {addDecorator, configure} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withOptions} from '@storybook/addon-options';
import {withInfo} from '@storybook/addon-info';

const PropTypesTable = ({propDefinitions, ...props}) => {
	propDefinitions.forEach((def) => {
	  if (typeof def.propType === 'string') {
		def.propType = {name: def.propType};
	  }
	});

	return <PropTable propDefinitions={propDefinitions} {...props} />;
};


addDecorator(withKnobs);

addDecorator(withInfo({
	inline: true,
	header: false,
	TableComponent: PropTypesTable // костыль, так как есть баг с отображением propTypes https://github.com/storybooks/storybook/issues/2708
}));

addDecorator(withOptions({
	addonPanelInRight: true
}));

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);