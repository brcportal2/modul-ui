import React from 'react';
import PropTypes from 'prop-types';

function StoryLayout(props) {
	return <div style={{
		'display': 'flex',
		'padding': '30px',
		'alignItems': 'center',
		'justifyContent': 'center',
	}}>
		<div style={props.styleInnerBlock}>
			{props.children}
		</div>
	</div>;
}

StoryLayout.defaultProps = {
	styleInnerBlock: {}
};

StoryLayout.propTypes = {
	children: PropTypes.element,
	styleInnerBlock: PropTypes.string
};

StoryLayout.displayName = 'StoryLayout';
export default StoryLayout;