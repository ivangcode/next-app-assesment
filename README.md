# Library App

Library app built using Next.js and Material-UI that allows users to browse and view book details.

## Project Overview

This project uses Next.js for server-side rendering and routing, and Material-UI for styling and components. The app showcases a list of books from a library, each displayed as a card with an image, title, and "Ver detalles" button that leads to a book details page.


https://github.com/ivangcode/next-app-assesment/assets/73669701/6320c429-9e1e-461c-85b3-d8becb45f85b


## Features

- List of books displayed as cards with cover images and titles.
- Ability to click on a "Ver detalles" button to navigate to a book details page.
- Use of Next.js router for navigation between pages.
- Implementation of dark mode using Material-UI's ThemeProvider.
- A drop-down button to see the book synopsis

## Components

### BookCard

A component that displays book information within a Material-UI Card. Each card contains an image, title, and a "Ver detalles" button that navigates to the book details page.

### BookDetailsPage

A page that displays detailed information about a specific book. This page is dynamically generated based on the book's ISBN.

--
### Context

The application uses a context (BookContext) to manage the state of book data. This context is provided at a higher level to ensure that book data is available to all components that need it.

### Testing

The application includes comprehensive unit testing to ensure its optimal performance and functionality. These tests cover various aspects of the application's components, features, and interactions.


## Installation

1. Clone the repository:

`git clone https://github.com/your-username/library-app.git cd library-app`

2. Install dependencies:

`npm install`

3. Run the development server:

`npm run dev`

Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Testing

Unit tests have been implemented for the `BookCard` component using `@testing-library/react` and `jest`. To run the tests:

`npm run test`

## Future Enhancements

- Integration with a real backend to fetch book data.
- Implementation of more interactive features like book search and filtering.
- Enhanced styling and responsive design for various screen sizes.

## Contributions

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
