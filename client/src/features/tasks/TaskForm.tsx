import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
// this is the first file
  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!title.trim()) return alert("Title required");

    dispatch(addTask({
      title: title.trim(),
      priority: "MEDIUM",
      status: "TODO"
    }) as any);
    
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input 
          placeholder="Enter task title..."
          value={title} 
          onChange={e => setTitle(e.target.value)} 
        />
        
        {title && (
          <button 
            type="button"
            onClick={() => setTitle("")}
            style={{ marginLeft: '-25px', border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            ✕
          </button>
        )}
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};