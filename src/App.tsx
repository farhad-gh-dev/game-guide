import CategoryPage from "./Pages/Category";
import { StyledApp } from "./Style/App.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
