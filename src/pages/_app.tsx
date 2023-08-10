import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BookState } from "@/Books/BookState";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BookState>
        <Component {...pageProps} />
      </BookState>
    </ThemeProvider>
  );
}
