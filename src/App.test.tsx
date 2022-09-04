import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import { GlobalStyle } from "game-guide-ui-kit";
import App from "./App";
import { Suspense } from "react";

afterEach(cleanup);

test("renders learn react link", async () => {
  render(
    <Suspense>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );

  await waitFor(() => {
    expect(screen.getByText("Special Offer")).toBeInTheDocument();
  });
});
