import { CategoryPage } from "./Pages";
import { StyledApp } from "./Style/App.styled";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Navigate to="/categories/all genres" />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/404" element={<h1>404 Page</h1>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
