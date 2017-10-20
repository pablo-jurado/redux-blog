import { FETCH_POSTS } from '../actions/index'
import _ from 'lodash'

const INITIAL_STATE = {all: [], post: null}

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: _.mapKeys(action.payload.data, 'id') }

    default:
      return state
  }
}
