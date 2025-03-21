import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDataAction } from "../ReduxStore/actions/ExelDataActions.js";

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

            <div className="project-boxs-area sp">
                <div className="container">
                    <div className="row">

                        {BlogsList?.map(blog => <div className="col-lg-4 col-md-6">
                            <div className="project-page-box">
                                <div className="image">
                                    <img src={blog.img} alt="" />
                                </div>
                                <div className="heading2">
                                    <h4><Link href="/">{blog.title}</Link></h4>
                                    <Link href="/" className="learn">Learn More <span><i
                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="space60"></div>
                </div>
            </div>

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
