import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import About from "./page/About";
import LuisAbout from "./page/teammember/LuisAbout";
import DorrieAbout from "./page/teammember/DorrieAbout";
import VedangAbout from "./page/teammember/VedangAbout";
import GwangwooAbout from "./page/teammember/GwangwooAbout";
import JoohoAbout from "./page/teammember/JoohoAbout";
import LesliAbout from "./page/teammember/LesliAbout";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route path="about" element={<About />} />
      </Route>
      <Route path="teammember/LuisAbout" element={<LuisAbout />}/>
      <Route path="teammember/dorrieabout" element={<DorrieAbout />} />
      <Route path="teammember/VedangAbout" element={<VedangAbout />}/>
      <Route path="teammember/GwangwooAbout" element={<GwangwooAbout />}/>
      <Route path="teammember/JoohoAbout" element={<JoohoAbout />}/>
      <Route path="teammember/LesliAbout" element={<LesliAbout />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
