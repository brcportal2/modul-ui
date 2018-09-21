import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IMask from 'imask';


export default class Input extends Component {
    static propTypes = {
        type: PropTypes.string,
        name: PropTypes.string,
        onChange: PropTypes.func,
        mask: PropTypes.any,
        maskProps: PropTypes.object
    };

    static defaultProps = {
        type: 'text',
        mask: '',
        maskProps: {}
    };

    constructor(props) {
        super(props);

        this.state = {
            viewValue: ''
        };

        this.masked = null;
        if (props.mask) {
            this.masked = IMask.createMask({
                mask: props.mask,
                ...props.maskProps
            });
        }
    }

    componentDidMount() {
        this.setState({
            viewValue: this.parseValue(this.props.value)
        });
    }

    componentWillReceiveProps(props) {
        const newValue = this.parseValue(props.value);

        if (props && newValue !== this.state.viewValue) {
            this.setState({
                viewValue: newValue
            });
        }
    }

    setFocus() {
        this.el && this.el.focus();
    }

    parseValue = (value = '') => {
        if (this.props.mask) {
            return this.masked.resolve(value);
        }

        return value;
    };

    handleChange = event => {
        const val = event.target.value;
        const viewValue = this.parseValue(val);

        this.setState({
            viewValue
        }, () => {
            this.props.onChange && this.props.onChange(viewValue, event);
        });
    };

    render() {
        const {
            ...props
        } = this.props;

        delete props.mask;
        delete props.maskProps;

        return (
            <input
                ref={el => this.el = el}
                {...props}

                value={this.state.viewValue}
                onChange={this.handleChange}
            />
        );
    }
}