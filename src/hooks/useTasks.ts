import { useState } from "react";
import { Task } from "../types";

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: "1", title: "Configurar proyecto", status: "todo" },
        { id: "2", title: "Diseñar UI", status: "in-progress" },
        { id: "3", title: "Implementar Drag & Drop", status: "done" },
    ]);

    const addTask = (title:string) => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            status: "todo"
        };
        setTasks([...tasks,newTask]);
    };

    const moveTask = (id:string, newStatus: Task["status"]) => {
        setTasks(tasks.map((task)=>(task.id ===id?{...task,status:newStatus}:task)));
    }

    return {tasks,addTask,moveTask}
}