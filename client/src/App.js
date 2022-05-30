import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navigation from "./components/Navigation";
import RecordList from "./components/RecordList";
import Edit from "./components/Edit";
import Create from "./components/Create";

const App = () => {
  return (
    <div className="container-xxl mx-auto">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
