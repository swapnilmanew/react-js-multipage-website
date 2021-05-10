import React from 'react'

const LeftText = ({ img, heading, text }) => {
    return (
        <div className="row py-5">

            <div className="col-12 col-sm-6 col-md-5 mx-auto my-5">
                <h2 className="fw-bold mt-3">
                    {heading}
                </h2>
                <p className="text-muted">{text}</p>
            </div>
            <div className="col-12 col-sm-6 col-md-5 m-auto">
                <img src={img} alt={img} className="img-fluid" />
            </div>
        </div>
    )
}

export default LeftText
