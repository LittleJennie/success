import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuccessPage from "./success-application-page/success.component.js";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}
