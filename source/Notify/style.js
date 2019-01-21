const ItemStyle = {
	borderTop: 'none',
	color: '#fff',
	WebkitBoxShadow: 'none',
	MozBoxShadow: 'none',
	boxShadow: 'none',
};

export const defaultStyle = {
	Containers: {
		DefaultStyle: {
			width: '410px',
			padding: '0px 10px 8px',
		},
	},
	NotificationItem: { // Override the notification item
		DefaultStyle: {
			borderRadius: '2px',
			fontSize: '15px',
			padding: '12px 16px',
			margin: '3px 0 0',
		},
		success: {
			backgroundColor: 'rgba(116,178,32,0.9)',
			...ItemStyle,
		},
		error: {
			backgroundColor: 'rgba(225,50,50,0.9)',
			...ItemStyle,
		},
		warning: {
			backgroundColor: 'rgba(45,70,104,0.9)',
			...ItemStyle,
		},
		info: {
			backgroundColor: 'rgba(255,249,224,0.9)',
			...ItemStyle,
			color: '#2b2b2b',
		},
	},
	Title: {
		DefaultStyle: {
			fontSize: '15px',
			margin: '0 0 3px 0',
		},
		success: {
			color: '#fff',
		},
		error: {
			color: '#fff',
		},
		warning: {
			color: '#fff',
		},
		info: {
			color: '#2b2b2b',
		},
	},
	Action: {
		DefaultStyle: {
			background: '#ffffff',
			borderRadius: 0,
		},
		success: {
			backgroundColor: '#b0ca92',
		},
		error: {
			color: '#ffffff',
		},
		warning: {
			color: '#ffffff',
		},
		info: {
			color: '#ffffff',
		},
	},
	Dismiss: {
		DefaultStyle: {
			display: 'none',
		},
	},
};
