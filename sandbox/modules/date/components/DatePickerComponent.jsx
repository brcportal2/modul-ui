import React, {Component} from 'react';

import DatePicker from 'DatePicker';


export default class DatePickerComponent extends Component {
    render() {
        return (
            <div>
                <flex className="row">
                    <div className='col-4'>
                        <DatePicker />
                    </div>
                    <div className='col-8'>
                        <pre className='light_block small'>
                            {`<DatePicker />`}
                        </pre>
                    </div>
                </flex>
            </div>
        );
    }
}