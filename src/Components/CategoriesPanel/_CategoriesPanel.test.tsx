import { render, cleanup, fireEvent } from "@testing-library/react";
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
  const { getByText } = render(<CategoriesPanel categoriesData={dummyData} />);

  expect(getByText(/Action/i)).toHaveStyle("background-color: #F33D3D");
});

it("Searchbox input should be equal to use input", () => {
  const { getByPlaceholderText } = render(
    <CategoriesPanel categoriesData={dummyData} />
  );
  const inputElement = getByPlaceholderText("Search...");

  fireEvent.change(inputElement, { target: { value: "Elden Ring" } });
  expect(inputElement.getAttribute("value")).toBe("Elden Ring");
});

export {};
