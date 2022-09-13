import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment'
import { commentCreate, commentsLoad } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

const Comments = (props) => {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id))
    }

    useEffect(() => {
        dispatch(commentsLoad());
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={textComment} onChange={(e) => setTextComment(e.target.value)}/>
                <input type='submit' hidden/>
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    )
}

export default Comments;