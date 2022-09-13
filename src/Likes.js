import React from 'react';
import { connect } from 'react-redux';
import {incrementLikes, decrementLikes} from './redux/actions'

const Likes = (props) => {
  console.log(props)
  
  return (
    <div>
        <button onClick={props.onIncrementLikes}>♥ {props.likes}</button>
        <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
    const {likesReducer} = state;

    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            return dispatch(incrementLikes());
        },
        onDecrementLikes: () => {
            return dispatch(decrementLikes());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);