/* eslint-disable react/jsx-tag-spacing */
import React from "react";
import PropTypes from 'prop-types';

export class FileItem extends React.PureComponent {
	static propTypes = {
		onDelete: PropTypes.func,
		fileName: PropTypes.string,
		downloadLink: PropTypes.string,
		extensionsMap: PropTypes.object,
		title: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
			PropTypes.func,
			PropTypes.string,
		]),
		centering: PropTypes.bool, //центрирование контента файла
	};

	static defaultProps = {
		extensionsMap: {
			'rar': 'rar', //todo добавить всю сетку
		},
		centering: false,
	};

	_getExtensionClass(fileName) {
		const ext = this._getFileExtension(fileName);
		return this.props.extensionsMap[ext];
	}

	_getFileExtension(fileName) {
		if (!fileName)
			return null;

		const a = fileName.split(".");
		if (a.length === 1 || (a[0] === "" && a.length === 2)) {
			return "";
		}
		return a.pop().toLowerCase();    // feel free to tack .toLowerCase() here if you want
	}

	renderFileName() {
		const {fileName, downloadLink} = this.props;
		if (downloadLink)
			return (<a class="link">{fileName}</a>);
		return fileName;
	}

	render() {
		const {onDelete, fileName, title, centering} = this.props;
		if (!fileName)
			return null;

		const classExtension = this._getExtensionClass(fileName);

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