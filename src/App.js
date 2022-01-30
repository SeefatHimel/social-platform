import { Route, Routes } from "react-router-dom";
import Home from "./components/home.component";
import LogIn from "./components/login -signup/login.component";
import SignUp from "./components/login -signup/signup.component";
import Navbar from "./components/navbar.component";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/signUp" element={<SignUp />} />{" "}
                <Route path="/logIn" element={<LogIn />} />{" "}
                {/* <Route path="/add" element={<AddNewMovies />} /> */}
                {/* <Route path="/m" element={<Movies />} /> */}
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
