import React, {Component} from 'react';

import AmountFormat from 'AmountFormat';


export default class AmountFormatComponent extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className='col-4'>
                        <AmountFormat
                            value='123456'
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<AmountFormat
    value='123456'
/>`}
                            </pre>
                    </div>
                </div>

                <div className="row">
                    <div className='col-4'>
                        <AmountFormat
                            def='not date'
                            value='123456'
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<AmountFormat
    def='not date'
    value='123456'
/>`}
                            </pre>
                    </div>
                </div>

                <div className="row">
                    <div className='col-4'>
                        <AmountFormat
                            className='test_class'
                            def='not date'
                            value='123456'
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<AmountFormat
    className='test_class'
    def='not date'
    value='123456'
/>`}
                            </pre>
                    </div>
                </div>

                <div className="row">
                    <div className='col-4'>
                        <AmountFormat
                            className='test_class'
                            def='not date'
                            value='1234567890'
                            currency='EUR'
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<AmountFormat
    className='test_class'
    def='not date'
    value='1234567890'
    currency='EUR'
/>`}
                            </pre>
                    </div>
                </div>
            </div>
        );
    }
}