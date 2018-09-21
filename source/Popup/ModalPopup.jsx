import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BasePopup from './BasePopup';


export default class ModalPopup extends Component {
    static propTypes = {
        parentSelector: PropTypes.func,
        onAfterOpen: PropTypes.func,
        onRequestClose: PropTypes.func,
        shouldCloseOnOverlayClick: PropTypes.bool,
        children: PropTypes.element
    };

    static defaultProps = {
        parentSelector: () => document.getElementsByTagName('body')[0]
    };

    state = {
        isOpen: false
    };

    _open() {
        this.setState({isOpen: true});
    }

    _close() {
        this.setState({isOpen: false});
    }

    isOpen() {
        return this.state.isOpen;
    }

    render() {
        const {
            onAfterOpen,
            parentSelector,
            shouldCloseOnOverlayClick,
            onRequestClose,
            children
        } = this.props;

        return (
            <BasePopup
                isOpen={this.state.isOpen}
                parentSelector={parentSelector}
                onAfterOpen={onAfterOpen}
                shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                onRequestClose={onRequestClose}>

                {children}
            </BasePopup>
        );
    }
}