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

            <div class="project-boxs-area sp">
                <div class="container">
                    <div class="row">

                        {BlogsList?.map(blog => <div class="col-lg-4 col-md-6">
                            <div class="project-page-box">
                                <div class="image">
                                    <img src={blog2_img1} alt="" />
                                </div>
                                <div class="heading2">
                                    <h4><a href="project-details.html">{blog.title}</a></h4>
                                    <a href="project-details.html" class="learn">Learn More <span><i
                                        class="fa-solid fa-arrow-right"></i></span></a>
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
