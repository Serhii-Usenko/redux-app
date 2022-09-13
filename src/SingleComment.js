import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentDelete, commentUpdate } from './redux/actions';

const SingleComment = ({data}) => {
    const [commentText, setCommentText] = useState('');
    const { text, id } = data;
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('sumbit ->>>', commentText)
        dispatch(commentUpdate(commentText, id))
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(commentDelete(id))
    }

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    return (
        <form onSubmit={handleUpdate}>
            <button onClick={handleDelete}>&times;</button>
            <input type='text' value={commentText} onChange={e => setCommentText(e.target.value)}/>
            <input type='submit' hidden/>
        </form>
    )
}

export default SingleComment