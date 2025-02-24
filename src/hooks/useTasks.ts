import { useState, useEffect } from "react";
import { Task } from "../types";

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks):[];
    });

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks])

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