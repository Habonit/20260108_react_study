import './TodoItem.css';
import { memo, useContext } from "react"
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, date}) => {

    const { onUpdate, onDelete } = useContext(TodoDispatchContext);

    const onClickDelete = () => {
        onDelete(id);
    }
    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    
    return (
        <div className="TodoItem">
            <input readOnly type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
            <div className="content"> {content}</div>
            <div className="date"> {new Date(date).toLocaleDateString()} </div>
            <button onClick={onClickDelete}> 삭제 </button>
        </div>
    )
};

// const memoizedTodoItem = memo(TodoItem, (prevProps, nextProps) => {

//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;
//     return true;
// });

// export default memoizedTodoItem;    

export default memo(TodoItem);    