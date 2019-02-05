/* eslint-disable no-mixed-spaces-and-tabs,react/prop-types */
import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryLayout from '../StoryLayout';
//import {CompleteSimple} from "./CompleteSimple";
import AutoComplete from 'AutoComplete';
import {array, boolean} from '@storybook/addon-knobs';
import PropTypes from 'prop-types';
//import { Input } from 'antd';

const dataSource = ['Вася', 'Петя', 'Маша', 'Коля'];

const dataSourceObjects = [
	{id: '1', name: 'Card 1', pan: '1231'},
	{id: '2', name: 'Card 2', pan: '1232'},
	{id: '3', name: 'Card 3', pan: '1233'},
	{id: '4', name: 'Card 4', pan: '1234'}];

class CustomInput extends React.Component {
	static propTypes = {
		onChange: PropTypes.func,
		value: PropTypes.string,
	};

	onChange = e => {
		this.props.onChange && this.props.onChange(e);
		//eslint-disable-next-line
		console.log('change', e);
	};

	//onPressEnter
	handleKeyDown = e => {
		this.props.onKeyDown && this.props.onKeyDown(e);
	};

	handleKeyUp = e => {
		this.props.onKeyUp && this.props.onKeyUp(e);
	};

	render() {
		return (
			<div>
				<span>Поиск:</span>
				<input
					type="text"
					onKeyDown={this.handleKeyDown}
					onKeyUp={this.handleKeyUp}
					value={this.props.value}
					onChange={this.onChange}
				/>
			</div>
		);
	}
}

export default storiesOf('AutoComplete', module)
	.add(
		'Basic',
		() => {
			return (<StoryLayout>
				<AutoComplete
					allowClear={boolean('allowClear', true)}
					dataSource={array('dataSource', dataSource)}
					onSelect={value => {
						//eslint-disable-next-line
						alert(value ? JSON.stringify(value) : 'null');
					}}
					onSearch={value => {
						//eslint-disable-next-line
						console.log(value);
					}}
					placeholder="test"
				/>
			</StoryLayout>);
		},

		{
			info: {
				text: `
		import {AutoComplete} from 'modul-ui';
		`
			}
		}
	)
	.add(
		'Customization Input',
		() => {
			return (<StoryLayout>
				<AutoComplete
					allowClear={boolean('allowClear', true)}
					dataSource={array('dataSource', dataSource)}
					onSelect={value => {
						//eslint-disable-next-line
						alert(value ? JSON.stringify(value) : 'null');
					}}
					onSearch={value => {
						//eslint-disable-next-line
						console.log(value);
					}}
				><CustomInput /></AutoComplete>
			</StoryLayout>);
		},

		{
			info: {
				text: `
		import {AutoComplete} from 'modul-ui';
		`
			}
		}
	)
	.add(
		'Customization Options',
		() => {
			const options = dataSourceObjects.map(card => {
				return (<AutoComplete.Option key={card.id} value={card.name}>
					<strong>{card.name}</strong>
					<div style={{color: 'red'}}>***{card.pan}</div>
				</AutoComplete.Option>);
			});

			return (<StoryLayout>
				<AutoComplete
					optionLabelProp="value"
					dataSource={options}
					onSelect={value => {
						//eslint-disable-next-line
						alert(value ? JSON.stringify(value) : 'null');
					}}
					onSearch={value => {
						//eslint-disable-next-line
						console.log(value);
					}}
				/>
			</StoryLayout>);
		},

		{
			info: {
				text: `
		import {AutoComplete} from 'modul-ui';
		`
			}
		}
	);



