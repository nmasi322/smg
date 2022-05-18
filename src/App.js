import React from "react";
// import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddUser from "./pages/AddUser";
import SearchPosts from "./pages/SearchPosts";
import FormField from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<FormField />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search-posts" element={<SearchPosts />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
