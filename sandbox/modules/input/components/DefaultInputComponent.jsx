import React, {Component} from 'react';
import Input from 'Input';


export default class DefaultInputComponent extends Component {
    render() {
        return (
            <div>
                <flex className="row">
                    <div className='col-4'>
                        <Input className='w100' />
                    </div>
                    <div className='col-8'>
                            <pre className='light_block small'>
{`<Input
    className='w100'
/>`}
                            </pre>
                    </div>
                </flex>

                <flex className="row">
                    <div className='col-4'>
                        <Input type='password' className='w100' placeholder='Введите пароль' />
                    </div>
                    <div className='col-8'>
                                <pre className='light_block small'>
{`<Input
    className='w100'
    type='password'
    placeholder='Введите пароль'
/>`}
                                </pre>
                    </div>
                </flex>
            </div>
        );
    }
}