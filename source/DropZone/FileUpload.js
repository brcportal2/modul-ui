/* eslint-disable no-mixed-spaces-and-tabs,react/jsx-tag-spacing */
import React from 'react';
import PropTypes from 'prop-types';
import {FileItem} from "./FileItem";

/**
 * Вторая версия компонента
 */
export class FileUpload extends React.Component {
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
		renderFileItem: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
			PropTypes.func,
		]),
		extensionsMap: PropTypes.object,
		loading: PropTypes.bool,
		loadingText: PropTypes.string,
		downloadLink: PropTypes.string,
		error: PropTypes.string,
		progress: PropTypes.number,
		onDelete: PropTypes.func,
		renderIcon: PropTypes.oneOfType([
			PropTypes.func,
		])
	};

	static defaultProps = {
		buttonClass: 'button light icon-upload small button_file_upload',
		buttonTitle: 'Загрузить',
		columnClass: 'col four',
		loadingText: ''
	};

	render() {
		const {fileName, columnClass, loading, loadingText, error, progress} = this.props;
		const props = {};
		if (loading && loadingText) {
			props['data-loading-text'] = loadingText;
		}

		const css = `${columnClass} ${loading ? 'loading_block' : ''} ${error ? 'error' : ''}`;
		const inProgress = progress !== null
			&& progress !== undefined
			&& progress >= 0
			&& progress <= 100
			&& !fileName;
		const isEmpty = !fileName && !inProgress;
		const hasFile = !!fileName;

		return (<div class={`file_upload_block ${css}`}
					 {...props}>
			{isEmpty && this.renderEmptyBlock()}
			{hasFile && this.renderFileItem()}
			{inProgress && this.renderProgress()}
		</div>);
	}

	renderProgress() {
		const {progress} = this.props;
		if (progress > 0)
			return (<div class="total-progress-box">
				<div class={`total-progress progress-${progress}`}/>
			</div>);
		return null;
	}

	renderEmptyBlock() {
		const {
			title, buttonTitle, buttonClass, children, error, renderIcon
		} = this.props;
		return (<React.Fragment>
			{renderIcon && renderIcon(this.props)}
			{error && <div class="file_text_error">{error}</div>}
			<div class="file_title">{title}</div>
			<div class="file_button">
				<label class={buttonClass}>
					{buttonTitle}
					{!children && <input type="file"/>}
				</label>
			</div>
		</React.Fragment>);
	}

	renderFileItem() {
		const {onDelete, fileName, renderFileItem, title, extensionsMap, downloadLink, columnClass} = this.props;
		if (renderFileItem)
			return renderFileItem(this.props);
		const centering = (columnClass || '').indexOf('col') > -1;
		return <FileItem title={title}
						 centering={centering}
						 extensionsMap={extensionsMap}
						 downloadLink={downloadLink}
						 fileName={fileName}
						 onDelete={onDelete}/>;
	}
}
