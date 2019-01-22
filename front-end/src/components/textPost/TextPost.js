import React, { Component } from 'react';
import './TextPost.css';

class TextPost extends Component {
  render() {
    let post = this.props.postData;
    return (
      <div className="TextPost">
        <p className="TextPost-content">
          <img src= {post.thumbnail_image_url} max='40' min />
          <p>{post.title}</p>
        </p>
      </div>
    );
  }
}

export default TextPost;
