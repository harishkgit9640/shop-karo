import React from 'react'

const BlogPost = (props) => {
    const { title, ImgUrl, description, post_date, id } = props.postData;
    return (
        <div className="blog_box">
            <div className="blog_img">
                <img src={ImgUrl} alt={title} />
            </div>
            <div className="blog_details">
                <h4> {title} </h4>
                <p>{description}</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1> {post_date} </h1>
        </div>
    )
}

export default BlogPost 