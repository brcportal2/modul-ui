import React from 'react';

function StoryLayout(props) {
	return <div style={{
		'display': 'flex',
		'padding': '30px',
		'alignItems': 'center',
		'justifyContent': 'center',
	}}>
		<div>
			{props.children}
		</div>
	</div>;
}

StoryLayout.displayName = 'StoryLayout';
export default StoryLayout;