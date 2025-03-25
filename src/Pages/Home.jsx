import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import about2_img1 from "../assets/img/about/about2-img1.png"
import about2_img2 from "../assets/img/about/about2-img2.png"
import about2_img3 from "../assets/img/about/about2-img3.png"
import span2 from "../assets/img/icons/span2.png"
import service2_icon1 from "../assets/img/icons/service2-icon1.png"
import service2_icon2 from "../assets/img/icons/service2-icon2.png"
import service2_icon3 from "../assets/img/icons/service2-icon3.png"
import service2_icon4 from "../assets/img/icons/service2-icon4.png"
import service2_icon5 from "../assets/img/icons/service2-icon5.png"
import service2_icon6 from "../assets/img/icons/service2-icon6.png"
import solution_iocn1 from "../assets/img/icons/solution-iocn1.png"
import solution_iocn2 from "../assets/img/icons/solution-iocn2.png"
import solution_img1 from "../assets/img/others/solution-img1.png"
import solution_img2 from "../assets/img/others/solution-img2.png"
import solution_img3 from "../assets/img/others/solution-img3.png"
import work2_img1 from "../assets/img/work/work2-img1.png"
import work2_img2 from "../assets/img/work/work2-img2.png"
import work2_img3 from "../assets/img/work/work2-img3.png"
import work2_img4 from "../assets/img/work/work2-img4.png"
import work2_img5 from "../assets/img/work/work2-img5.png"
import team2_img1 from "../assets/img/team/team2-img1.png"
import team2_img2 from "../assets/img/team/team2-img2.png"
import team2_img3 from "../assets/img/team/team2-img3.png"
import team2_img4 from "../assets/img/team/team2-img4.png"
import tes2_icon from "../assets/img/icons/tes2-icon.png"
import blog2_img2 from "../assets/img/blog/blog2-img2.png"
import date from "../assets/img/icons/date.png"
import blog2_img1 from "../assets/img/blog/blog2-img1.png"
import user from "../assets/img/icons/user.png"
import hero2_shape1 from "../assets/img/shapes/hero2-shape1.png"
import hero2_shape2 from "../assets/img/shapes/hero2-shape2.png"
import hero2_main_img1 from "../assets/img/hero/hero2-main-img1.png"
import hero2_main_img2 from "../assets/img/hero/hero2-main-img2.png"

import { getDataAction } from "../ReduxStore/actions/ExelDataActions";
import { connect } from "react-redux";
import Testimonial from "../Components/Testimonial.jsx"

function Home({ getDataAction, dataList }) {

    useEffect(() => {
        getDataAction()
    }, [])


    return (
        <>
            <div className="hero2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-right" data-aos-duration="700">
                                    <img src={span2} alt="" /> Reformsol Technology & It Solution
                                </span>
                                <h1 className="title tg-element-title" >Crafting Solutions Beyond Boundaries, Driving Progress Together.
                                </h1>
                            </div>

                            <div className="row _relative">
                                <div className="col-lg-9">
                                    <div className="hero2-tags">
                                        <ul>
                                            <li><a href="#">Software Development</a></li>
                                            <li><a href="#">Cloud Solution</a></li>
                                            <li className="active"><a href="#">It Solution</a></li>
                                            <li><a href="#">Data Analytics</a></li>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">Cyber Security</a></li>
                                            <li><a href="#">Consulting Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="circle-shapes">
                                        <div className="shape1 shape-animaiton4">
                                            <img src={hero2_shape1} alt="" />
                                        </div>
                                        <div className="shape2">
                                            <Link to="\services">
                                                <img src={hero2_shape2} alt="" /></Link> </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="hero2-main-imges">
                                <div className="image1">
                                    <img src={hero2_main_img1} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="hero2-main-imge2">
                    <img src={hero2_main_img2} alt="" />
                </div>
            </div>
            <div className="about2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about2-images">
                                <div className="image1" data-aos="zoom-in-right" data-aos-duration="800">
                                    <img src={about2_img1} alt="" />
                                </div>
                                <div className="image2 reveal image-anime">
                                    <img src={about2_img2} alt="" />
                                </div>
                                <div className="image3" data-aos="zoom-in-left" data-aos-duration="900">
                                    <img src={about2_img3} alt="" />
                                </div>
                                <div className="counter-box" data-aos="flip-left" data-aos-duration="700">
                                    <h3>25</h3>
                                    <p>Years Of <br /> Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700"><img src={span2} alt="" /> Our Service</span>
                                <h2 className="title tg-element-title">Empower Your Business With Our Comprehensive IT Solutions</h2>
                                <div className="space16"></div>
                                <p data-aos="fade-up-left" data-aos-duration="700">Welcome to TechXen, your premier destination for cutting-edge technology solutions and IT services. At TechXen, we are passionate about harnessing the power of technology to empower businesses a like.</p>

                                <div className="space10"></div>

                                <div className="porgress-line-all" data-aos="fade-up-left" data-aos-duration="900">
                                    <div className="progress-line">

                                        <h6>IT Consulting</h6>
                                        <div className="progress1" data-init="true">
                                            <div className="percentCount">100%</div>
                                            <div className="progressbar" >
                                                <div className="proggress" >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-line">
                                        <h6>Cyber Security</h6>
                                        <div className="progress2" data-init="true">
                                            <div className="percentCount">90%</div>
                                            <div className="progressbar" >
                                                <div className="proggress" >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="button" data-aos="fade-up-left" data-aos-duration="800">
                                    <Link className="theme-btn2" to="\about">Learn More <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span><span className="arrow2"><i className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {dataList?.services?.length &&
                <div className="servcie2 pt100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto text-center">
                                <div className="heading2">
                                    <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                                        <img src={span2} alt="" /> Our Service</span>
                                    <h2 className="title tg-element-title">Empower Your Business with Our Comprehensive IT Solutions</h2>
                                </div>
                            </div>
                        </div>
                        <div className="space30"></div>
                        <div className="row">
                            {dataList?.services?.map(service =>
                                <div className="col-lg-4 col-md-6" key={service.slug}>
                                    <div className="">
                                        <div className="servcie2-box ">
                                            <div className="icon">
                                                <img src={service.img} alt="" />
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
                        <div className="space40"></div>
                        <div className="row">
                            <div className="col-lg-12 text-center" data-aos="zoom-in-up" data-aos-duration="700">
                                <Link className="theme-btn2" to="/services">View All Services <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span><span className="arrow2"><i className="fa-solid fa-arrow-right"></i></span></Link>
                            </div>
                        </div>

                    </div>
                </div>}



            <div className="work2 pt100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                                    <img src={span2} alt="" /> How It Works</span>
                                <h2 className="title tg-element-title">Unlocking Success The Path To Seamless Solutions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30"></div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="work2-box" data-aos="zoom-in-up" data-aos-duration="700">
                                <div className="image image-anime">
                                    <img src={work2_img1} alt="" />
                                </div>
                                <div className="space20"></div>
                                <div className="heading2">
                                    <h4><Link to="/services">Discovery & Consultation</Link></h4>
                                    <div className="space10"></div>
                                    <p>The journey begins with a thorough discovery phase where we take the time to understand your business,
                                        goals, and challenges. Our experienced team will work closely with you to assess your needs and
                                        objectives.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="work2-box" data-aos="zoom-in-up" data-aos-duration="900">
                                <div className="image image-anime">
                                    <img src={work2_img2} alt="" />
                                </div>
                                <div className="space20"></div>
                                <div className="heading2">
                                    <h4><Link to="/services">Custom Solution Design</Link></h4>
                                    <div className="space10"></div>
                                    <p>Once we have a clear understanding of your requirements, our expert team will design a custom solution
                                        tailored to your specific needs. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="work2-box" data-aos="zoom-in-up" data-aos-duration="1000">
                                <div className="image image-anime">
                                    <img src={work2_img3} alt="" />
                                </div>
                                <div className="space20"></div>
                                <div className="heading2">
                                    <h4><Link to="/services">Implementation & Integration</Link></h4>
                                    <div className="space10"></div>
                                    <p>With the solution blueprint in hand, our team will begin the implementation and integration <br /> process.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="work2-box" data-aos="zoom-in-up" data-aos-duration="1200">
                                <div className="image image-anime">
                                    <img src={work2_img4} alt="" />
                                </div>
                                <div className="space20"></div>
                                <div className="heading2">
                                    <h4><Link to="/services">Testing & Quality Assurance</Link></h4>
                                    <div className="space10"></div>
                                    <p>Before deployment, we conduct rigorous testing and quality assurance checks to ensure that your solution
                                        meets.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="work2-box" data-aos="zoom-in-up" data-aos-duration="700">
                                <div className="image image-anime">
                                    <img src={work2_img5} alt="" />
                                </div>
                                <div className="space20"></div>
                                <div className="heading2">
                                    <h4><Link to="/services">Deployment & Training</Link></h4>
                                    <div className="space10"></div>
                                    <p>Once testing is complete and your solution is ready to go, we'll handle the deployment process with
                                        precision and care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="team2 pt100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading2">
                                <span className="span">
                                    <img src={span2} alt="" /> Our Team</span> <h2 className="title tg-element-title">Meet With Our Expert Team</h2>
                            </div>
                        </div>
                    </div>

                    <div className="space30"></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-box" data-aos="fade-up" data-aos-duration="700">
                                <div className="image-area">
                                    <div className="image image-anime">
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
                            <div className="team-box" data-aos="fade-up" data-aos-duration="1100">
                                <div className="image-area">
                                    <div className="image image-anime">
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
                            <div className="team-box" data-aos="fade-up" data-aos-duration="900">
                                <div className="image-area">
                                    <div className="image image-anime">
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
                            <div className="team-box" data-aos="fade-up" data-aos-duration="700">
                                <div className="image-area">
                                    <div className="image image-anime">
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
            </div> */}



            <Testimonial />

            <div className="blog sp">
                <div className="container">
                    <div className="row">
                        <div className="ocl-lg-6 text-center m-auto">
                            <div className="heading2">
                                <span className="span">
                                    <img src={span2} alt="" /> Our Blog</span> <h2 className="title tg-element-title">See Our Latest Blog & News</h2>
                            </div>
                        </div>
                    </div>

                    <div className="space30"></div>
                    <div className="blog">
                        <div className="container">
                            <div className="row">

                                {dataList?.blogs?.length && dataList.blogs?.map((blog, index) => {
                                    return (
                                        index < 2 ?
                                            <div className="col-lg-6" key={index}>
                                                <div className="blog2-box">
                                                    <div className="image">
                                                        <img src={blog2_img1} alt="" />
                                                    </div>
                                                    <div className="heading2">
                                                        <div className="tags">
                                                            <a href="#" className="date"><img src={date} alt="" /> 10/02/2024</a>
                                                            <a href="#" className="date outhor"><img src={user} alt="" /> Ben Cutting</a>
                                                        </div>
                                                        <h4><Link href={blog.slug}>{blog.title}</Link></h4>
                                                        <div className="space16"></div>
                                                        <p>We explore the growing trend of remote work and its implications for cybersecurity.</p>
                                                        <div className="space16"></div>
                                                        <Link to="/blog" className="learn">Read More <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            : null)
                                })}
                            </div>
                            <div className="space60"></div>
                            {/* <div className="row">
                        <div className="col-12 m-auto">
                            <div className="theme-pagination text-center">
                                <ul>
                                    <li><a href="#"><i className="fa-solid fa-angle-left"></i></a></li>
                                    <li><a className="active" href="#">01</a></li>
                                    <li><a href="#">02</a></li>
                                    <li>...</li>
                                    <li><a href="#">12</a></li>
                                    <li><a href="#"><i className="fa-solid fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        dataList: state.ExelDataReducer?.data
    };
};
export default connect(mapStateToProps, { getDataAction })(Home);
