import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BooksContext } from "@/Books/BooksContext";
import { BooksContextType, Library } from "@/types";
import { BookList } from "@/components/BookList";

const mockPush = jest.fn();

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

const mockContextValue: BooksContextType = {
  books: [
    {
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
    },
  ],
  selectedBook: null,
  loading: false,
  getBooks: jest.fn(),
};

test("renders book list correctly", () => {
  const { getByText } = render(
    <BooksContext.Provider value={mockContextValue}>
      <BookList />
    </BooksContext.Provider>
  );

  const bookTitle = getByText("Book 1 Title");
  expect(bookTitle).toBeInTheDocument();
});
