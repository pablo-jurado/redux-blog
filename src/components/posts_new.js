import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../actions/index'


  // outside your render() method
  const renderField = (field) => (
    <div className="input-row">
      <input {...field.input} type="text"/>
      {field.meta.touched && field.meta.error && 
      <span className="error">{field.meta.error}</span>}
    </div>
  )

class PostsNew extends Component {

  render () {
    //  const handleSubmit = this.props.handleSubmit
    // this is the same
    const { handleSubmit } = this.props
    // const { fields: { title, categories, content } } = this.props
    console.log(this.props)
    return (
      <form onSubmit={handleSubmit} >
        <h3>New Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <Field component={renderField} name='title' type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label>categories</label>
          <Field component='input' name='categories' type='text' className='form-control' />
          </div>
        <div className='form-group'>
          <label>content</label>
          <Field component='input' name='content' type='text-area' className='form-control' />
          </div> 
        <button type='submit' className='btn btn-primary'>submit</button>
      </form>   
    )
  }
}

export default reduxForm ({
  form: 'PostsNew'
  // fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew)