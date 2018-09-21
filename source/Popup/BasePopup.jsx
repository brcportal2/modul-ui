import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';


export default class BasePopup extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        parentSelector: PropTypes.func,
        onRequestClose: PropTypes.func,
        shouldCloseOnOverlayClick: PropTypes.bool,
        onAfterOpen: PropTypes.func,

        children: PropTypes.element,
    };

    static defaultProps = {
        contentLabel: '',
        portalClassName: 'poss',
        className: {base: 'popup_table'},
        overlayClassName: {base: 'popup_overlay'}
    };

    handleOverlayOnClick = event => {};

    render() {
        const {
            ...props
        } = this.props;

        return (
            <ReactModal {...props}>
                <div className='popup_cell'>

                    {children}

                    <div
                        className='popup_backdrop'
                        onClick={this.handleOverlayOnClick}
                    />
                </div>
            </ReactModal>
        );
    }
}