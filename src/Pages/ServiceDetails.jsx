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


    console.log(serviceDetails)


    return (
        <>
            <CommonHero mainTitle={"Contact Us"} subTitle={"Contact Us"} />

            {serviceDetails ?
                <>
                    <div class="service-details-area-all ">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-12 details-right-space">
                                    <div class="service-details-post">
                                        <article>
                                            <div class="details-post-area">
                                                {/* <div class="image">
                                                    <img src={blog2_img1} alt="" />
                                                </div> */}
                                                <div class="space30"></div>
                                                <div class="heading2">
                                                    <h2>{serviceDetails.title}</h2>
                                                    <div class="space16"></div>
                                                    <p>{serviceDetails.description}</p>
                                                </div>
                                            </div>
                                        </article>

                                        <div class="space50"></div>

                                        <article>
                                            <div class="details-post-area">
                                                <div class="row">

                                                    {serviceDetails?.subDetails?.length > 0 &&
                                                        serviceDetails?.subDetails.map(detais =>
                                                            <div class={detais.class}>
                                                                <div class="space30"></div>
                                                                <div class="heading2">
                                                                    <h5>{detais.title}</h5>
                                                                    <div class="space16"></div>
                                                                    <p>{detais.description}</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        </article>

                                        <div class="space20"></div>



                                        <div class="space50"></div>

                                        <div class="faq-area-all">
                                            <div class="heading2">
                                                <h5>Frequently Asked Question</h5>
                                            </div>
                                            <div class="space20"></div>

                                            <div class="accordion accordion1 accordion-flush" id="accordionFlushExample">
                                                {serviceDetails?.faq?.length > 0 &&
                                                    serviceDetails?.faq.map((item, index) =>

                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id={`flush-heading${index}`}>
                                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                                                    {item.title}
                                                                </button>
                                                            </h2>
                                                            <div id={`flush-collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                                                                <div class="accordion-body">{item.description}</div>
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



                    <div class="servcie2 pb100">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 m-auto text-center">
                                    <div class="heading2">
                                        <h2>More Services</h2>
                                    </div>
                                </div>
                            </div>

                            <div class="space30"></div>
                            <div class="row">
                                {servicesList?.services?.length > 0 &&
                                    servicesList?.services.map((service, index) => {
                                        return (
                                            index < 2 ?
                                                <div class="col-lg-4 col-md-6" >
                                                    <div class="">
                                                        <div class="servcie2-box">
                                                            <div class="icon">

                                                                <img src={service2_icon1} alt="" />
                                                            </div>
                                                            <a href="#" class="arrow"><i class="fa-solid fa-arrow-right"></i></a>
                                                            <div class="heading2">
                                                                <h4><a href="#">{service.title}</a></h4>
                                                                <div class="space16"></div>
                                                                <p>{service.sorDescription}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null)
                                    })}
                            </div>

                            <div class="space40"></div>
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <Link class="theme-btn2" to="/services">View All Services <span><i class="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="space100"></div>

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
    console.log(state)
    return {
        servicesList: state.ExelDataReducer?.data
    };
};

export default connect(mapStateToProps, { getDataAction })(BlogDetails);