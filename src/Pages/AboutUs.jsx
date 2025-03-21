import React from "react";
import { Link } from "react-router-dom";
import span2 from "../assets/img/icons/span2.png"
import about2_img1 from "../assets/img/about/about2-img1.png"
import about2_img2 from "../assets/img/about/about2-img2.png"
import about2_img3 from "../assets/img/about/about2-img3.png"
import solution_img1 from "../assets/img/others/solution-img1.png"
import solution_img2 from "../assets/img/others/solution-img2.png"
import solution_img3 from "../assets/img/others/solution-img3.png"
import visiton_img1 from "../assets/img/about/visiton-img1.png"
import visiton_img2 from "../assets/img/about/visiton-img2.png"
import visiton_img3 from "../assets/img/about/visiton-img3.png"
import solution_iocn1 from "../assets/img/icons/solution-iocn1.png"
import solution_iocn2 from "../assets/img/icons/solution-iocn2.png"
import about_tab_img from "../assets/img/about/about-tab-img.png"
import team2_img1 from "../assets/img/team/team2-img1.png"
import team2_img2 from "../assets/img/team/team2-img2.png"
import team2_img3 from "../assets/img/team/team2-img3.png"
import team2_img4 from "../assets/img/team/team2-img4.png"
import Testimonial from "../Components/Testimonial.jsx"

import CommonHero from "../Components/CommonHero.jsx"

function AboutUs() {
    return (
        <>
            <CommonHero mainTitle={"About Us"} subTitle={"About"} />

            <div className="about2">
                <div className="container">
                    <div className="row align-items-center">
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
                                <h2>Empower Your Business With Our Comprehensive IT Solutions</h2>
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
                                    <Link className="theme-btn2" to="/about">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="solution pt100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading2">
                                <span className="span"><img src={span2} alt="" /> Our Mission</span>
                                <h2>Innovating for Success: Our Technology Mission</h2>
                                <div className="space16"></div>
                                <p>At TechXen, our mission is simple: to revolutionize the digital landscape by delivering top-notch
                                    technology solutions that drive growth, efficiency, and sustainability for our clients. We strive to be
                                    the trusted partner that businesses can rely on to navigate the complexities of the digital world.</p>
                                <div className="space16"></div>
                                <p>"At TechXen, our mission is to empower businesses through technology. We believe in harnessing the power
                                    of innovation to drive growth, efficiency, and sustainability for our clients. Through our tailored
                                    technology solutions and unwavering commitment to excellence, we strive to be the catalyst for positive
                                    change in the digital landscape.</p>

                                <div className="space30"></div>
                                <div className="">
                                    <Link className="theme-btn2" to="/service">Discover More <span><i
                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="solution-images">
                                <div className="image1">
                                    <img src={solution_img1} alt="" />
                                </div>
                                <div className="image2">
                                    <img src={solution_img2} alt="" />
                                </div>
                                <div className="image3">
                                    <img src={solution_img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="solution about-solution pt100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="images">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="image">
                                            <img src={visiton_img1} alt="" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="space30"></div>
                                        <div className="image">
                                            <img src={visiton_img2} alt="" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="space30"></div>
                                        <div className="image">
                                            <img src={visiton_img3} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading2">
                                <span className="span"><img src={span2} alt="" /> Our Vision</span>
                                <h2>Driving Innovation: Our Vision at TechXen</h2>
                                <div className="space16"></div>
                                <p>At TechXen, our vision is to be the leading force driving digital transformation and innovation
                                    worldwide. We envision a future where businesses of all sizes have the tools and expertise they need to
                                    thrive in an increasingly digital world.</p>

                                <div className="item-box">
                                    <div className="icon">
                                        <div className="">
                                            <img src={solution_iocn1} alt="" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3><a href="#">Network Infrastructure Solutions</a></h3>
                                        <div className="space10"></div>
                                        <p>Build a reliable and secure network infrastructure that <br /> supports your business operations
                                            enables seamless</p>
                                    </div>
                                </div>

                                <div className="item-box">
                                    <div className="icon">
                                        <div className="">
                                            <img src={solution_iocn2} alt="" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3><a href="#">Managed It Services</a></h3>
                                        <div className="space10"></div>
                                        <p>Focus on your core business activities while we take <br /> care of your IT needs with our managed IT
                                            services.</p>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="">
                                    <Link className="theme-btn2" to="/service">Discover More <span><i
                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="about-tabs pt100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 text-center m-auto">
                            <div className="heading2">
                                <span className="span"><img src={span2} alt="" /> Our Story</span>
                                <h2>Our Company Story</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 m-auto text-center">
                            <ul className="nav nav-pills tab-header-all mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="about-tab1-tab" data-bs-toggle="pill" data-bs-target="#about-tab1"
                                        type="button" role="tab" aria-controls="about-tab1" aria-selected="true">2017</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab2-tab" data-bs-toggle="pill" data-bs-target="#about-tab2"
                                        type="button" role="tab" aria-controls="about-tab2" aria-selected="false">2018</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab3-tab" data-bs-toggle="pill" data-bs-target="#about-tab3"
                                        type="button" role="tab" aria-controls="about-tab3" aria-selected="false">2019</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab4-tab" data-bs-toggle="pill" data-bs-target="#about-tab4"
                                        type="button" role="tab" aria-controls="about-tab4" aria-selected="false">2020</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab5-tab" data-bs-toggle="pill" data-bs-target="#about-tab5"
                                        type="button" role="tab" aria-controls="about-tab5" aria-selected="false">2021</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab6-tab" data-bs-toggle="pill" data-bs-target="#about-tab6"
                                        type="button" role="tab" aria-controls="about-tab6" aria-selected="false">2022</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab7-tab" data-bs-toggle="pill" data-bs-target="#about-tab7"
                                        type="button" role="tab" aria-controls="about-tab7" aria-selected="false">2023</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space60"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="about-tab1" role="tabpanel" aria-labelledby="about-tab1-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2017 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image">
                                                <img src={about_tab_img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab2" role="tabpanel" aria-labelledby="about-tab2-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2018 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image">
                                                <img src={about_tab_img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab3" role="tabpanel" aria-labelledby="about-tab3-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2019 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image">
                                                <img src={about_tab_img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab4" role="tabpanel" aria-labelledby="about-tab4-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2020 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image">
                                                <img src={about_tab_img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab5" role="tabpanel" aria-labelledby="about-tab5-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2021 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image">
                                                <img src={about_tab_img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab6" role="tabpanel" aria-labelledby="about-tab6-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2022 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image">
                                                <img src={about_tab_img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab7" role="tabpanel" aria-labelledby="about-tab7-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2023 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image">
                                                <img src={about_tab_img} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonial />

            <div className="team2 sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading2">
                                <span className="span"><img src={span2} alt="" /> Our Team</span>
                                <h2>Meet With Our Expert Team</h2>
                            </div>
                        </div>
                    </div>

                    <div className="space30"></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-box">
                                <div className="image-area">
                                    <div className="image">
                                        <img src={team2_img1} alt="" />
                                    </div>
                                    <div className="icon-area">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="heading2">
                                    <h4><a href="#">John Doe</a></h4>
                                    <div className="space10"></div>
                                    <p>CEO & Founder</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-box">
                                <div className="image-area">
                                    <div className="image">
                                        <img src={team2_img2} alt="" />
                                    </div>
                                    <div className="icon-area">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="heading2">
                                    <h4><a href="#">Jane Smith</a></h4>
                                    <div className="space10"></div>
                                    <p>Chef Technology Officer</p>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6">
                            <div className="team-box">
                                <div className="image-area">
                                    <div className="image">
                                        <img src={team2_img3} alt="" />
                                    </div>
                                    <div className="icon-area">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="heading2">
                                    <h4><a href="#">Sarah Thompson </a></h4>
                                    <div className="space10"></div>
                                    <p>Head of Project Management</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-box">
                                <div className="image-area">
                                    <div className="image">
                                        <img src={team2_img4} alt="" />
                                    </div>
                                    <div className="icon-area">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="heading2">
                                    <h4><a href="#">David Garcia</a></h4>
                                    <div className="space10"></div>
                                    <p>Lead Software Engineer</p>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </>
    );
}

export default AboutUs;
