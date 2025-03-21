import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDataAction } from "../ReduxStore/actions/ExelDataActions";

import blog2_img1 from "../assets/img/blog/blog2-img1.png"
import CommonHero from "../Components/CommonHero.jsx"

import { Link } from "react-router-dom";

function Blogs({ BlogsList, tagList, getDataAction }) {

    useEffect(() => {
        getDataAction()
    }, [])


    return (
        <>
            <CommonHero mainTitle={"Our Blog"} subTitle={"Blog"} />

            <div className="blog">
                <div className="container">
                    <div className="row">
                        {BlogsList?.map(blog =>
                            <div className="col-lg-6">
                                <div className="blog2-box">
                                    <div className="image">
                                        <img src={blog.img} alt="" />
                                    </div>
                                    <div className="heading2">
                                        {/* <div className="tags">
                                            <a href="#" className="date"><img src={date} alt="" /> 10/02/2024</a>
                                            <a href="#" className="date outhor"><img src={user} alt="" /> Ben Cutting</a>
                                        </div> */}
                                        <h4><Link to={'/blog/' + blog.slug.toLowerCase()}>{blog.title}</Link></h4>
                                        <div className="space16"></div>
                                        {/* <p>We explore the growing trend of remote work and its implications for cybersecurity.</p> */}
                                        {/* <div className="space16"></div> */}
                                        <Link to={'/blog/' + blog.slug.toLowerCase()} className="learn">Read More <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        )}
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
        BlogsList: state.ExelDataReducer?.data?.blogs,
        tagList: state.ExelDataReducer?.data?.tags,
    };
};

export default connect(
    mapStateToProps,
    {
        getDataAction
    }
)(Blogs);
