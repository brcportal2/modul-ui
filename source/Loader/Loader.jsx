import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Loader extends Component {
	static propTypes = {
		children: PropTypes.element,
		loading: PropTypes.bool,
		className: PropTypes.string,
		style: PropTypes.object
	};

	static defaultProps = {
		loading: false,
		className: '',
		style: {}
	};

	render() {
		const {
			children,
			loading,
			className,
			style
		} = this.props;

		if (children) {
			const _className = [
				className,
				loading && 'loading_block' || ''
			].join(' ');

			return (
				<div
					className={_className}
					style={loading ? style : {}}
				>{children}</div>
			);
		}
		else {
			if (loading) {
				return (
					<div
						className='loading_block'
						style={{height: '100%'}}
					/>
				);
			}
			else return null;
		}
	}
}