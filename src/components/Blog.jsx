import React from 'react'
import NewsLetter from './NewsLatter';
import BlogPost from '../common/BlogPost';
import { BlogPosts } from '../shared/BlogPosts';
const Blog = () => {
    return (
        <>
            <section id="page_header" className="blog_header">
                <h2>#read More</h2>
                <p>Read all case studies about our products</p>
            </section>

            <section id="blog">
                {
                    BlogPosts.map((post) => {
                        return (
                            <BlogPost key={post.id} postData={post} />
                        )
                    })
                }
            </section>


            <section id="pagination" className="section-p1">
                {/* <a href="#"><i className="fa fa-long-arrow-alt-left"></i></a> */}
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i className="fa fa-long-arrow-alt-right"></i></a>
            </section>


            <NewsLetter />
        </>
    )
}

export default Blog