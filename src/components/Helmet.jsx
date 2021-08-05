import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {

    document.title = 'Yolo - ' + props.title

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet
