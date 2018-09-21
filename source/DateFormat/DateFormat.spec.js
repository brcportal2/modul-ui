import React from 'react';
import renderer from 'react-test-renderer';

import DateFormat from './DateFormat';


describe('DateFormat', () => {
    test('Default props', () => {
        const component = renderer.create(
            <DateFormat
                value='12.02.2012'
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Default value', () => {
        const component = renderer.create(
            <DateFormat
                def='not date'
                value='12.02.2012'
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('ClassName', () => {
        const component = renderer.create(
            <DateFormat
                className='test_class'
                def='not date'
                value='12.02.2012'
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Null value', () => {
        const component = renderer.create(
            <DateFormat
                className='test_class'
                def='not date'
                value={null}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Masks value', () => {
        const component = renderer.create(
            <DateFormat
                className='test_class'
                def='not date'
                format='cleverDate'
                value='12.02.2012 12:15'
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Date value', () => {
        const component = renderer.create(
            <DateFormat
                className='test_class'
                def='not date'
                format='cleverDate'
                value={new Date(999999999999)}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});