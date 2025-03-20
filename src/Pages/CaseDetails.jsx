import React from "react";
import { Link } from "react-router-dom";
function CaseDetails() {

    return (
        <>
            <div className="uni-banner">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h1>Case Details</h1>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Case Details</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="service-details ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div className="service-details-text-area pr-20">
                                <img src="assets/images/inner-pages/cd1.jpg" alt="image" />
                                <h3>Business Development And Make Easy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                                    laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo. Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit. Voluptatem necessitatibus dolor placeat fuga deleniti
                                    doloremque? Ratione officia quia aliquam possimus.</p>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium sed doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                    quia voluptas sit aspernatur aut odit aut.</p>
                                <h3>Working Process</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                                    laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo.</p>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium sed doloremque laudantium.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                                    laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo. Lorem ipsum dolor sit
                                    amet consectetur adipisicing elit. Voluptatem necessitatibus dolor placeat fuga deleniti
                                    doloremque? Ratione officia quia aliquam possimus.</p>
                                <div className="sd-imgs">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="assets/images/case-study/c6.jpg" alt="image" />
                                        </div>
                                        <div className="col-md-6">
                                            <img src="assets/images/case-study/c5.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <h3>Important Facts</h3>
                                <ul className="details-list">
                                    <li><i className="far fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet.</li>
                                    <li><i className="far fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.</li>
                                    <li><i className="far fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit Facere repellat.</li>
                                    <li><i className="far fa-arrow-alt-circle-right"></i> Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Harum aspernatur numquam!</li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                                    laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="sidebar-content pt-30">
                                <div className="sidebar-card search-box">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Here.." required />
                                            <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-card categories mt-30">
                                    <h3>Categories</h3>
                                    <ul>
                                        <li><a className="active" href="#"><i className="fas fa-angle-right"></i>
                                            Business</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Research</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Development</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Branding</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Marketing</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CaseDetails;
