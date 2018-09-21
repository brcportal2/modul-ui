import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';


describe('Button', () => {
    test('Default props', () => {
        const component = renderer.create(
            <Button>Test</Button>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Loading', () => {
        const component = renderer.create(
            <Button
                loading
            >Test</Button>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Loading && className', () => {
        const component = renderer.create(
            <Button
                className='test_class'
                loading
            >Test</Button>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Disabled', () => {
        const component = renderer.create(
            <Button
                disabled
            >Test</Button>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Type', () => {
        const component_button = renderer.create(
            <Button
                type='button'
            >Test</Button>
        );
        expect(component_button.toJSON()).toMatchSnapshot();

        const component_reset = renderer.create(
            <Button
                type='reset'
            >Test</Button>
        );
        expect(component_reset.toJSON()).toMatchSnapshot();

        const component_submit = renderer.create(
            <Button
                type='submit'
            >Test</Button>
        );
        expect(component_submit.toJSON()).toMatchSnapshot();
    });
});