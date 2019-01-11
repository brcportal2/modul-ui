/* eslint-disable */
import React from 'react';

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

StoryLayout.displayName = 'StoryLayout';
export default StoryLayout;