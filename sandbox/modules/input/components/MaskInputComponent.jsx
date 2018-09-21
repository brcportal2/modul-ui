import React, {Component} from 'react';
import Input from 'Input';


export default class MaskInputComponent extends Component {
    render() {
        return (
            <div>
                <div className='info_success icon-info'>
                    Для масок ввода используется бибилиотека <a target='_blank' href='https://unmanner.github.io/imaskjs/'>IMask.js</a>. Для применение строкой маски используете свойство <b>mask</b>, для остальных параметров маски можно использовать <b>maskProps</b> и передавать свойства ввиде объекта.
                </div>
                <flex className='row'>
                    <div className='col-4'>
                        <Input
                            className='w100'
                            mask={Number}
                            maskProps={{
                                scale: 2,
                                signed: false,
                                thousandsSeparator: '',
                                normalizeZeros: true,
                                radix: ',',
                                mapToRadix: ['.', ',', '.', ',']
                            }}
                            placeholder='Только число'
                        />
                    </div>
                    <div className='col-8'>
                        <pre className='light_block small'>
{`<Input
    mask={Number}
    maskProps={{
        // Другие параметры
        scale: 2, // цифр после запятой
        signed: false, // запретить отрицательное значение
        thousandsSeparator: '', // любой одиночный символ
        normalizeZeros: true, // добавлять или удалять нули на конце
        radix: ',', // дробный разделитель
        mapToRadix: ['.', ',', '.', ','] // разделители
    }}
    placeholder='Только число'
/>`}
                        </pre>
                    </div>
                </flex>
                <flex className='row'>
                    <div className='col-4'>
                        <Input
                            className='w100'
                            mask={Date}
                            placeholder='Дата'
                        />
                    </div>
                    <div className='col-8'>
                        <pre className='light_block small'>
{`<Input
    mask={Date}
    placeholder='Дата'
/>`}
                        </pre>
                    </div>
                </flex>
                <flex className='row'>
                    <div className='col-4'>
                        <Input
                            className='w100'
                            mask='00-00'
                            placeholder='Серия паспорта'
                        />
                    </div>
                    <div className='col-8'>
                        <pre className='light_block small'>
{`<Input
    className='w100'
    mask='00-00'
    placeholder='Серия паспорта'
/>`}
                        </pre>
                    </div>
                </flex>
                <flex className='row'>
                    <div className='col-4'>
                        <Input
                            className='w100'
                            mask='000000'
                            placeholder='Номер паспорта'
                        />
                    </div>
                    <div className='col-8'>
                        <pre className='light_block small'>
{`<Input
    className='w100'
    mask='000000'
    placeholder='Номер паспорта'
/>`}
                        </pre>
                    </div>
                </flex>
                <flex className='row'>
                    <div className='col-4'>
                        <Input
                            className='w100'
                            mask='000-000'
                            placeholder='Код подразделения'
                        />
                    </div>
                    <div className='col-8'>
                        <pre className='light_block small'>
{`<Input
    className='w100'
    mask='000-000'
    placeholder='Код подразделения'
/>`}
                        </pre>
                    </div>
                </flex>
                <flex className='row'>
                    <div className='col-4'>
                        <Input
                            className='w100'
                            mask='000-000-000 00'
                            placeholder='Введите СНИЛС'
                        />
                    </div>
                    <div className='col-8'>
                        <pre className='light_block small'>
{`<Input
    className='w100'
    mask='000-000-000 00'
    placeholder='Введите СНИЛС'
/>`}
                        </pre>
                    </div>
                </flex>
            </div>
        );
    }
}