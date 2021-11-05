import React from 'react'

function TopButton (props) {
    return (
            <div className="own-page">
                <button className="own-button">{props.img}{props.name}</button>
            </div>
    )
}

export default TopButton