import React from 'react'

const RightText = ({ img }) => {
    return (
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 m-auto">
                <img src={img} alt={img} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-6 col-md-6 m-auto">
                <h1>
                    Bootsland Crafting Creative And Beautiful Experience
                </h1>
                <p className="fs-3">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>

        </div>
    )
}

export default RightText
