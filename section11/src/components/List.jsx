import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => {
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if (search === '') {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredData = getFilteredData();

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        console.log("getAnalyzeddData 호출!");
        const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo) => todo.isDone
        ).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount,
            doneCount,
            notDoneCount,
        }
    }, [todos])

    // const { totalCount, doneCount, notDoneCount } = getAnalyzeddData();

    return <div className='List'>
        <h4>Todo List</h4>
        <div>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>not done: {notDoneCount}</div>
        </div>
        <input placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch} />
        <div className='todos_wrapper'>
            {filteredData.map((todo) => {
                return <TodoItem key={todo.id} {...todo} />;
            })}
        </div>
    </div>
}

export default List;