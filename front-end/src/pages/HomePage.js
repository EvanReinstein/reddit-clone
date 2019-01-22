import React, { Component } from 'react';

// Components
import TextPost from '../components/textPost/TextPost';

// API models
import PostsAPI from '../models/PostsAPI';

class HomePage extends Component {
  state = {
    posts: [],
  }

  componentWillMount = () => {
    PostsAPI.index()
      .then( res => {
        // console.log(`All posts API call: `, res.data);
        this.setState({ posts: res.data });
      })
      .catch( err => console.log(`Error at Post Index is ${err}`));
  }

  render() {
    let posts = this.state.posts.map( (post, i) => {
      return <TextPost postData = {post} key={i} />;
    });
    return (
      <div>
        <p className="HomePage">
  	      Home Page
        </p>
        { posts }
      </div>
    );
  }
}

export default HomePage;
