import React from "react";
import Popover from "./Popover";

/**
 *
 * @param PopoverComponent {Popover}
 * @return {WithClosablePopover}
 */
export function withClosablePopover(PopoverComponent) {
	class WithClosablePopover extends React.Component {
		state = {
			visible: false,
		};

		handleVisibleChange = visible => {
			this.setState({
				visible,
			});
		};

		hide = () => {
			this.setState({visible: false});
		};

		bindCloseEvent(content) {
			const self = this;
			return React.Children.map(content, c => {
				if (c && c.props) {
					let props = null;
					let children = c.props.children ? this.bindCloseEvent(c.props.children) : null;
					if (c.props["data-close"]) {
						props = {
							onClick: () => {
								self.hide();
								c.props.onClick && c.props.onClick();
							}
						};
					}
					if (children || props)
						return React.cloneElement(c, props, children);
				}
				return c;
			});
		}

		render() {
			const {content: Content, children, transitionName = null} = this.props;

			//если передают контент то биндим сразу data-close
			const popoverContent = React.isValidElement(Content)
				? this.bindCloseEvent(Content)
				: <Content closePopup={this.hide} />;
				/*eslint-disable*/
			return <PopoverComponent {...this.props} transitionName={transitionName} content={popoverContent}
									 onVisibleChange={this.handleVisibleChange} visible={this.state.visible}
			>{children}</PopoverComponent>;
			/*eslint-enable*/
		}
	}

	return WithClosablePopover;
}

export const ClosablePopover = withClosablePopover(Popover);