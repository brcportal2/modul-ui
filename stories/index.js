// import '../../Markup.Kassa/markup/stylus/style_kassa.styl';
import Button from './Button';
import Format from './Format';
import DatePicker from './DatePicker';
import Drop from './Drop';
import Loader from './Loader';
import ModulTooltip from './ModulTooltip';
import Popup from './Popup';
import Form from './Form';
import Table from './Table';
import AutoComplete from './AutoComplete';

export default () => {
	Button();
	Format();
	DatePicker();
	Drop();
	Loader();
	ModulTooltip();
	Popup();
	Form();
	Table();
	AutoComplete();
};