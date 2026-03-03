git clone <(https://github.com/Neerajkumarkulkarni/task-manager.git)>
cd task-manager

# Install server dependencies
cd server && npm install
# Install client dependencies
cd ../client && npm install

npm run dev
Frontend: http://localhost:5173

Backend: http://localhost:5000

Features
Task Dashboard: View, add, and delete tasks.

Debounced Search: Efficient task filtering using useMemo and custom debounce logic.

Redux State: Centralized task management with asynchronous thunks.

Frontend: React, Redux Toolkit, TypeScript, Vite.

Backend: Node.js, Express.js.
