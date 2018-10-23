import React, {Component} from 'react';
import ExampleComponent from '../../components/ExampleComponent';

import ModulTooltip from 'ModulTooltip';

export default class ModulTooltipContainer extends Component {
	render() {
		return (
			<ExampleComponent name='ModulTooltip'>
				<div className="row">
					<div className='col-4'>
						<span data-mtip="tooltip-ref" className="icon-info  vam">
							Tooltip
						</span>
						<ModulTooltip placement="right"
							content="Контент тултипа"
							dataFor="tooltip-ref"
						/>
					</div>
					<div className='col-8'>
						<pre className='light_block small'>
							{`<span data-mtip="tooltip-ref" className="icon-info  vam">
	Tooltip
</span>
<ModulTooltip placement="right"
	content="Контент тултипа"
	dataFor="tooltip-ref"
/>`}
						</pre>
					</div>

					<div className='12'>
						static propTypes = {`{`}<br />
						className: PropTypes.string,<br />
						preventHideOnFocus: PropTypes.bool,<br />
						getContent: PropTypes.func,<br />
						content: PropTypes.string,<br />
						dataFor: PropTypes.string.isRequired,<br />
						delay: PropTypes.number,<br />
						placement: validatePlacementProp,<br />
						trigger: PropTypes.string,<br />
						container: PropTypes.string,<br />
						autoShow: PropTypes.number,<br />
						autoHide: PropTypes.number,<br />
						hideOnClickOutside: PropTypes.bool,<br />
						showInitial: PropTypes.bool,<br />
						offset: PropTypes.object<br />
					};<br />
						<br />
						static defaultProps = {`{`}<br />
						trigger: 'hover',<br />
						placement: 'right',<br />
						html: false,<br />
						className: '',<br />
						preventHideOnFocus: false,<br />
						container: '',<br />
						autoShow: 0,<br />
						autoHide: 0,<br />
						showInitial: false,<br />
						hideOnClickOutside: false,<br />
						offset: {`{`}<br />
						top: 0,<br />
						left: 0<br />
					}
					</div>
				</div>

			</ExampleComponent>
		);
	}
}