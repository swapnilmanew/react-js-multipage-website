import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-fluid bg-theme pt-5 pb-3">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 m-auto">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Subscribe</h5>
                                    <br />
                                    <h6>Subscribe Our Newsletter</h6>
                                    <input type="email" name="" id="" className="form-control" />
                                    <button className="btn btn-primary mt-3">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-2 m-auto text-white">
                            <h4>About</h4>
                            <p>Shop</p>
                            <p>Faq</p>
                            <p>Blogs</p>
                            <p>Contact Us</p>

                        </div>
                        <div className="col-12 col-sm-6 col-md-2 m-auto text-white">
                            <h4>Service</h4>
                            <p>Content Writing</p>
                            <p>Documentation</p>
                            <p>Account</p>
                            <p>Careers</p>

                        </div>
                        <div className="col-12 col-sm-6 col-md-2 text-white">
                            <h4> Legal</h4>
                            <p>Term Of Service</p>
                            <p>Privacy Policy</p>
                            <p>Support</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
