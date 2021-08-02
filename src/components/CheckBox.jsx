import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = props => {

    const inputRef = React.useRef(null)

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }

    return (
        <label className="custom-checkbox">
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked}/>
            <span className="custom-checkbox__checkmark">
                <i className="bx bx-check"></i>
            </span>
            {props.label}
        </label>
    )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default CheckBox
