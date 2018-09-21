import React from 'react';
import renderer from 'react-test-renderer';

import NumberFormat from './NumberFormat';


describe('NumberFormat', () => {
    test('Default props', () => {
        const component = renderer.create(
            <NumberFormat
                value='123456'
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Default value', () => {
        const component = renderer.create(
            <NumberFormat
                def='not date'
                value='123456'
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('ClassName', () => {
        const component = renderer.create(
            <NumberFormat
                className='test_class'
                def='not date'
                value='123456'
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Big value', () => {
        const component = renderer.create(
            <NumberFormat
                className='test_class'
                def='not date'
                value='1234567890'
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('First zero', () => {
        const component = renderer.create(
            <NumberFormat
                className='test_class'
                def='not date'
                value='0123'
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Null value', () => {
        const component = renderer.create(
            <NumberFormat
                className='test_class'
                def='not date'
                value={null}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});