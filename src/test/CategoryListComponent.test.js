import { render, screen } from "@testing-library/react";
import axios from "axios";
import { CategoryListComponent } from "../components/CategoryListComponent";

jest.mock("axios");

test("Category list component testing", () => {
  const data = [
    {
      _id: "65198108426bfc161b028bd6",
      categoryName: "Hello",
      categoryDescription: "Testing",
      __v: 0,
    },
    {
      _id: "651983c1eb4c6c36b7f3de84",
      categoryName: "Category1",
      categoryDescription: "category 1 description",
      __v: 0,
    },
    {
      _id: "651983ceeb4c6c36b7f3de86",
      categoryName: "category2",
      categoryDescription: "Category 2 description",
      __v: 0,
    },
    {
      _id: "651984f7069a4b84ea865ca6",
      categoryName: "City Hello123",
      categoryDescription: "City category is used for cities.",
      __v: 0,
    },
  ];
  axios.get.mockResolvedValue({data});
  render(<CategoryListComponent />);
  const headingElement = screen.getByText(/Testing/i);
  expect(headingElement).toBeInTheDocument();
});
