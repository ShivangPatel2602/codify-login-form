import React from "react";

function Plans2() {
    return (
        <section className="pricing py-5">
            <h1>PLANS</h1>
            <div className="container">
                <div className="row">
                    {/* <!-- Free Tier --> */}
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                                <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>5 ideas for Web Dev Project</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>Web Dev course FREE</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>2 sessions with our mentors FREE</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>2 courses of your choice FREE for trial duration</li>
                                </ul>
                                <a href="#" className="btn btn-block btn-primary text-uppercase">Choose Plan</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Basic</h5>
                                <h6 className="card-price text-center">$50<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>10 ideas for Web Dev, ML Project</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>Web Dev, ML course FREE</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>7 sessions with our mentors FREE</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>5 courses of your choice FREE</li>
                                </ul>
                                <a href="#" className="btn btn-block btn-primary text-uppercase">Choose Plan</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                                <h6 className="card-price text-center">$120<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>4 User</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>7 ideas for any CS domain projects</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>All couses - 15% their actual value</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>All sessions with our mentors - at $10</li>
                                    <li className="plans-text"><span className="fa-li"><i className="fas fa-check"></i></span>Interaction with people from large MNCs</li>
                                </ul>
                                <a href="#" className="btn btn-block btn-primary text-uppercase">Choose Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plans2;