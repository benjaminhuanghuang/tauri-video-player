import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
// Views
import FrontEndDev from "./views/FrontEndDev";
import Programming from "./views/Programming";
import Methodology from "./views/Methodology";
import MusicForWork from "./views/MusicForWork";
import Study from "./views/Study";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MusicForWork />} />
          <Route path="music-for-work" element={<MusicForWork />} />
          <Route path="study" element={<Study />} />
          <Route path="frontend-dev" element={<FrontEndDev />} />
          <Route path="programming" element={<Programming />} />
          <Route path="methodology" element={<Methodology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
