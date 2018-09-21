import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import Button from 'Button';


export default class ButtonContainer extends Component {
    render() {
        return (
            <ExampleComponent name='Button'>
                <Button>Test</Button>
            </ExampleComponent>
        );
    }
}