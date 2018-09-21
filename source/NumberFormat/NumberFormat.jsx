import React, {Component} from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';
import {
    validateHelper,
    numberHelper
} from 'modul-helpers';


accounting.settings = {
    number: {
        decimal: ','
    }
};

export default class NumberFormat extends Component {
    static propTypes = {
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        def: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        def: '',
        className: ''
    };

    getPrecision = value => {
        const valueStr = this.clean(value);
        const pos = valueStr.indexOf(',');

        return pos > -1 ? valueStr.length - pos - 1 : 0;
    };

    clean = val => {
        let value = val;

        if (!value.replace)
            value = value.toString();

        return numberHelper.cleanValue(value);
    };

    render() {
        const {
            value,
            def,
            ...props
        } = this.props;

        if (validateHelper.isEmpty(value))
            return def ? (
                <span
                    {...props}
                >{def}</span>
            ) : null;

        const precision = this.getPrecision(value);
        const formatted = accounting.formatNumber(value, precision, ' ');

        return (
            <span
                {...props}
            >{formatted}</span>
        );
    }
}