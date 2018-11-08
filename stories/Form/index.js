import {storiesOf} from '@storybook/react';
import Checkbox from './Checkbox';
import Radio from './Radio';

export default storiesOf('Form', module)
	.add(...Checkbox)
	.add(...Radio);