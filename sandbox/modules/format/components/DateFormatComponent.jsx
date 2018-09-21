import React, {Component} from 'react';

import DateFormat from 'DateFormat';


export default class DateFormatComponent extends Component {
    render() {
        return (
            <div>
                <flex className="row">
                    <div className='col-4'>
                        <DateFormat
                            value='12.02.2012'
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<DateFormat
    value='12.02.2012'
/>`}
                            </pre>
                    </div>
                </flex>
                <flex className="row">
                    <div className='col-4'>
                        <DateFormat
                            className='button small'
                            def='not date'
                            format='cleverDate'
                            value={new Date(999999999999)}
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<DateFormat
    className='button small'
    def='not date'
    format='cleverDate'
    value={new Date(999999999999)}
/>`}
                            </pre>
                    </div>
                </flex>
            </div>
        );
    }
}