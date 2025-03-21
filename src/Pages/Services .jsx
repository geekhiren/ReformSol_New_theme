import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getDataAction } from "../ReduxStore/actions/ExelDataActions";
import { connect } from "react-redux";

import span2 from "../assets/img/icons/span2.png"
import service2_icon1 from "../assets/img/icons/service2-icon1.png"
import about2_img1 from "../assets/img/about/about2-img1.png"
import about2_img2 from "../assets/img/about/about2-img2.png"
import about2_img3 from "../assets/img/about/about2-img3.png"

import CommonHero from "../Components/CommonHero.jsx"

function Services({ getDataAction, servicesList }) {

    useEffect(() => {
        getDataAction()
    }, [])


    return (
        <>
            <CommonHero mainTitle={"Our Service"} subTitle={"Service"} />

            <div className="servcie2">
                <div className="container">
                    <div className="row">
                        {servicesList?.services?.map(service =>
                            <div className="col-lg-4 col-md-6">
                                <div className="">
                                    <div className="servcie2-box ">
                                        <div className="icon">
                                            <img src={service2_icon1} alt="" />
                                        </div>
                                        <Link to={`/service/${service?.slug?.toLocaleLowerCase()}`} className="arrow"><i className="fa-solid fa-arrow-right"></i></Link>
                                        <div className="heading2">
                                            <h4><Link to={`/service/${service?.slug?.toLocaleLowerCase()}`}>{service.title}</Link></h4>
                                            <div className="space16"></div>
                                            <p>Strategic IT planning roadmap development Business process analysis and improvement for It solution &
                                                technology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>



            <div className="about2 sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about2-images">
                                <div className="image1">
                                    <img src={about2_img1} alt="" />
                                </div>
                                <div className="image2">
                                    <img src={about2_img2} alt="" />
                                </div>
                                <div className="image3">
                                    <img src={about2_img3} alt="" />
                                </div>
                                <div className="counter-box">
                                    <h3>25</h3>
                                    <p>Years Of <br /> Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="heading2">
                                <span className="span"><img src={span2} alt="" /> Our Service</span>
                                <h2 className="pbmit-title">Empower Your Business with Our Comprehensive IT Solutions</h2>
                                <div className="space16"></div>
                                <p>Welcome to TechXen, your premier destination for cutting-edge technology solutions and IT services. At
                                    TechXen, we are passionate about harnessing the power of technology to empower businesses a like.</p>

                                <div className="space10"></div>

                                <div className="porgress-line-all">
                                    <div className="progress-line">
                                        <h6>IT Consulting</h6>
                                        <div id="progress1" data-init="true"></div>
                                    </div>
                                    <div className="progress-line">
                                        <h6>Cyber Security</h6>
                                        <div id="progress2" data-init="true"></div>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="button">
                                    <a className="theme-btn2" href="#">Learn More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        servicesList: state.ExelDataReducer?.data
    };
};

export default connect(mapStateToProps, { getDataAction })(Services);
