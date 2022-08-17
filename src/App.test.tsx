import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import { GlobalStyle } from "game-guide-ui-kit";
import App from "./App";

afterEach(cleanup);

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText("Game")).toBeInTheDocument();
});
