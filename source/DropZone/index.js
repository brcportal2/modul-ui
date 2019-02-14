import DropZone from './DropZone';
import {FileUpload} from "./FileUpload";
import {FileItem} from "./FileItem";
import {FileUploadList} from "./FileUploadList";
import {FileUploadZone} from "./FileUploadZone";

FileUpload.FileItem = FileItem;

export default DropZone;
export {
	DropZone,
	FileUpload,
	FileUploadZone,
	FileUploadList,
};