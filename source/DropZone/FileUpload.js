/* eslint-disable no-mixed-spaces-and-tabs,react/jsx-tag-spacing */
import React from 'react';
import PropTypes from 'prop-types';
import {FileItem} from "./FileItem";
import {fileAccepted, fileMatchSize, wrongFileType} from "./utils/uploadUtils";

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
		/**
		 * Allow specific types of files. See https://github.com/okonet/attr-accept for more information.
		 * Keep in mind that mime type determination is not reliable across platforms. CSV files,
		 * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
		 * Windows. In some cases there might not be a mime type set at all.
		 * See: https://github.com/react-dropzone/react-dropzone/issues/276
		 */
		accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
		maxSize: PropTypes.number,
		minSize: PropTypes.number,
		multiple: PropTypes.bool,
		name: PropTypes.string,
		inputProps: PropTypes.object,
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
		maxSize: Infinity,
		minSize: 0,
		multiple: false,
		inputProps: {},
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
		const {acceptedFiles, rejectedFiles} = this.getCheckedFiles(event.target.files);
		onSelectFile && onSelectFile(event, acceptedFiles, rejectedFiles);
	};

	getCheckedFiles = fileList => {
		const {maxSize, minSize, accept, multiple} = this.props;
		const acceptedFiles = [];
		const rejectedFiles = [];

		Array.prototype.slice.call(fileList).forEach(file => {
			if (!fileAccepted(file, accept)) {
				rejectedFiles.push({
					resolution: 'acceptFileTypes',
					file: file
				});
			} else if (wrongFileType(file)) {
				rejectedFiles.push({
					resolution: 'acceptFileTypes',
					file: file
				});
			}
			else if (!fileMatchSize(file, maxSize, minSize)) {
				rejectedFiles.push({
					resolution: 'maxFileSize',
					file: file
				});
			}
			else {
				acceptedFiles.push(file);
			}
		});

		if (!multiple && acceptedFiles.length > 1) {
			rejectedFiles.push(...acceptedFiles.splice(0));
		}
		return {acceptedFiles, rejectedFiles};
	};

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
			title, buttonTitle, accept, buttonClass, error, renderIcon, onLabelClick, renderInput,
			multiple, inputProps, name,
		} = this.props;
		const inputAttributes = {
			accept,
			type: 'file',
			multiple: multiple,
			ref: this.setRefs,
			onChange: this._handleSelectFile,
			autoComplete: 'off'
		};

		if (name && name.length) {
			inputAttributes.name = name;
		}

		return (<React.Fragment>
			{renderIcon && renderIcon(this.props)}
			{error && <div class="file_text_error">{error}</div>}
			<div class="file_title">{title}</div>
			<div class="file_button">
				<label class={buttonClass} onClick={onLabelClick}>
					{buttonTitle}
					{!renderInput && <input {...inputProps} {...inputAttributes}/>}
					{!!renderInput && renderInput({...this.props, getCheckedFiles: this.getCheckedFiles})}
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
