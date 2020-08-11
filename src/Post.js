import React from 'react'
import './Post.css'

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            {/** header --> Avatar + user */}
            {/** Image */}
            <img 
            className="post__image"
            src="https://scontent.fsyd3-1.fna.fbcdn.net/v/t1.0-9/117116874_1018723381892569_5721145167485563021_n.jpg?_nc_cat=105&_nc_sid=8024bb&_nc_ohc=8lVMJXYOVcsAX9KYN4a&_nc_ht=scontent.fsyd3-1.fna&oh=b6cd0979e7c8e259ee99b1a698bbb064&oe=5F58678D" alt=""/>
            {/** username + caption */}
            <h4 className="post__text"> <strong>Suri</strong>: Sample caption for the post</h4>
        </div>
    )
}

export default Post
