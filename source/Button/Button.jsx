import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Button extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        type: PropTypes.oneOf([
            'button',
            'reset',
            'submit'
        ]),
    };

    static defaultProps = {
        className: 'button',
        type: 'button',
        loading: false,
        disabled: false
    };

    render() {
        const {
            className,
            loading,
            disabled,
            children,
            ...props
        } = this.props;

        const _className = [
            className,
            loading && 'loader' || ''
        ].join(' ');

        return (
            <button
                {...props}
                disabled={loading || disabled}
                className={_className}
            >{children}</button>
        );
    }
}