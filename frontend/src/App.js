import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import DeleteBooks from "./pages/DeleteBooks";
import EditBook from "./pages/EditBook";
import Showbooks from "./pages/Showbooks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/books/create" element={<CreateBooks />}></Route>
      <Route path="/books/details/:id" element={<Showbooks />}></Route>
      <Route path="/books/edit/:id" element={<EditBook />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBooks />}></Route>
    </Routes>
  );
};

export default App;
