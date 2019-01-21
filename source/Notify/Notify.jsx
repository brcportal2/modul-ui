import React from 'react';
import PropTypes from 'prop-types';
import NotifySystem from 'react-notification-system';
import {defaultStyle} from './style';

class Notify extends React.Component {
	static propTypes = {
		notifications: PropTypes.array,
		style: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.object,
		]),
		noAnimation: PropTypes.bool,
		allowHTML: PropTypes.bool,
		onRemove: PropTypes.func,
	};

	componentWillReceiveProps(nextProps) {
		if (!this.notify)
			return;
		
		const {notifications, onRemove} = nextProps;
		const notificationIds = notifications.map(notification => notification.uid);
		const systemNotifications = this.notify.state.notifications || [];

		if (notifications.length > 0) {
			// Get all active notifications from react-notification-system
			// and remove all where uid is not found in the reducer
			systemNotifications.forEach(notification => {
				if (notificationIds.indexOf(notification.uid) < 0) {
					this.notify.removeNotification(notification.uid);
				}
			});

			notifications.forEach(notification => {
				this.notify.addNotification({
					...notification,
					onRemove: () => {
						onRemove(notification.uid);
						notification.onRemove && notification.onRemove();
					}
				});
			});
		}

		if ((this.props.notifications !== notifications) && notifications.length === 0) {
			this.notify.clearNotifications();
		}
	}
	render() {
		const {notifications, ...rest} = this.props;

		return (
			<NotifySystem
				ref={notify => this.notify = notify}
				style={defaultStyle}
				{ ...rest }
			/>
		);
	}
}

export default Notify;
