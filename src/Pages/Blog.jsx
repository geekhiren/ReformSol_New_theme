import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBlogExelDataAction } from "../ReduxStore/actions/ExelDataActions";


import span2 from "../assets/img/icons/span2.png"
import slider_logo1 from "../assets/img/logo/slider-logo1.png"
import slider_logo2 from "../assets/img/logo/slider-logo2.png"
import slider_logo3 from "../assets/img/logo/slider-logo3.png"
import slider_logo4 from "../assets/img/logo/slider-logo4.png"
import slider_logo5 from "../assets/img/logo/slider-logo5.png"
import slider_logo6 from "../assets/img/logo/slider-logo6.png"
import slider_logo7 from "../assets/img/logo/slider-logo7.png"
import blog2_img1 from "../assets/img/blog/blog2-img1.png"

import date from "../assets/img/icons/date.png"
import user from "../assets/img/icons/user.png"

import { Link, json } from "react-router-dom";
function Blogs({ BlogsList, getBlogExelDataAction }) {
    const [filteredBlogList, setFilteredBlogList] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        getBlogExelDataAction()
    }, [])
    useEffect(() => {
        // if (BlogsList?.data?.blogs) {
        //     setFilteredBlogList(BlogsList.)
        // }
    }, [BlogsList])

    const onFilteredBlog = (tag) => {
        // let temp = selectedTags
        // if (temp.find(itm => itm == tag)) {
        //     let index = temp.findIndex(itm => itm == tag)
        //     temp.splice(index, 1)
        // } else {
        //     temp.push(tag)
        // }
        // setSelectedTags(temp)
        // let blogs = BlogDetailsList.data.blogs.filter(blog => blog.title.toLocaleLowerCase().includes(tag.toLocaleLowerCase()));
        // setFilteredBlogList(blogs)

    }
    return (
        <>

            <div className="common-hero">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-6 m-auto">
                            <div className="main-heading">
                                <h1>Our Blog</h1>
                                <div className="space16"></div>
                                <span className="span">
                                    <img src={span2} alt="" />
                                    <Link to={"/"}>Home</Link>
                                    <span className="arrow">
                                        <i className="fa-regular fa-angle-right"></i></span>
                                    Blog
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


            <div className="blog">
                <div className="container">
                    <div className="row">

                        {BlogsList?.map(blog =>
                            <div className="col-lg-6">
                                <div className="blog2-box">
                                    <div className="image">
                                        <img src={blog2_img1} alt="" />
                                    </div>
                                    <div className="heading2">
                                        {/* <div className="tags">
                                            <a href="#" className="date"><img src={date} alt="" /> 10/02/2024</a>
                                            <a href="#" className="date outhor"><img src={user} alt="" /> Ben Cutting</a>
                                        </div> */}
                                        <h4><Link href={blog.slug}>{blog.title}</Link></h4>
                                        <div className="space16"></div>
                                        {/* <p>We explore the growing trend of remote work and its implications for cybersecurity.</p> */}
                                        {/* <div className="space16"></div> */}
                                        <a href="blog-details.html" className="learn">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                                    </div>
                                </div>
                            </div>)}
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

            <div className="space100"></div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        BlogsList: state.BlogExelDataReducer?.data?.blogs,
    };
};

export default connect(
    mapStateToProps,
    {
        getBlogExelDataAction
    }
)(Blogs);
