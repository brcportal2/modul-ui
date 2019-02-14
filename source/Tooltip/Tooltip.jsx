import React from "react";
import PropTypes from "prop-types";
import Tooltip from "antd/lib/tooltip";
import classNames from "classnames";

const TooltipWrapper = ({overlayClassName, mdStyle, mdSize, ...restProps}) => <Tooltip
	overlayClassName={classNames(
		overlayClassName,

		{
			"_error": mdStyle === "error",
			"_white": mdStyle === "white",

			"_sm": mdSize === "sm",
			"_md": mdSize === "md",
			"_lg": mdSize === "lg",
			"_xl": mdSize === "xl",
		}
	)}

	{...restProps}
/>;

TooltipWrapper.propTypes = {
	mdStyle: PropTypes.oneOf(["error", "white"]),
	mdSize: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
	overlayClassName: PropTypes.string,

};

TooltipWrapper.displayName = "Tooltip";

export default TooltipWrapper;