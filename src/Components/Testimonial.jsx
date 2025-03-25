import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import tes2_icon from "../assets/img/icons/tes2-icon.png"
import span2 from "../assets/img/icons/span2.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const reviews = [{
    content: "I have been thoroughly impressed with the level of service and expertise provided by Reformsol. Their team went above and beyond to understand our business needs and deliver a custom software solution. I highly recommend them to anyone looking for top-notch technology solutions.",
    writer: "Jason Behrendorff",
    ratting: 5
},
{
    content: "We approached Reformsol with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their team's creativity, technical prowess, and dedication to client satisfaction are truly commendable.",
    writer: "Matthew Kuhnemann",
    ratting: 5
},
{
    content: "Reformsol has been our go-to partner for IT support for several years now, and they have consistently delivered outstanding service. Their team is highly responsive, knowledgeable, reliable. Thanks to their expertise, we've been able to overcome various IT challenges focus growing business.",
    writer: "Scott Boland",
    ratting: 5
},
{
    content: "I have been thoroughly impressed with the level of service and expertise provided by Reformsol. Their team went above and beyond to understand our business needs and deliver a custom software solution. I highly them to anyone looking for top-notch technology solutions.",
    writer: "Jason Behrendorff",
    ratting: 5
},
{
    content: "We approached Reformsol with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their team's creativity, technical prowess, and dedication to client satisfaction are truly commendable.",
    writer: "Matthew Kuhnemann",
    ratting: 5
},
{
    content: "Reformsol has been our go-to partner for IT support for several years now, and they have consistently delivered outstanding service. Their team is highly responsive, knowledgeable, reliable. Thanks to their expertise, we've been able to overcome various IT challenges focus growing business.",
    writer: "Scott Boland",
    ratting: 5
},]

export default function Testimonials() {
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
                    <div class="row">
                        <div class="tes2-slider owl-carousel" data-aos="fade-up" data-aos-duration="700">
                            {reviews.map((review, index) =>
                                <div class="single-slider">
                                    <div class="icon">
                                        <img src={tes2_icon} alt="" />
                                    </div>
                                    <p class="pera">"{review.content}"</p>

                                    <div class="bottom-area">
                                        <div class="author">
                                            <a href="#">{review.writer}</a>
                                        </div>
                                        {/* <div class="reating">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star-half"></i></li>
                                            </ul>
                                            <p>(4.5)</p>
                                        </div> */}
                                    </div>
                                </div>
                            )}

                            <div class="single-slider">
                                <div class="icon">
                                    <img src={tes2_icon} alt="" />
                                </div>
                                <p class="pera">"We approached TechXen with a complex IT problem, and they were able to provide an
                                    innovative solution that addressed our needs perfectly. Their team's creativity, technical prowess, and
                                    dedication to client satisfaction are truly commendable.”</p>

                                <div class="bottom-area">
                                    <div class="author">
                                        <a href="#">Matthew Kuhnemann</a>
                                    </div>
                                    <div class="reating">
                                        <ul>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                        </ul>
                                        <p>(4.5)</p>
                                    </div>
                                </div>
                            </div>


                            <div class="single-slider">
                                <div class="icon">
                                    <img src={tes2_icon} alt="" />
                                </div>
                                <p class="pera">“TechXen has been our go-to partner for IT support for several years now, and they have
                                    consistently delivered outstanding service. Their team is highly responsive, knowledgeable, reliable.
                                    Thanks to their expertise, we've been able to overcome various IT challenges focus growing business."</p>

                                <div class="bottom-area">
                                    <div class="author">
                                        <a href="#">Scott Boland</a>
                                    </div>
                                    <div class="reating">
                                        <ul>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star-half"></i></li>
                                        </ul>
                                        <p>(4.5)</p>
                                    </div>
                                </div>
                            </div>

                            <div class="single-slider">
                                <div class="icon">
                                    <img src={tes2_icon} alt="" />
                                </div>
                                <p class="pera">"I have been thoroughly impressed with the level of service and expertise provided by
                                    TechXen. Their team went above and beyond to understand our business needs and deliver a custom software
                                    solution. I highly them to anyone looking for top-notch technology solutions."</p>

                                <div class="bottom-area">
                                    <div class="author">
                                        <a href="#">Jason Behrendorff</a>
                                    </div>
                                    <div class="reating">
                                        <ul>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star-half"></i></li>
                                        </ul>
                                        <p>(4.5)</p>
                                    </div>
                                </div>
                            </div>

                            <div class="single-slider">
                                <div class="icon">
                                    <img src={tes2_icon} alt="" />
                                </div>
                                <p class="pera">"We approached TechXen with a complex IT problem, and they were able to provide an
                                    innovative solution that addressed our needs perfectly. Their team's creativity, technical prowess, and
                                    dedication to client satisfaction are truly commendable.”</p>

                                <div class="bottom-area">
                                    <div class="author">
                                        <a href="#">Matthew Kuhnemann</a>
                                    </div>
                                    <div class="reating">
                                        <ul>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                        </ul>
                                        <p>(4.5)</p>
                                    </div>
                                </div>
                            </div>


                            <div class="single-slider">
                                <div class="icon">
                                    <img src={tes2_icon} alt="" />
                                </div>
                                <p class="pera">“TechXen has been our go-to partner for IT support for several years now, and they have
                                    consistently delivered outstanding service. Their team is highly responsive, knowledgeable, reliable.
                                    Thanks to their expertise, we've been able to overcome various IT challenges focus growing business."</p>

                                <div class="bottom-area">
                                    <div class="author">
                                        <a href="#">Scott Boland</a>
                                    </div>
                                    <div class="reating">
                                        <ul>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star-half"></i></li>
                                        </ul>
                                        <p>(4.5)</p>
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
