import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { RootState, AppDispatch } from "../../app/store";

import * as taskSlice from "./taskSlice";
import { AppDispatch, RootState } from "../../app/store";

export const TaskList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, search } = useSelector((state: RootState) => state.tasks);

  const filtered = useMemo(() => {
    return items.filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  if (filtered.length === 0) {
    return <p>No tasks found matching "{search}"</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      {filtered.map(task => (
        <div 
          key={task.id} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '10px', 
            borderBottom: '1px solid #eee',
            alignItems: 'center'
          }}
        >
          <span>
            <strong>{task.title}</strong> — 
            <small style={{ marginLeft: '5px', color: '#666' }}>{task.priority}</small>
          </span>
          
          <button 
            onClick={() => dispatch(taskSlice.deleteTask(task.id))}
            style={{ color: 'red', cursor: 'pointer' }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};