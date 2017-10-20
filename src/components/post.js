import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showPost } from '../actions/index'
import { Link } from 'react-router'

const Post = (props) => {
  const post = props.post
  return (
    <div>
      <h4>{post.title}</h4>
      <div>
        {post.content}
      </div>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators( { showPost }, dispatch )
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts.all[ownProps.params.id]}
}

export default connect(mapStateToProps, null)(Post)
