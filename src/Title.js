import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/actions';

function Title(props) {
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(inputText(e.target.value))
    }

    const text = useSelector(state => {
        const { inputTextReducer } = state;
        return inputTextReducer.text
    })

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>{text}</p>
        </div>
    )
}

export default Title;
