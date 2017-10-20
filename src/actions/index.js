import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const SHOW_POST = 'SHOW_POST'
export const DELETE_POST = 'DELETE_POST'


const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=testingfrompablo'

export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost (props) {
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, props)

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function showPost (id) {

  return {
    type: SHOW_POST,
    payload: id
  }
}

export function deletePost (id, callback) {
  console.log(id)
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then( () => callback() )

  return {
    type: DELETE_POST,
    payload: id
  }
}

