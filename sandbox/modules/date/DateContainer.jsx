import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import DatePickerComponent from './components/DatePickerComponent';


export default class DateContainer extends Component {
    render() {
        return (
            <div>
                <ExampleComponent name='DatePicker'>
                    <DatePickerComponent />
                </ExampleComponent>
            </div>
        );
    }
}