import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Allroutes from "./Allroutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllQuestion } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestion());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <ThemeSwitcher>
      <div className="App">
        <Router>
          <Navbar />
          <Allroutes />
        </Router>
      </div>
    </ThemeSwitcher>
  );
}

export default App;
