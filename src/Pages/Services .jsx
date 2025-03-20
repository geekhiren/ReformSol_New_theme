import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getServiceExelDataAction } from "../ReduxStore/actions/ExelDataActions";
import { connect } from "react-redux";

import span2 from "../assets/img/icons/span2.png"
import slider_logo1 from "../assets/img/logo/slider-logo1.png"
import slider_logo2 from "../assets/img/logo/slider-logo2.png"
import slider_logo3 from "../assets/img/logo/slider-logo3.png"
import slider_logo4 from "../assets/img/logo/slider-logo4.png"
import slider_logo5 from "../assets/img/logo/slider-logo5.png"
import slider_logo6 from "../assets/img/logo/slider-logo6.png"
import slider_logo7 from "../assets/img/logo/slider-logo7.png"
import service2_icon1 from "../assets/img/icons/service2-icon1.png"
import service2_icon2 from "../assets/img/icons/service2-icon2.png"
import service2_icon3 from "../assets/img/icons/service2-icon3.png"
import service2_icon4 from "../assets/img/icons/service2-icon4.png"
import service2_icon5 from "../assets/img/icons/service2-icon5.png"
import service2_icon6 from "../assets/img/icons/service2-icon6.png"
import service2_icon7 from "../assets/img/icons/service2-icon7.png"
import service2_icon8 from "../assets/img/icons/service2-icon8.png"
import service2_icon9 from "../assets/img/icons/service2-icon9.png"
import about2_img1 from "../assets/img/about/about2-img1.png"
import about2_img2 from "../assets/img/about/about2-img2.png"
import about2_img3 from "../assets/img/about/about2-img3.png"

function Services({ servicesList, getServiceExelDataAction }) {

    useEffect(() => {
        getServiceExelDataAction()
    }, [])

    console.log('servicesList', servicesList)

    return (
        <>
            <div className="common-hero">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-6 m-auto">
                            <div className="main-heading">
                                <h1>Our Service</h1>
                                <div className="space16"></div>
                                <span className="span">
                                    <img src={span2} alt="" />
                                    <Link to={"/"}>Home</Link>
                                    <span className="arrow">
                                        <i className="fa-regular fa-angle-right"></i></span>
                                    Service
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className="hero10-benar">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-wrap marquee-wrap-inner">
                                <div className="marquee-text">

                                    <div className="brand-single-box">
                                        <img src={slider_logo1} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo2} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo3} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo4} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo5} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo6} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo7} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo1} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo2} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo3} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo4} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo5} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo6} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo7} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo4} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo5} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo6} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo7} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo1} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo2} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo3} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo4} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo5} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo6} alt="" />
                                    </div>

                                    <div className="brand-single-box">
                                        <img src={slider_logo7} alt="" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-after"></div>
                </div>
            </section>

            <div className="space100"></div>

            <div className="servcie2">
                <div className="container">
                    <div className="row">
                        {servicesList?.map(service =>
                            <div className="col-lg-4 col-md-6">
                                <div className="">
                                    <div className="servcie2-box ">
                                        <div className="icon">
                                            <img src={service2_icon1} alt="" />
                                        </div>
                                        <Link href={`/service/${service.slug}`} className="arrow"><i className="fa-solid fa-arrow-right"></i></Link>
                                        <div className="heading2">
                                            <h4><Link href={`/service/${service.slug}`}>{service.title}</Link></h4>
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
        servicesList: state.ServiceExelDataReducer?.data?.services,
    };
};

export default connect(
    mapStateToProps,
    {
        getServiceExelDataAction
    }
)(Services);
