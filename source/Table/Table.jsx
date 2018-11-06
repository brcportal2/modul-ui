import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Table = props => <table className={classnames('table', props.className)}>
	{props.children}
</table>;

Table.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string
};

export default Table;
