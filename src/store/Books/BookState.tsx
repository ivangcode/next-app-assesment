import { useReducer } from "react";
import { BooksContext } from "./BooksContext";
import BookReducer from "./BookReducer";
import { Books, BooksContextType, Library } from "@/types";
import { getData } from "@/getData";

export function BookState({ children }: { children: any }) {
  const initialState: BooksContextType = {
    books: [],
    selectedBook: null,
    loading: true,
    getBooks: () => {},
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  const getBooks = () => {
    getData()
      .then((data: Books) => {
        dispatch({ type: "GET_BOOKS", payload: data.library });
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  return (
    <BooksContext.Provider
      value={{
        books: state.books,
        selectedBook: state.selectedBook,
        loading: state.loading,
        getBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
