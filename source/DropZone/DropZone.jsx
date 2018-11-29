import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';


class DropZone extends React.Component {
	static propTypes = {
		accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
		acceptClassName: PropTypes.string,
		acceptStyle: PropTypes.object,
		activeClassName: PropTypes.string,
		activeStyle: PropTypes.object,
		children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
		className: PropTypes.string,
		disableClick: PropTypes.bool,
		disablePreview: PropTypes.bool,
		disabled: PropTypes.bool,
		disabledClassName: PropTypes.string,
		disabledStyle: PropTypes.object,
		getDataTransferItems: PropTypes.func,
		inputProps: PropTypes.object,
		maxSize: PropTypes.number,
		minSize: PropTypes.number,
		multiple: PropTypes.bool,
		name: PropTypes.string,
		onClick: PropTypes.func,
		onDragEnter: PropTypes.func,
		onDragLeave: PropTypes.func,
		onDragOver: PropTypes.func,
		onDragStart: PropTypes.func,
		onDrop: PropTypes.func,
		onDropAccepted: PropTypes.func,
		onDropRejected: PropTypes.func,
		onFileDialogCancel: PropTypes.func,
		preventDropOnDocument: PropTypes.bool,
		rejectClassName: PropTypes.string,
		rejectStyle: PropTypes.object,
		style: PropTypes.object,
		getRef: PropTypes.func,
		getHtml: PropTypes.func,
	};
	static defaultProps = {
		acceptClassName: '',
		acceptStyle: {},
		activeClassName: '',
		activeStyle: {},
		children: null,
		className: '',
		disableClick: false,
		disablePreview: false,
		disabled: false,
		disabledClassName: '',
		disabledStyle: {},
		inputProps: {},
		maxSize: Infinity,
		minSize: 0,
		multiple: true,
		name: '',
		onClick: () => null,
		onDragEnter: () => null,
		onDragLeave: () => null,
		onDragOver: () => null,
		onDragStart: () => null,
		onDrop: () => null,
		onDropAccepted: () => null,
		onDropRejected: () => null,
		onFileDialogCancel: () => null,
		preventDropOnDocument: true,
		rejectClassName: '',
		rejectStyle: {},
		style: {},
		getRef: () => null,
	};
	constructor(props) {
		super(props);
		this.state = {
			fileNames: [],
		};
	}
	getFileNames() {
		return this.state.fileNames;
	}
	render() {
		const {getRef, children, onDrop, ...props} = this.props;

		return (
			<Dropzone
				ref={e => {
					if (typeof getRef === 'function') {
						getRef(e);
					}
				}}
				onDrop={(acceptedFiles, rejectedFiles) => {
					this.setState({
						fileNames: acceptedFiles.map(item => item.name),
					});
					if (typeof onDrop === 'function') {
						onDrop(acceptedFiles, rejectedFiles);
					}
				}}
				{...props}
			>
				{
					children
						? children
						: <div className="file_upload_block col full">
							{this.state.fileNames.join(' ')}
							<div className="file_button" onClick={this.onOpenFile}>
								<label className="button light icon-upload small button_file_upload">
									Загрузить
								</label>
							</div>
						</div>
				}
			</Dropzone>
		);
	}
}

export default DropZone;