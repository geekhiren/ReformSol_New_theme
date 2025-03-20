import React from "react";
import { Link } from "react-router-dom";
import tes2_icon from "../assets/img/icons/tes2-icon.png"
import span2 from "../assets/img/icons/span2.png"

function Testimonial() {
    const reviews = [{
        content: "I have been thoroughly impressed with the level of service and expertise provided by TechXen. Their team went above and beyond to understand our business needs and deliver a custom software solution. I highly recommend them to anyone looking for top-notch technology solutions.",
        writer: "Jason Behrendorff",
        ratting: 5
    },
    {
        content: "We approached TechXen with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their team's creativity, technical prowess, and dedication to client satisfaction are truly commendable.",
        writer: "Matthew Kuhnemann",
        ratting: 5
    },
    {
        content: "TechXen has been our go-to partner for IT support for several years now, and they have consistently delivered outstanding service. Their team is highly responsive, knowledgeable, reliable. Thanks to their expertise, we've been able to overcome various IT challenges focus growing business.",
        writer: "Scott Boland",
        ratting: 5
    },
    {
        content: "I have been thoroughly impressed with the level of service and expertise provided by TechXen. Their team went above and beyond to understand our business needs and deliver a custom software solution. I highly them to anyone looking for top-notch technology solutions.",
        writer: "Jason Behrendorff",
        ratting: 5
    },
    {
        content: "We approached TechXen with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their team's creativity, technical prowess, and dedication to client satisfaction are truly commendable.",
        writer: "Matthew Kuhnemann",
        ratting: 5
    },
    {
        content: "TechXen has been our go-to partner for IT support for several years now, and they have consistently delivered outstanding service. Their team is highly responsive, knowledgeable, reliable. Thanks to their expertise, we've been able to overcome various IT challenges focus growing business.",
        writer: "Scott Boland",
        ratting: 5
    },]

    return (
        <>
            <div className="testimonial2 pt100 pb40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading2">
                                <span className="span"><img src={span2} alt="" /> Testimonials</span>
                                <h2>See What Our Customer Say’s</h2>
                            </div>
                        </div>
                    </div>

                    <div className="space60"></div>
                    <div className="row">
                        <div className="tes2-slider owl-carousel owl-loaded owl-drag">
                            <div class="owl-stage-outer">
                                <div class="owl-stage" >
                                    {reviews.map((review, index) => {
                                        return <div class="owl-item cloned" style={{ width: "312px" }}>
                                            <div className="single-slider">
                                                <div className="icon">
                                                    <img src={tes2_icon} alt="" />
                                                </div>
                                                <p className="pera">"{review.content}"</p>

                                                <div className="bottom-area">
                                                    <div className="author">
                                                        <a href="#">{review.writer}</a>
                                                    </div>
                                                    {/* <div className="reating">
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star-half"></i></li>
                                            </ul>
                                            <p>(4.5)</p>
                                        </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Testimonial;
