import React from 'react'

const Cards = ({ cardText, cardTitle, cardImg }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 m-auto">
            <div className="card border-0 shadow-lg text-center">
                <img src={cardImg} alt={cardImg} height="150px" className="card-img-top my-4" />
                <div className="card-body">
                    <div className="card-title">
                        <h2 className="fw-bold text-center">{cardTitle}</h2>
                        <hr />
                        <p>{cardText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
