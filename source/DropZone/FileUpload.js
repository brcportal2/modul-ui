/* eslint-disable no-mixed-spaces-and-tabs,react/jsx-tag-spacing */
import React from 'react';
import PropTypes from 'prop-types';
import {FileItem} from "./FileItem";

const wrongTypeFiles = "(ade|adp|bat|chm|cmd|com|cpl|exe|hta|ins|isp|jse|lib|lnk|mde|msc|msp|mst|pif|scr|sct|shb|sys|vb|vbe|vbs|vxd|wsc|wsf|wsh)";

/**
 * Вторая версия компонента
 */
export class FileUpload extends React.PureComponent {
	static propTypes = {
		title: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
			PropTypes.func,
			PropTypes.string,
		]),
		buttonTitle: PropTypes.string,
		buttonClass: PropTypes.string,
		columnClass: PropTypes.string,
		children: PropTypes.object,
		fileName: PropTypes.string,
		loading: PropTypes.bool,
		loadingText: PropTypes.string,
		downloadLink: PropTypes.string,
		error: PropTypes.string,
		progress: PropTypes.number,
		isDragActive: PropTypes.bool,
		isDragAccept: PropTypes.bool,
		isDragReject: PropTypes.bool,
		onSelectFile: PropTypes.func,//выбран файл
		onLabelClick: PropTypes.func,
		onDelete: PropTypes.func, //Удаление файла
		centering: PropTypes.bool, //центрирование контента
		renderInput: PropTypes.func,
		renderIcon: PropTypes.oneOfType([ //Рендер доп. блоков
			PropTypes.func,
		]),
		renderFileItem: PropTypes.oneOfType([ //Рендер выбранного файла
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
			PropTypes.func,
		]),
		renderProgress: PropTypes.oneOfType([ //Рендер прогресса файла
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
			PropTypes.func,
		]),
		dragCssClass: PropTypes.object,
		accept: PropTypes.oneOfType([ //Разрешенные типы файла
			PropTypes.string,
			PropTypes.array,
		]),
		maxSize: PropTypes.number,
	};

	static defaultProps = {
		buttonClass: 'button light icon-upload small button_file_upload',
		buttonTitle: 'Загрузить',
		columnClass: 'col four',
		loadingText: '',
		dragCssClass: {
			active: 'active',
			accept: 'accept',
			reject: 'reject',
		},
		centering: true,
		wrongTypes: null,
		accept: null,
		maxSize: null,
	};

	get inProgress() {
		const {progress, fileName} = this.props;
		return progress !== null
			&& progress !== undefined
			&& progress >= 0
			&& progress <= 100
			&& !fileName;
	}

	render() {
		const {
			fileName, columnClass, loading, loadingText, error,
			isDragActive, isDragAccept, isDragReject
		} = this.props;
		const props = {};
		if (loading && loadingText) {
			props['data-loading-text'] = loadingText;
		}

		const css = `${columnClass} ${loading ? 'loading_block' : ''} ${error ? 'error' : ''}`;
		const dragActive = `${isDragActive ? this.props.dragCssClass.active : ''}`;
		const dragAccept = `${isDragAccept ? this.props.dragCssClass.accept : ''}`;
		const dragReject = `${isDragReject ? this.props.dragCssClass.reject : ''}`;

		const inProgress = this.inProgress;
		const isEmpty = !fileName && !inProgress;
		const hasFile = !!fileName;

		return (<div class={`file_upload_block ${css} ${dragActive} ${dragAccept} ${dragReject}`}
					 {...props}>
			{isEmpty && this.renderEmptyBlock()}
			{hasFile && this.renderFileItem()}
			{inProgress && this.renderProgress()}
		</div>);
	}

	_handleSelectFile = event => {
		const {onSelectFile} = this.props;
		this.checkFiles(event.target.files);
		onSelectFile && onSelectFile(event);
	};

	checkFiles = files => {
		const {maxSize, accept} = this.props;
		if (files && files.length > 0) {
			[].slice.call(files).forEach(file => {
				const extension = this.getFileExtension(file);
				if (new RegExp(wrongTypeFiles, 'ig').test(extension)) {
					throw {message: 'wrongFileTypes'};
				} else if (accept && !(new RegExp(accept, 'ig').test(extension))) {
					throw {message: 'acceptFileTypes'};
				} else if (!!maxSize && file.size > maxSize * 1024 * 1024) {
					throw {message: 'maxFileSize'};
				}
			});
		}
	};

	getFileExtension(file) {
		const fileSeparator = file.name.split('.');
		return fileSeparator.length > 1 ? fileSeparator[fileSeparator.length - 1] : '';
	}

	renderProgress() {
		const {progress, renderProgress} = this.props;
		if (renderProgress)
			return renderProgress(this.props);
		if (this.inProgress)
			return (<div class="total-progress-box">
				<div class={`total-progress progress-${progress}`}/>
			</div>);
		return null;
	}

	renderEmptyBlock() {
		const {
			title, buttonTitle, buttonClass, error, renderIcon, onLabelClick, renderInput,
		} = this.props;
		return (<React.Fragment>
			{renderIcon && renderIcon(this.props)}
			{error && <div class="file_text_error">{error}</div>}
			<div class="file_title">{title}</div>
			<div class="file_button">
				<label class={buttonClass} onClick={onLabelClick}>
					{buttonTitle}
					{!renderInput && <input type="file" onChange={this._handleSelectFile}/>}
					{!!renderInput && renderInput({...this.props, checkFiles: this.checkFiles})}
				</label>
			</div>
		</React.Fragment>);
	}

	renderFileItem() {
		const {onDelete, fileName, renderFileItem, title, downloadLink, centering} = this.props;
		if (renderFileItem)
			return renderFileItem(this.props);
		return <FileItem title={title}
						 centering={centering}
						 downloadLink={downloadLink}
						 fileName={fileName}
						 onDelete={onDelete}/>;
	}
}
