import React from "react";
import AutoComplete from 'AutoComplete';

export class CompleteSimple extends React.Component {
	state = {
		dataSource: [],
		selected: null,
	};

	handleSearch = value => {
		this.setState({
			dataSource: !value ? [] : [
				value,
				value + value,
				value + value + value,
			],
		});
	};

	onSelect = value => {
		//eslint-disable-next-line
		console.log(value);
		this.setState({
			selected: value
		});
	};

	render() {
		const {dataSource, selected} = this.state;
		return (
			<React.Fragment>
				Selected: {selected ? JSON.stringify(selected) : 'null'}
				<br />
				<AutoComplete
					dataSource={dataSource}
					style={{width: 200}}
					onSelect={this.onSelect}
					onSearch={this.handleSearch}
					placeholder="input here"
				/>
			</React.Fragment>
		);
	}
}