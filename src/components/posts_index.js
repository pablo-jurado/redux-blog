import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router'

class PostIndex extends Component {
  componentWillMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    return this.props.posts.map((post) => {
      return (
        <li key={post.id} className='list-group-item' >
          <div>Title: {post.title}</div>
          <div>{post.content}</div>
        </li>
      )
    })

  }

  render () {
    return(
      <div>
        <div>
          <Link to='/posts/new' className='btn btn-primary'> Add New Posts</Link>
        </div>  
        <h4>Post</h4>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>  
      </div>  
    )   
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchPosts }, dispatch )
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)