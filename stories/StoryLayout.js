import React from 'react';

export default function StoryLayout(props) {
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