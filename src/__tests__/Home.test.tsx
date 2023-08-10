import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";
import { BooksContext } from "@/store/Books/BooksContext";
import { BooksContextType } from "@/types";

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

test("renders book titles correctly using context", async () => {
  const { getByText } = render(
    <BooksContext.Provider value={mockContextValue}>
      <Home />
    </BooksContext.Provider>
  );

  await waitFor(() => {
    expect(getByText("Book 1 Title")).toBeInTheDocument();
  });
});
