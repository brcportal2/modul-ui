import React from "react";
import Popover from "./Popover";

const hasCloseAttribute = target => {
	if (!target)
		return false;
	if (target.hasAttribute('data-close'))
		return true;

	if (target.hasAttribute('data-popover-end'))
		return false;

	if (target.parentElement)
		return hasCloseAttribute(target.parentElement);
};

/**
 *
 * @param PopoverComponent {Popover}
 * @return {WithClosablePopover}
 */
export function withClosablePopover(PopoverComponent) {
	class WithClosablePopover extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				visible: !!props.visible
			};
		}

		static getDerivedStateFromProps(nextProps) {
			if ('visible' in nextProps) {
				return {visible: nextProps.visible};
			}
			return null;
		}

		handleVisibleChange = visible => {
			const {onVisibleChange} = this.props;
			//если нет в пропсах то состояние внутреннее
			if (!('visible' in this.props)) {
				this.setState({visible});
			}
			onVisibleChange && onVisibleChange(visible);
		};

		onClickInside = event => {
			if (event && hasCloseAttribute(event.target)) {
				this.handleVisibleChange(false);
			}
		};

		render() {
			/*eslint-disable*/
			const {content, children, transitionName = null} = this.props;

			return <PopoverComponent {...this.props}
									 transitionName={transitionName}
									 content={<div data-popover-end onClick={this.onClickInside}>{content}</div>}
									 onVisibleChange={this.handleVisibleChange}
									 visible={this.state.visible}>
				{children}
			</PopoverComponent>;
			/*eslint-enable*/
		}
	}

	return WithClosablePopover;
}

export const ClosablePopover = withClosablePopover(Popover);