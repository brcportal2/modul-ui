import React, {Component} from 'react';

import NumberFormat from 'NumberFormat';


export default class NumberFormatComponent extends Component {
    render() {
        return (
            <div>
                <flex className="row">
                    <div className='col-4'>
                        <NumberFormat
                            value='123456'
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<NumberFormat
    value='123456'
/>`}
                            </pre>
                    </div>
                </flex>

                <flex className="row">
                    <div className='col-4'>
                        <NumberFormat
                            def='not date'
                            value='123456'
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<NumberFormat
    def='not date'
    value='123456'
/>`}
                            </pre>
                    </div>
                </flex>

                <flex className="row">
                    <div className='col-4'>
                        <NumberFormat
                            className='test_class'
                            def='not date'
                            value='123456'
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<NumberFormat
    className='test_class'
    def='not date'
    value='123456'
/>`}
                            </pre>
                    </div>
                </flex>

                <flex className="row">
                    <div className='col-4'>
                        <NumberFormat
                            className='test_class'
                            def='not date'
                        />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<NumberFormat
    className='test_class'
    def='not date'
/>`}
                            </pre>
                    </div>
                </flex>
            </div>
        );
    }
}