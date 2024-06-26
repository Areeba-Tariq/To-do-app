import "regenerator-runtime/runtime";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoApp from "./RenderTasks";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
