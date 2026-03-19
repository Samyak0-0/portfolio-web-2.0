import { useGlobalContext } from "./components/Context";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllProjects from "./AllProjects";
import Descriptions2 from "./components/Descriptions2";

function App() {
  const { showModal, menu } = useGlobalContext();

  return (
    <>
      {showModal && <Descriptions2 />}
      <BrowserRouter>
        {menu && <Menu />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all_projects" element={<AllProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
