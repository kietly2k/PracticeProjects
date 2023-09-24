import ResultSummary from "../../results-summary/src/components/ResultSummary";
import "./App.css";
import ProjectList from "./ProjectList";
import { Routes, Route  } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProjectList />} />
      <Route path="results-summary" element={<ResultSummary />} />
    </Routes>
  )
}

export default App;
