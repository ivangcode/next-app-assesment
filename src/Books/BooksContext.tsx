import { BooksContextType } from "@/types";
import { createContext } from "react";


export const BooksContext = createContext<BooksContextType>({
  books: [],
  selectedBook: null,
  loading: false,
  getBooks: () => {}
});
