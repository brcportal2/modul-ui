import React from 'react';
import renderer from 'react-test-renderer';

import AmountFormat from './AmountFormat';


describe('AmountFormat', () => {
	test('Default props', () => {
		const component = renderer.create(
			<AmountFormat
				value='123456'
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Default value', () => {
		const component = renderer.create(
			<AmountFormat
				def='not date'
				value='123456'
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('ClassName', () => {
		const component = renderer.create(
			<AmountFormat
				className='test_class'
				def='not date'
				value='123456'
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Big value', () => {
		const component = renderer.create(
			<AmountFormat
				className='test_class'
				def='not date'
				value='1234567890'
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Currency RUR', () => {
		const component = renderer.create(
			<AmountFormat
				className='test_class'
				def='not date'
				value='1234567890'
				currency='RUR'
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Currency USD', () => {
		const component = renderer.create(
			<AmountFormat
				className='test_class'
				def='not date'
				value='1234567890'
				currency='USD'
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Currency EUR', () => {
		const component = renderer.create(
			<AmountFormat
				className='test_class'
				def='not date'
				value='1234567890'
				currency='EUR'
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('First zero', () => {
		const component = renderer.create(
			<AmountFormat
				className='test_class'
				def='not date'
				value='0123'
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Null value', () => {
		const component = renderer.create(
			<AmountFormat
				className='test_class'
				def='not date'
				value={null}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});