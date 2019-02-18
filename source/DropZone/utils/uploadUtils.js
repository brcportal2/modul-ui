const accepts = (file, acceptedFiles) => {
	if (file && acceptedFiles) {
		const acceptedFilesArray = Array.isArray(acceptedFiles)
			? acceptedFiles
			: acceptedFiles.split(',');
		const fileName = file.name || '';
		const mimeType = file.type || '';
		const baseMimeType = mimeType.replace(/\/.*$/, '');

		return acceptedFilesArray.some(type => {
			const validType = type.trim();
			if (validType.charAt(0) === '.') {
				return fileName.toLowerCase().endsWith(validType.toLowerCase());
			} else if (validType.endsWith('/*')) {
				// This is something like a image/* mime type
				return baseMimeType === validType.replace(/\/.*$/, '');
			}
			return mimeType === validType;
		});
	}
	return true;
};

export function fileAccepted(file, accept) {
	return file.type === 'application/x-moz-file' || accepts(file, accept);
}

const wrongTypeFiles = "(ade|adp|bat|chm|cmd|com|cpl|exe|hta|ins|isp|jse|lib|lnk|mde|msc|msp|mst|pif|scr|sct|shb|sys|vb|vbe|vbs|vxd|wsc|wsf|wsh)";

/**
 * Файлы которые вообще не предпочтительно загружать на сервер
 * @param file
 * @return {boolean}
 */
export function wrongFileType(file) {
	const fileSeparator = file.name.split('.');
	const extension = fileSeparator.length > 1 ? fileSeparator[fileSeparator.length - 1] : '';
	return new RegExp(wrongTypeFiles, 'ig').test(extension);
}

export function fileMatchSize(file, maxSize, minSize) {
	return file.size <= maxSize * 1024 * 1024 && file.size >= minSize * 1024 * 1024;
}

