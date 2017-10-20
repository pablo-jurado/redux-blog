import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deletePost } from '../actions/index'
import { Link } from 'react-router'

const Post = (props) => {
  const post = props.post
  const returnToIndex = () => {
    props.history.push('/')
  }

  const handleDelete = () => {
    props.deletePost(post.id, returnToIndex)
  }

  return (
    <div>
      <Link to='/'>Back</Link>
      <h4>{post.title}</h4>
      <div>
        {post.content}
      </div>
      <button
        className='btn btn-danger pull-xs-right'
        onClick={handleDelete}>
        Detele
      </button>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators( { deletePost }, dispatch )
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts.all[ownProps.params.id]}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
