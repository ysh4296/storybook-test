import React from "react";
import './Input.css';
import PropTypes from 'prop-types';

function Input(props) {
    const { size = 'medium', ...rest } = props;
    return <input className={`input ${size}`} {...rest} />;
}

export default Input;

Input.propTypes = {
    size: PropTypes.string.isRequired,
};

Input.defaultProps = {
    size: 'medium'
};