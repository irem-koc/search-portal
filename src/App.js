import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Showmore from "./components/Showmore/Showmore";
import Addlink from "./components/Addlink/Addlink";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Landing />} exact />
                    <Route path="/detail" element={<Showmore />} />
                    <Route path="/addlink" element={<Addlink />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
