class TooltipModel {
	_dataFor = null;
	_options = null;
	_element = null;

	constructor(props) {
		this._parseOptions(props);
		this._createInstance();
		this._showOnInit();
		this._runAutoShow();
	}

	containNode(node) {
		const domNode = this._tooltip;
		return domNode && domNode[0] && domNode[0].contains(node);
	}

	equalDataFor(node) {
		const domNode = this._element;
		return domNode && domNode[0] == node;
	}

	setContent() {
		this._element && this._element.tooltip('setContent');
	}

	updatePlacement() {
		this._element && this._element.tooltip('updatePlacement');
	}

	update(props) {
		const element = this._getTip(props.dataFor);
		if (this._equalInstance(element, this._element)) {
			this.setContent();
			this.updatePlacement();
		}
		else {
			this._parseOptions(props);
			this._createInstance();
			this._runAutoShow();
		}
	}

	destroy() {
		this._element && this._element.tooltip('destroy');
	}

	show() {
		this._element && this._element.tooltip('show');
	}

	hide() {
		this._element && this._element.tooltip('hide');
	}

	_parseOptions(props) {
		const {dataFor, ...other} = props;
		this._options = this._getOptions(other);
		this._dataFor = dataFor;
	}

	_createInstance() {
		const el = this._getTip(this._dataFor);
		el.tooltip(this._options);
		this._element = el;
	}

	_getTip(dataFor) {
		return $(`[data-mtip=${dataFor}]`);
	}

	_runAutoShow() {
		if (!this._options.showInitial && this._options.autoShow && this._options.autoShow > 0) {
			setTimeout(() => {
				this.show();
			}, this._options.autoShow);
		}
	}

	_equalInstance(a, b) {
		if (a && a.length > 0 && b && b.length > 0)
			return a[0] == b[0];
		return false;
	}

	_getOptions(props) {
		const {
			className, getContent, preventHideOnFocus,
			delay, placement, html, trigger, container,
			content, autoShow, autoHide, showInitial, offset
		} = props;

		const template = `<div class="tooltip ${className}" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`;

		return {
			title: getContent || content,
			preventHideOnFocus: preventHideOnFocus,
			delay: delay ? {hide: delay} : 0,
			placement: placement,
			html: html || false,
			trigger: trigger,
			container: container,
			template: template,
			autoShow: autoShow,
			autoHide: autoHide,
			showInitial: showInitial,
			offset: offset,
		};
	}

	_showOnInit() {
		if (this._options.showInitial) {
			this.show();
		}
	}

	get _tooltip() {
		if (!this._element)
			return null;
		const tipData = this._element.data("bs.tooltip");
		return tipData && tipData.$tip;
	}
}

export default TooltipModel;
