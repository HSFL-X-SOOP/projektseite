import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import TeamPage from "@/pages/team";
import SensorsPage from "@/pages/sensors";
import MilestonesPage from "@/pages/milestones";
import ContactPage from "@/pages/contact";
import DefaultLayout from "@/layouts/default";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path="/">
        <Route index element={<HomePage />} />
        <Route element={<AboutPage />} path="about" />
        <Route element={<TeamPage />} path="team" />
        <Route element={<SensorsPage />} path="sensors" />
        <Route element={<MilestonesPage />} path="milestones" />
        <Route element={<ContactPage />} path="contact" />
      </Route>
    </Routes>
  );
}

export default App;
