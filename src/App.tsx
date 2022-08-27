import React, { Suspense } from "react";
import { StyledApp } from "./Style/App.styled";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loading } from "game-guide-ui-kit";

const CategoryPage = React.lazy(() => import("./Pages/Category/Category"));
const NotFoundPage = React.lazy(() => import("./Pages/NotFound/NotFound"));

function App() {
  return (
    <StyledApp>
      <Suspense fallback={<Loading coverPage />}>
        <Routes>
          <Route path="/" element={<Navigate to="/categories/all genres" />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </StyledApp>
  );
}

export default App;
