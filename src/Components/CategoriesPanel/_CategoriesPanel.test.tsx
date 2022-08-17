import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CategoriesPanel from "./CategoriesPanel";

afterEach(cleanup);

const dummyData = [
  {
    id: 0,
    title: "All Games",
    showInSmallScreen: false,
  },
  {
    id: 1,
    title: "Mystery",
    showInSmallScreen: true,
  },
  {
    id: 2,
    title: "Action",
    active: true,
  },
];

it("Check for active button", () => {
  const { getByText } = render(
    <CategoriesPanel
      activeCategoryTitle="All Games"
      categoriesData={dummyData}
    />,
    { wrapper: BrowserRouter }
  );

  expect(getByText(/All Games/i)).toHaveStyle("background-color: #F33D3D");
});

it("Searchbox input should be equal to use input", () => {
  const { getByPlaceholderText } = render(
    <CategoriesPanel
      activeCategoryTitle="All Games"
      categoriesData={dummyData}
    />,
    { wrapper: BrowserRouter }
  );
  const inputElement = getByPlaceholderText("Search...");

  fireEvent.change(inputElement, { target: { value: "Elden Ring" } });
  expect(inputElement.getAttribute("value")).toBe("Elden Ring");
});

export {};
