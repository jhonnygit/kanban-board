import React,{ useState } from "react";
import { addTask } from "../services/api";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTask({ title, status: "todo", userId: "123" });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">Agregar</button>
    </form>
  );
};

export default AddTaskForm;

