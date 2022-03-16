import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

//custom components
import MissionList from "./MissionList";
import MissionEditForm from "./MissionEditForm";
import Register from "./Register";

export default function App() {

    const [user, setUser] = useState(null);

    const getUserInfo = async () => {
        try {
            const {data} = await axios.get("/api/user");
            setUser(data);
            console.log("User is logged in!");
            
        } catch(error) {
            setUser(null);
            console.log(error);
            console.log("User is not logged in!");
        }

    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <BrowserRouter>

            <nav>
                <Link to="/missions">List of mission</Link>
                &nbsp;
                <Link to="/missions/create">Create a new mission</Link>
                &nbsp;
                {user ? "" :
                <Link to="/missions/register">Register</Link>
                }
            </nav>

            <Routes>

                <Route exact path="/missions" element={<MissionList />} />
                <Route exact path="/missions/create" element={<MissionEditForm />} />
                {user ? "" :
                <Route exact path="/missions/register" element={<Register />} />
                }
            </Routes>

        </BrowserRouter>
    );
}