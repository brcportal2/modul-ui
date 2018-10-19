import React from 'react';
import Button from './Button';

const ButtonWithRef = React.forwardRef((props, ref) => <Button {...props} innerRef={ref} />);

ButtonWithRef.displayName = 'ButtonWithRef';
ButtonWithRef.propTypes = Button.propTypes;

export default ButtonWithRef;