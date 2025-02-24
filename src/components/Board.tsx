import Column from './Column';
import { useTasks } from '../hooks/useTasks';
import React from 'react';

const Board = () => {
    const {tasks,moveTask} = useTasks();

    return(
        <div>
            <Column title="To Do" status="todo" tasks={tasks} moveTask={moveTask}/>
            <Column title="In Progress" status="in-progress" tasks={tasks} moveTask={moveTask} />
            <Column title="Done" status="done" tasks={tasks} moveTask={moveTask} />
        </div>
    ); 
};

export default Board;