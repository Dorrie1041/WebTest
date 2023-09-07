import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import About from "./page/About";
import DorrieAbout from "./page/teammember/DorrieAbout";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path="about" element={<About />} />
      </Route>
      <Route path="teammember/dorrieabout" element={<DorrieAbout />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
