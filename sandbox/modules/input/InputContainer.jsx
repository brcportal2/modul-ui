import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import DefaultInputComponent from './components/DefaultInputComponent';
import MaskInputComponent from './components/MaskInputComponent';


export default class InputContainer extends Component {
    render() {
        return (
            <div>
                <ExampleComponent name='Обычные поля ввода'>
                    <DefaultInputComponent />
                </ExampleComponent>
                <ExampleComponent name='Маски ввода'>
                    <MaskInputComponent />
                </ExampleComponent>
            </div>
        );
    }
}