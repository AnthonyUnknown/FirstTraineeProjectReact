import React from 'react'

function Block (props) {
    return (
        <div className="block">
            <div className="block-img">
                {props.src}
            </div>
            <div className="block-text">
                <p>
                    {props.name}
                </p>
                <p>
                    {props.price}
                </p>
            </div>
        </div>
    )
}

export default Block