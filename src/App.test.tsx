import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import { GlobalStyle } from "game-guide-ui-kit";
import App from "./App";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders learn react link", () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </Provider>,
      container
    );
  });
  expect(screen.getByText("loading...")).toBeInTheDocument();
});
