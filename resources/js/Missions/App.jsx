import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MissionList from "./MissionList";
import MissionEditForm from "./MissionEditForm";

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to={"/missions"}>List of missions</Link>
                <Link to={"/missions/create"}>Create new mission</Link>
            </nav>
            <Routes>
                <Route exact path="/missions" element={<MissionList />} />
                <Route
                    exact
                    path="/missions/create"
                    element={<MissionEditForm />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
