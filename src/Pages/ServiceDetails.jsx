import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import blog2_img1 from "../assets/img/blog/blog2-img1.png"
import service2_icon1 from "../assets/img/icons/service2-icon1.png"

import { getDataAction } from "../ReduxStore/actions/ExelDataActions";

import CommonHero from "../Components/CommonHero.jsx"

function BlogDetails({ getDataAction, servicesList }) {
    let serviceSlug = useParams();

    const [serviceDetails, setServiceDetails] = useState();

    useEffect(() => {
        getDataAction()
    }, [])


    useEffect(() => {
        if (servicesList?.services) {
            setServiceDetails(servicesList?.services.find(service => service.slug.toLocaleLowerCase() === serviceSlug.serviceSlug.toLocaleLowerCase()));
        }
    }, [servicesList])

    return (
        <>
            <CommonHero mainTitle={"Contact Us"} subTitle={"Contact Us"} />

            {serviceDetails ?
                <>
                    <div className="service-details-area-all ">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-12 details-right-space">
                                    <div className="service-details-post">
                                        <article>
                                            <div className="details-post-area">
                                                {/* <div className="image">
                                                    <img src={blog2_img1} alt="" />
                                                </div> */}
                                                <div className="space30"></div>
                                                <div className="heading2">
                                                    <h2>{serviceDetails.title}</h2>
                                                    <div className="space16"></div>
                                                    <p>{serviceDetails.description}</p>
                                                </div>
                                            </div>
                                        </article>

                                        <div className="space50"></div>

                                        <article>
                                            <div className="details-post-area">
                                                <div className="row">

                                                    {serviceDetails?.subDetails?.length > 0 &&
                                                        serviceDetails?.subDetails.map(detais =>
                                                            <div className={detais.className}>
                                                                <div className="space30"></div>
                                                                <div className="heading2">
                                                                    <h5>{detais.title}</h5>
                                                                    <div className="space16"></div>
                                                                    <p>{detais.description}</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        </article>

                                        <div className="space20"></div>



                                        <div className="space50"></div>

                                        <div className="faq-area-all">
                                            <div className="heading2">
                                                <h5>Frequently Asked Question</h5>
                                            </div>
                                            <div className="space20"></div>

                                            <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                                                {serviceDetails?.faq?.length > 0 &&
                                                    serviceDetails?.faq.map((item, index) =>

                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id={`flush-heading${index}`}>
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                                                    {item.title}
                                                                </button>
                                                            </h2>
                                                            <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                                                                <div className="accordion-body">{item.description}</div>
                                                            </div>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >



                    <div className="servcie2 pb100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto text-center">
                                    <div className="heading2">
                                        <h2>More Services</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="space30"></div>
                            <div className="row">
                                {servicesList?.services?.length > 0 &&
                                    servicesList?.services.map((service, index) => {
                                        return (
                                            index < 2 ?
                                                <div className="col-lg-4 col-md-6" >
                                                    <div className="">
                                                        <div className="servcie2-box">
                                                            <div className="icon">

                                                                <img src={service2_icon1} alt="" />
                                                            </div>
                                                            <a href="#" className="arrow"><i className="fa-solid fa-arrow-right"></i></a>
                                                            <div className="heading2">
                                                                <h4><a href="#">{service.title}</a></h4>
                                                                <div className="space16"></div>
                                                                <p>{service.sorDescription}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null)
                                    })}
                            </div>

                            <div className="space40"></div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <Link className="theme-btn2" to="/services">View All Services <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="space100"></div>

                </>
                :
                <div className="loader-contaner">
                    <div className="loader"></div>
                </div>
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        servicesList: state.ExelDataReducer?.data
    };
};

export default connect(mapStateToProps, { getDataAction })(BlogDetails);