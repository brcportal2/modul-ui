import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'Button';

import ModalPopup from './ModalPopup';


export default class ContentPopup extends Component {
    static propTypes = {
        shouldCloseOnOverlayClick: PropTypes.bool,
        disableClose: PropTypes.bool,
        closeName: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.element
    };

    static defaultProps = {
        disableClose: false,
        closeName: null,
        className: ''
    };

    open() {
        this.dialog._open();
        this.defer = q.defer();
        return this.defer.promise;
    }

    close() {
        this.dialog._close();
        this.defer && this.defer.resolve();
    }

    handleCloseMethod() {
        this.dialog._close();
        this.defer && this.defer.reject();
    }

    handleCloseClick = () => {
        this.close();
    };

    render() {
        const {
            onAfterOpen,
            shouldCloseOnOverlayClick,

            disableClose,
            closeName,
            className,
            children
        } = this.props;

        const _className = [
            'popup_layer',
            'popup_action_default',
            className
        ].join(' ');

        return (
            <ModalPopup
                ref={el => this.dialog = el}
                onAfterOpen={onAfterOpen}
                shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
                onRequestClose={this.handleCloseClick}>

                <div className={_className}>
                    {disableClose &&
                    <a
                        className='popup_close icon-close'
                        onClick={this.handleCloseClick}
                    />}
                    <div>
                        {children}
                        {closeName &&
                        <div>
                            <Button
                                onClick={this.handleCloseClick}
                                className='button small light'
                            >{closeName}</Button>
                        </div>}
                    </div>
                </div>

            </ModalPopup>
        );
    }
}