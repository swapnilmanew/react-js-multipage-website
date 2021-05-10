import React from 'react'

const RightText = ({ img, heading, text }) => {
    return (
        <div className="row py-5">
            <div className="col-12 col-sm-6 col-md-5 mx-auto my-5">
                <img src={img} alt={img} className="img-fluid" />
            </div>
            <div className="col-12 col-sm-6 col-md-5 m-auto">
                <h2 className="fw-bold mt-3">
                    {heading}
                </h2>
                <p className="fs-5 mt-4 fw-light text-muted">
                    {text}
                </p>
            </div>

        </div>
    )
}

export default RightText
