import React from "react";
import PropTypes from 'prop-types';

export class FileUploadList extends React.PureComponent {
	static propTypes = {
		vertical: PropTypes.bool,
		className: PropTypes.string,
		children: PropTypes.any,
	};

	static defaultProps = {
		vertical: false,
		className: '',
	};

	render() {
		const {children, vertical, className} = this.props;
		return (<div class={`file_upload_list ${vertical ? 'vertical' : ''} ${className || ''}`}>{children}</div>);
	}
}