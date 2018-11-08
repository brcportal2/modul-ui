import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import classnames from 'classnames';

const Tbody = props => <tbody className={classnames(props.className)}>
	{props.search && <tr id="search">
		<td colSpan={props.columnsNumber}>
			<input
				type="search"
				value={props.search.value}
				className={props.search.inputClassName}
				placeholder={props.search.placeholder}
				onChange={props.search.onChange}
			/>

			<i className="icon-search" />
		</td>
	</tr>}

	{props.children}

	{props.isEmptyMessageRowShown && <tr className="no_search_results">
		<td colSpan={props.columnsNumber}><div className="p48 a_center">{props.emptyMessage}</div></td>
	</tr>}

	{props.isLoadingRowShown && <tr className="loading_block_row">
		<td colSpan={props.columnsNumber} className="loading_block" />
	</tr>}

	{(props.loadNext && props.listLength < props.listTotalCount) && <Waypoint onEnter={props.loadNext} />}
</tbody>;

Tbody.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	columnsNumber: PropTypes.number.isRequired,
	isLoadingRowShown: PropTypes.bool,
	isEmptyMessageRowShown: PropTypes.bool,
	emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	listLength: PropTypes.number,
	listTotalCount: PropTypes.number,
	loadNext: PropTypes.func,

	search: PropTypes.shape({
		value: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		inputClassName: PropTypes.string
	})
};

Tbody.defaultProps = {
	emptyMessage: 'По запросу ничего не найдено'
};

Tbody.displayName = 'Tbody';

export default Tbody;
