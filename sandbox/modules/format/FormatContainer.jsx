import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import AmountFormatComponent from './components/AmountFormatComponent';
import NumberFormatComponent from './components/NumberFormatComponent';
import DateFormatComponent from './components/DateFormatComponent';


export default class FormatContainer extends Component {
    render() {
        return (
            <div>
                <ExampleComponent name='DateFormat'>
                    <DateFormatComponent />
                </ExampleComponent>
                <ExampleComponent name='AmountFormat'>
                    <AmountFormatComponent />
                </ExampleComponent>
                <ExampleComponent name='NumberFormat'>
                    <NumberFormatComponent />
                </ExampleComponent>
            </div>
        );
    }
}