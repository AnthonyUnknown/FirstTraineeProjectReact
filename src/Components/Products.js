import React from 'react'

function Products (props) {
    return (
    <div>
        <hr />
            <div className="products">
                <p>{props.title}</p>
            </div>
        <hr />
    </div>
    )
}

export default Products