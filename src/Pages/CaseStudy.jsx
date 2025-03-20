import React from "react";
import { Link } from "react-router-dom";
function CaseStudy() {

    return (
        <>
            <div className="uni-banner">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h1>Case Study</h1>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Case Study</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="case ptb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-middle">
                        <h6>Case Study</h6>
                        <h3>Our Recent Case Study</h3>
                    </div>
                    <div className="section-header">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="case-card">
                                    <img src="assets/images/case-study/c1.jpg" alt="image" />
                                    <div className="case-study-text">
                                        <Link to="/case-study/case-details"><i className="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="case-card">
                                    <img src="assets/images/case-study/c2.jpg" alt="image" />
                                    <div className="case-study-text">
                                        <Link to="/case-study/case-details"><i className="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Desktop App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="case-card">
                                    <img src="assets/images/case-study/c3.jpg" alt="image" />
                                    <div className="case-study-text">
                                        <Link to="/case-study/case-details"><i className="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="case-card">
                                    <img src="assets/images/case-study/c4.jpg" alt="image" />
                                    <div className="case-study-text">
                                        <Link to="/case-study/case-details"><i className="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="case-card">
                                    <img src="assets/images/case-study/c5.jpg" alt="image" />
                                    <div className="case-study-text">
                                        <Link to="/case-study/case-details"><i className="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">App Structure</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="case-card">
                                    <img src="assets/images/case-study/c6.jpg" alt="image" />
                                    <div className="case-study-text">
                                        <Link to="/case-study/case-details"><i className="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="case-card">
                                    <img src="assets/images/case-study/c7.jpg" alt="image" />
                                    <div className="case-study-text">
                                        <Link to="/case-study/case-details"><i className="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="case-card">
                                    <img src="assets/images/case-study/c8.jpg" alt="image" />
                                    <div className="case-study-text">
                                        <Link to="/case-study/case-details"><i className="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Windows App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="case-card">
                                    <img src="assets/images/case-study/c9.jpg" alt="image" />
                                    <div className="case-study-text">
                                        <Link to="/case-study/case-details"><i className="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CaseStudy;
