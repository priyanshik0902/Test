import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import LandingPage from "./LandingPage";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/priyanshi/" element={<LandingPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;