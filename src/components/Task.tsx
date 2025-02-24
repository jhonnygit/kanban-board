import { Task } from "../types";
import React from 'react';

interface TaskProps {
    task: Task;
    moveTask: (id:string, newStatus:Task["status"]) => void;
}

const TaskCard = ({task,moveTask}:TaskProps) => {
    return(
        <div className="bg-white p-3 rounded shadow mb-2">
            <h3 className="font-medium">{task.title}</h3>
            <div className="mt-2 flex justify-between">
                <button onClick={() => moveTask(task.id, "todo")}>To Do</button>
                <button onClick={() => moveTask(task.id, "in-progress")}>In Progress</button>
                <button onClick={() => moveTask(task.id, "done")}>Done</button>
            </div>
        </div>
    );
};

export default TaskCard;