import {useDispatch} from "react-redux";
import { removeTodo, isDoneHandler } from "../store/ToDoSlice";


const ToDoItem = ({id, text, isDone}) => {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                className="isDoneCheckbox"
                type="checkbox"
                checked={isDone} onChange={() => dispatch(isDoneHandler({id}))}/>
            <span >{text}</span>
            <span
                className="delete"
                onClick={() => dispatch(removeTodo({id}))}>&times;
            </span>
        </li>
    )
}

export { ToDoItem };