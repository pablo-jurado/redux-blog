import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createPost } from '../actions/index'



class PostsNew extends Component {
  constructor (props) {
    super(props)

    this.state= {
      title: '',
      categories: '',
      content: ''
    }

    this.handleForm = this.handleForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cancel = this.cancel.bind(this)

  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleForm (event) {
    const value = event.target.value
    const name = event.target.name
    this.setState( { [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createPost(this.state)
      .then(() => {
        this.context.router.push('/')
      })
  }

  cancel () {
    this.context.router.push('/')
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>New Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input name='title' type='text' className='form-control' onChange={this.handleForm} value={this.state.title} />
        </div>
        <div className='form-group'>
          <label>categories</label>
          <input name='categories' type='text' className='form-control' onChange={this.handleForm} value={this.state.categories} />
          </div>
        <div className='form-group'>
          <label>content</label>
          <textarea name='content' type='text-area' className='form-control' onChange={this.handleForm} value={this.state.content} />
          </div>
        <button type='submit' className='btn btn-primary'>submit</button>
        <button type='button' onClick={this.cancel} className='btn btn-danger'>cancel</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { createPost }, dispatch )
}

export default connect(null, mapDispatchToProps)(PostsNew)
