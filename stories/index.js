import '../../Markup.Common/ui-kit/stylus/style_ui_correct.styl';
import Button from './Button';
import Format from './Format';
import DatePicker from './DatePicker';
import Drop from './Drop';
import Loader from './Loader';
import ModulTooltip from './ModulTooltip';
import Popup from './Popup';

export default () => {
	Button();
	Format();
	DatePicker();
	Drop();
	Loader();
	ModulTooltip();
	Popup();
};