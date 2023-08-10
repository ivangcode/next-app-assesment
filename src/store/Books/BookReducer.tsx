import { BooksContextType, Library } from "@/types";

// Types
const GET_BOOKS = "GET_BOOKS";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: BooksContextType, action: { payload: Library[]; type: string }): BooksContextType  => {
  const { payload, type } = action;

  if (type === GET_BOOKS)
    return {
      ...state,
      books: payload,
      loading: false,
    };

  return state;
};
