/* eslint-disable react/jsx-tag-spacing, react/self-closing-comp */
import React from "react";
import {FileUpload} from "./FileUpload";
import Dropzone from 'react-dropzone';

const removeStyles = {};

export class FileUploadZone extends React.PureComponent {
	static propTypes = {
		...FileUpload.propTypes
	};

	static defaultProps = {};

	render() {
		const {children, ...props} = this.props;
		const hideInput=true;
		return (<Dropzone
			style={removeStyles}
			{...props}>
			{({...dropProps}) => (
				<FileUpload {...props} {...dropProps} hideInput={hideInput} />)}
		</Dropzone>);
	}
}