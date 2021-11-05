import React from 'react'

function Button (props) {
    return (
        <div className="button-div">
            <button {...props} className="but">
            Оставить отзыв
            </button>
        </div>
    )
}

export default Button