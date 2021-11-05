import React from 'react'

function Review ({review}) {
    return (
        <div className="reviews">
            <div className="review">
                <p>{review.name}</p>
                <p>{review.reviewWord}</p>
            </div>
        </div>
    )
}

export default Review