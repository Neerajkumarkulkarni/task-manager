import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./taskAPI";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const res = await api.get("/");
  return res.data.data;
});

export const addTask = createAsyncThunk("tasks/add", async (task: any) => {
  const res = await api.post("/", task);
  return res.data.data;
});

export const deleteTask = createAsyncThunk("tasks/delete", async (id: string) => {
  await api.delete(`/${id}`);
  return id;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [] as any[],
    search: "",
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    });
  },
});

export const { setSearch } = taskSlice.actions;
export default taskSlice.reducer;