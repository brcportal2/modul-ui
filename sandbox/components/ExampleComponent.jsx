import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class ExampleComponent extends Component {
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        const {
            name,
            children
        } = this.props;

        return (
            <div style={{padding: '20px', background: '#fff', marginBottom: '15px'}}>
                <div className='legend'>
                    <span>{name}</span>
                </div>
                {children}
            </div>
        );
    }
}