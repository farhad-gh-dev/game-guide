import { render, cleanup, fireEvent } from "@testing-library/react";
import ItemSlider from "./ItemSlider";
import dummyData from "../../DummyData";

afterEach(cleanup);

it("Active slide should be visible and other slides invisible", () => {
  const { getByTestId } = render(
    <ItemSlider sliderItems={dummyData.sliderItems} />
  );

  fireEvent.click(getByTestId("indicator-4"));
  expect(getByTestId("slide-1")).toHaveStyle("opacity: 0");
  expect(getByTestId("slide-2")).toHaveStyle("opacity: 0");
  expect(getByTestId("slide-3")).toHaveStyle("opacity: 0");
  expect(getByTestId("slide-4")).toHaveStyle("opacity: 1");
});

export {};
