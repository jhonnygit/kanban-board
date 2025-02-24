import { Task } from '../types';
import TaskCard from './Task';
import React from 'react';

interface ColumnProps {
    title: string;
    status: Task["status"];
    tasks: Task[];
    moveTask: (id:string, newStatus: Task["status"]) => void;
}

const Column = ({title,status,tasks,moveTask}:ColumnProps) => {
    return(
        <div className="w-1/3 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">{title}</h2>
            {tasks
                .filter((task)=>task.status === status)
                .map((task) =>(
                    <TaskCard key={task.id} task={task} moveTask={moveTask} />
                ))
            }
        </div>
    );
}

export default Column;