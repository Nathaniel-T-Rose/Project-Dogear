# Project: Dogear

[**Live Link*]()

Dog Ear Books is a mock of an e-commerce site offering a selection books. It offers a range of titles and access to an AI recommendation system which will provide users a trio of potential titles to investigate based on their favorite books and authors. This project was created to practice skills across the stack using Django, React, and Postgres, as well as integrating with OpenAI's API. 

## Tech Stack:
-   React + Vite
-   Django
-   Postgres

### Features
- **Pagination**: Users may browse titles without an endless scroll, and easily navigate page by page. As this project was intended for practice utilizing Django, pagination has been implimented server side rather than being handled by the client. 
- **Results Filtering and Ordering**: Results may be filtered by genre and may be ordered alphabetically by Title or Author, enhancing a user's ability to search for a specific title.
- **Search**: Stock may be searched by title or author. Title search operates on 'contains' logic, so a user can find books they are lookig for based on title fragments. 
- **Recommendations**: Users may enter titles to use for AI generated recommendations using GPT. This is handled via script which finds additional data from the Google Books API.

## Future Extensions (IP - in progress)
- **Combination Server/Client Pagination (IP)**: Server side pagination results in more calls needing to be made, slowing down overall flow on the site since each page is a new request being made. A combination approach would result in more responsively being able to get through.
- **Quick Add (IP)**: Bypass the need to view individual book pages with a quick add button on each card in the search/browse view.
- **Book Card Back**: add scrollable details on back of individual cards as a 'back side' with a flip animation or as a popup, functionally would work as an in-browse view of the individual book page.
- **Full About Page**: add fleshed out about page for a full mock.

## Attributions
- This project is solely for personal use. I do not own any of the rights for the assets used in this project.
- All book data sourced from Kaggle. Additional attributes (price, stock, images, etc.) for titles were randomly generated or found via Google Books API. 
- Icons created by Freepik - Flaticon


Developed by **Nathaniel Rose**
