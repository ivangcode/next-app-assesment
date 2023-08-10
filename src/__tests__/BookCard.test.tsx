import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Library } from "@/types";

import { BookCard } from "@/components/BookCard";

const mockPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

const mockItem: Library = {
  book: {
    ISBN: "123",
    title: "Book 1 Title",
    cover: "/book1-cover.jpg",
    pages: 200,
    genre: "Fiction",
    synopsis: "A great book",
    year: 2023,
    author: {
      name: "John Doe",
      otherBooks: [],
    },
  },
};

test("renders book details and button", () => {
  const { getByText, getByAltText, getByRole } = render(
    <BookCard item={mockItem} />
  );

  const bookTitle = getByText("Book 1 Title");
  const bookImage = getByAltText("Book 1 Title");
  const button = getByRole("button", { name: "Ver detalles" });

  expect(bookTitle).toBeInTheDocument();
  expect(bookImage).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("clicking the button navigates to book details", () => {
  const { getByRole } = render(<BookCard item={mockItem} />);
  const button = getByRole("button", { name: "Ver detalles" });

  fireEvent.click(button);

  expect(mockPush).toHaveBeenCalledWith("book/123");
});

test("show description when title is clicked", () => {
  const { getByText } = render(<BookCard item={mockItem} />);
  const title = getByText("Book 1 Title");

  fireEvent.click(title);

  const description = getByText("A great book");
  expect(description).toBeInTheDocument();
});
