import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router'
import _ from 'lodash'

class PostIndex extends Component {
  componentWillMount () {
    this.props.fetchPosts()
  }
  renderPosts () {
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className='list-group-item' >
          <Link to={'/posts/' + post.id} >
            <div>Title: {post.title}</div>
          </Link>
        </li>
      )
    })

  }

  render () {
    if (!this.renderPosts()) return <div>Loading ...</div>
    return(
      <div>
        <div>
          <Link to='/posts/new' className='btn btn-primary pull-xs-right'> Add New Posts</Link>
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
