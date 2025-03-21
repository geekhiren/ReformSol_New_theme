import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getDataAction } from "../ReduxStore/actions/ExelDataActions";
import { connect } from "react-redux";
import CommonHero from "../Components/CommonHero.jsx"

function BlogDetails({ blogsList, getDataAction }) {

    let blogSlug = useParams();

    const [blogDetais, setBlogDetais] = useState();
    useEffect(() => {
        getDataAction()
    }, [])


    useEffect(() => {
        if (blogsList?.blogs?.length > 0) {
            setBlogDetais(blogsList.blogs.find(blog => blog.slug.toLowerCase() == blogSlug.blogSlug.toLowerCase()))
        }
    }, [blogsList])

    return (

        <>{blogDetais ?


            <>
                <CommonHero mainTitle={blogDetais.title} subTitle={""} showBreadCrumb={false} />

                <div className="blog-details ptb-100">
                    <div className="container">
                        <div className="row">
                            {/* {blogDetais.details.map(item =>
                             
                            )} */}
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-white">
                                <div dangerouslySetInnerHTML={{ __html: blogDetais.body }} />
                            </div>

                        </div>
                    </div>
                </div>
            </>
            : <div className="loader-contaner">
                <div className="loader"></div>
            </div>
        }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        blogsList: state.ExelDataReducer?.data
    };
};
export default connect(mapStateToProps, { getDataAction })(BlogDetails);