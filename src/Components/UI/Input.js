import React from 'react'

function Input (props) {
    return (
        <div className="input-div">
            <input className="input" {...props} />
        </div>
    )
}

export default Input