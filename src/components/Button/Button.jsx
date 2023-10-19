import React from "react";
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
    const { variant = 'primary', children, ...rest } = props;
    return <button className={`button ${variant}`} {...rest}>{children}</button >;
}

export default Button;

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    variant: PropTypes.string.isRequired,
    /**
     * How large should the button be?
     */
    children: PropTypes.node.isRequired,
};


Button.defaultProps = {
    variant: 'primary', children: <></>
};