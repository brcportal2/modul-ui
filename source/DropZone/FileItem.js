/* eslint-disable react/jsx-tag-spacing */
import React from "react";
import PropTypes from 'prop-types';

export class FileItem extends React.PureComponent {
	static propTypes = {
		onDelete: PropTypes.func,
		fileName: PropTypes.string,
		downloadLink: PropTypes.string,
		title: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
			PropTypes.func,
			PropTypes.string,
		]),
		centering: PropTypes.bool, //центрирование контента файла
	};

	static defaultProps = {
		centering: false,
	};

	_getFileExtension(fileName) {
		if (!fileName)
			return '';

		const arr = fileName.split(".");
		return arr.length <= 1 ? '' : arr[arr.length - 1];
	}

	renderFileName() {
		const {fileName, downloadLink} = this.props;
		if (downloadLink)
			return (<a class="link" href={downloadLink}>{fileName}</a>);
		return fileName;
	}

	render() {
		const {onDelete, fileName, title, centering} = this.props;
		if (!fileName)
			return null;

		const classExtension = this._getFileExtension(fileName);

		return (<div class="uploaded">
			{onDelete && <a class="file_delete" onClick={onDelete}/>}
			<Centering centering={centering}>
				<div class={'file_icon ' + classExtension}/>
				<div class="file_name">
					{this.renderFileName()}
				</div>
				{title && <div class="file_title">{title}</div>}
			</Centering>
		</div>);
	}
}

const Centering = ({centering, children}) => {
	if (centering)
		return (<div class="file_center">{children}</div>);
	return children;
};