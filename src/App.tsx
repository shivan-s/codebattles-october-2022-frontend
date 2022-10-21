import { Container } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdvocateListView from "./views/AdvocateListView";
import AdvocateDetailView from "./views/AdvocateDetailView";
import Home from "./views/Home";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advocates" element={<AdvocateListView />} />
          <Route path="/advocates/:username" element={<AdvocateDetailView />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
